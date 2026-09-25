--[[
	DevTrainer – Server-Teil (gehört zur App „Game Trainer“)

	Ablage:        ServerScriptService → Script „DevTrainer“
	Voraussetzung: Game Settings → Security → „Allow HTTP Requests“ = an

	Das Skript fragt die App auf deinem PC (http://localhost:34873) nach den
	eingeschalteten Cheats und wendet sie an. Es läuft NUR in Roblox Studio –
	im veröffentlichten Spiel beendet es sich sofort und tut nichts.
]]

local RunService = game:GetService("RunService")
if not RunService:IsStudio() then
	return
end

local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Lighting = game:GetService("Lighting")

local URL = "http://localhost:34873/v1/roblox-studio/state"
local POLL_INTERVAL = 0.3 -- Sekunden (≈200 Anfragen/Minute, Limit ist 500)
local RESET_AFTER_FAILURES = 10 -- nach ~3 s ohne App: alle Cheats aus

-- Standardwerte = alle Cheats aus (müssen zu index.js passen)
local DEFAULTS = {
	godMode = false,
	speed = 1,
	jump = 1,
	infiniteJump = false,
	fly = false,
	flySpeed = 60,
	noclip = false,
	gravity = 100,
	fullbright = false,
}

-- Über diesen Ordner bekommt das Client-Skript die Werte (als Attribute).
local folder = ReplicatedStorage:FindFirstChild("DevTrainer")
if not folder then
	folder = Instance.new("Folder")
	folder.Name = "DevTrainer"
	folder.Parent = ReplicatedStorage
end

local values = {}
local lastActions = {}
local actionsInitialized = false

local originalGravity = workspace.Gravity
local originalLighting = nil
local godState = {} -- [player] = { humanoid = Humanoid, connection = RBXScriptConnection }

local function getHumanoid(player)
	local character = player.Character
	return character and character:FindFirstChildOfClass("Humanoid")
end

-- Multipliziert eine Humanoid-Eigenschaft und merkt sich den Originalwert.
local function scaleProperty(humanoid, property, factor)
	local key = "DevTrainer_" .. property
	local original = humanoid:GetAttribute(key)
	if factor == 1 then
		if original ~= nil then
			humanoid[property] = original
			humanoid:SetAttribute(key, nil)
		end
		return
	end
	if original == nil then
		original = humanoid[property]
		humanoid:SetAttribute(key, original)
	end
	humanoid[property] = original * factor
end

local function setGodMode(player, humanoid, enabled)
	local state = godState[player]
	if state and (not enabled or state.humanoid ~= humanoid) then
		state.connection:Disconnect()
		godState[player] = nil
		if state.humanoid.Parent then
			local maxHealth = state.humanoid:GetAttribute("DevTrainer_MaxHealth") or 100
			state.humanoid:SetAttribute("DevTrainer_MaxHealth", nil)
			state.humanoid.MaxHealth = maxHealth
			state.humanoid.Health = maxHealth
		end
		state = nil
	end

	if enabled and not state then
		humanoid:SetAttribute("DevTrainer_MaxHealth", humanoid.MaxHealth)
		humanoid.MaxHealth = math.huge
		humanoid.Health = math.huge
		godState[player] = {
			humanoid = humanoid,
			connection = humanoid.HealthChanged:Connect(function(health)
				if health < humanoid.MaxHealth then
					humanoid.Health = humanoid.MaxHealth
				end
			end),
		}
	end
end

local function applyToCharacter(player)
	local humanoid = getHumanoid(player)
	if not humanoid then
		return
	end
	scaleProperty(humanoid, "WalkSpeed", values.speed or 1)
	if humanoid.UseJumpPower then
		scaleProperty(humanoid, "JumpPower", values.jump or 1)
	else
		scaleProperty(humanoid, "JumpHeight", values.jump or 1)
	end
	setGodMode(player, humanoid, values.godMode == true)
end

local function applyWorld(changed)
	if changed.gravity then
		workspace.Gravity = originalGravity * ((values.gravity or 100) / 100)
	end
	if changed.fullbright then
		if values.fullbright then
			if not originalLighting then
				originalLighting = {
					Brightness = Lighting.Brightness,
					ClockTime = Lighting.ClockTime,
					FogEnd = Lighting.FogEnd,
					GlobalShadows = Lighting.GlobalShadows,
					OutdoorAmbient = Lighting.OutdoorAmbient,
				}
			end
			Lighting.Brightness = 2
			Lighting.ClockTime = 14
			Lighting.FogEnd = 100000
			Lighting.GlobalShadows = false
			Lighting.OutdoorAmbient = Color3.fromRGB(128, 128, 128)
		elseif originalLighting then
			for property, value in pairs(originalLighting) do
				Lighting[property] = value
			end
			originalLighting = nil
		end
	end
end

-- Knöpfe, die der Server ausführt. Alle anderen (z. B. toMouse) erledigt das Client-Skript.
local serverActions = {
	heal = function(player)
		local humanoid = getHumanoid(player)
		if humanoid then
			humanoid.Health = humanoid.MaxHealth
		end
	end,
	toSpawn = function(player)
		local character = player.Character
		if not character then
			return
		end
		local spawnLocation = player.RespawnLocation or workspace:FindFirstChildWhichIsA("SpawnLocation", true)
		local target = spawnLocation and spawnLocation.CFrame or CFrame.new(0, 10, 0)
		character:PivotTo(target + Vector3.new(0, 5, 0))
	end,
	respawn = function(player)
		player:LoadCharacter()
	end,
}

local function applyState(data)
	local changed = {}
	for key, value in pairs(data.values or {}) do
		if values[key] ~= value then
			values[key] = value
			changed[key] = true
			folder:SetAttribute(key, value)
		end
	end

	if changed.speed or changed.jump or changed.godMode then
		for _, player in ipairs(Players:GetPlayers()) do
			applyToCharacter(player)
		end
	end
	applyWorld(changed)

	for actionId, count in pairs(data.actions or {}) do
		-- Beim ersten Abruf nur merken, damit alte Klicks nicht nachträglich auslösen.
		if actionsInitialized and count ~= (lastActions[actionId] or 0) then
			local handler = serverActions[actionId]
			if handler then
				for _, player in ipairs(Players:GetPlayers()) do
					task.spawn(handler, player)
				end
			else
				folder:SetAttribute("Action_" .. actionId, count)
			end
		end
		lastActions[actionId] = count
	end
	actionsInitialized = true
end

local function onPlayerAdded(player)
	player.CharacterAdded:Connect(function(character)
		character:WaitForChild("Humanoid", 10)
		applyToCharacter(player)
	end)
	if player.Character then
		applyToCharacter(player)
	end
end

Players.PlayerAdded:Connect(onPlayerAdded)
for _, player in ipairs(Players:GetPlayers()) do
	onPlayerAdded(player)
end
Players.PlayerRemoving:Connect(function(player)
	local state = godState[player]
	if state then
		state.connection:Disconnect()
		godState[player] = nil
	end
end)

local function poll()
	local url = URL .. "?place=" .. HttpService:UrlEncode(game.Name)
	local ok, body = pcall(HttpService.GetAsync, HttpService, url, true)
	if not ok then
		return false, body
	end
	local decoded, data = pcall(HttpService.JSONDecode, HttpService, body)
	if not decoded then
		return false, data
	end
	return true, data
end

task.spawn(function()
	local connected = false
	local failures = 0
	local warned = false

	while true do
		local ok, result = poll()
		if ok then
			if not connected then
				print("[DevTrainer] Mit Game Trainer verbunden.")
				connected = true
			end
			failures = 0
			applyState(result)
		else
			failures += 1
			if failures == RESET_AFTER_FAILURES then
				if connected then
					print("[DevTrainer] Verbindung zur App verloren – alle Cheats aus.")
					applyState({ values = DEFAULTS })
					connected = false
				end
				if not warned then
					warned = true
					local message = tostring(result)
					if message:find("not enabled") then
						warn("[DevTrainer] HTTP-Anfragen sind aus: Game Settings → Security → „Allow HTTP Requests“ einschalten.")
					else
						warn("[DevTrainer] Keine Verbindung zur App (läuft Game Trainer?): " .. message)
					end
				end
			end
		end
		task.wait(POLL_INTERVAL)
	end
end)
