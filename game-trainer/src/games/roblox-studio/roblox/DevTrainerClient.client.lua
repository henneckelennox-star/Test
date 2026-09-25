--[[
	DevTrainer – Client-Teil (gehört zur App „Game Trainer“)

	Ablage: StarterPlayer → StarterPlayerScripts → LocalScript „DevTrainerClient“

	Erledigt alles, was nur auf dem Client geht: Fliegen, Durch Wände gehen,
	Unendlich springen, Teleport zur Maus. Die Werte kommen vom Server-Skript
	über ReplicatedStorage.DevTrainer (Attribute). Läuft NUR in Roblox Studio.
]]

local RunService = game:GetService("RunService")
if not RunService:IsStudio() then
	return
end

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local UserInputService = game:GetService("UserInputService")

local player = Players.LocalPlayer
local folder = ReplicatedStorage:WaitForChild("DevTrainer")

local function get(name, default)
	local value = folder:GetAttribute(name)
	if value == nil then
		return default
	end
	return value
end

local function getCharacter()
	local character = player.Character
	if not character then
		return nil
	end
	return character, character:FindFirstChildOfClass("Humanoid"), character:FindFirstChild("HumanoidRootPart")
end

local function isTyping()
	return UserInputService:GetFocusedTextBox() ~= nil
end

------------------------------------------------------------------------
-- Gottmodus: Den Todeszustand verwalten der Client (Server füllt Leben auf)
------------------------------------------------------------------------
local function applyGodState()
	local _, humanoid = getCharacter()
	if humanoid then
		humanoid:SetStateEnabled(Enum.HumanoidStateType.Dead, not get("godMode", false))
	end
end

folder:GetAttributeChangedSignal("godMode"):Connect(applyGodState)
player.CharacterAdded:Connect(function(character)
	character:WaitForChild("Humanoid", 10)
	applyGodState()
end)
applyGodState()

------------------------------------------------------------------------
-- Unendlich springen
------------------------------------------------------------------------
UserInputService.JumpRequest:Connect(function()
	if not get("infiniteJump", false) or get("fly", false) then
		return
	end
	local _, humanoid = getCharacter()
	if humanoid then
		humanoid:ChangeState(Enum.HumanoidStateType.Jumping)
	end
end)

------------------------------------------------------------------------
-- Fliegen
------------------------------------------------------------------------
local fly = nil -- { humanoid, root, velocity, align, instances }

local function stopFlying()
	if not fly then
		return
	end
	for _, instance in ipairs(fly.instances) do
		instance:Destroy()
	end
	if fly.humanoid.Parent then
		fly.humanoid.PlatformStand = false
	end
	fly = nil
end

local function startFlying()
	local _, humanoid, root = getCharacter()
	if not (humanoid and root) then
		return
	end

	local attachment = Instance.new("Attachment")
	attachment.Name = "DevTrainerFly"
	attachment.Parent = root

	local velocity = Instance.new("LinearVelocity")
	velocity.Attachment0 = attachment
	velocity.RelativeTo = Enum.ActuatorRelativeTo.World
	velocity.MaxForce = 1e9
	velocity.VectorVelocity = Vector3.zero
	velocity.Parent = root

	local align = Instance.new("AlignOrientation")
	align.Mode = Enum.OrientationAlignmentMode.OneAttachment
	align.Attachment0 = attachment
	align.MaxTorque = 1e9
	align.Responsiveness = 50
	align.CFrame = root.CFrame.Rotation
	align.Parent = root

	humanoid.PlatformStand = true
	fly = { humanoid = humanoid, root = root, velocity = velocity, align = align, instances = { velocity, align, attachment } }
end

local function flyDirection(camera)
	if isTyping() then
		return Vector3.zero
	end
	local look = camera.CFrame.LookVector
	local right = camera.CFrame.RightVector
	local direction = Vector3.zero
	local down = UserInputService.IsKeyDown

	if down(UserInputService, Enum.KeyCode.W) then direction += look end
	if down(UserInputService, Enum.KeyCode.S) then direction -= look end
	if down(UserInputService, Enum.KeyCode.D) then direction += right end
	if down(UserInputService, Enum.KeyCode.A) then direction -= right end
	if down(UserInputService, Enum.KeyCode.Space) or down(UserInputService, Enum.KeyCode.E) then direction += Vector3.yAxis end
	if down(UserInputService, Enum.KeyCode.LeftControl) or down(UserInputService, Enum.KeyCode.Q) then direction -= Vector3.yAxis end

	if direction.Magnitude > 0 then
		direction = direction.Unit
	end
	return direction
end

RunService.RenderStepped:Connect(function()
	local wantFly = get("fly", false)
	if wantFly and (not fly or not fly.root:IsDescendantOf(workspace)) then
		stopFlying()
		startFlying()
	elseif not wantFly and fly then
		stopFlying()
	end

	if fly then
		local camera = workspace.CurrentCamera
		fly.velocity.VectorVelocity = flyDirection(camera) * get("flySpeed", 60)
		local look = camera.CFrame.LookVector
		local flat = Vector3.new(look.X, 0, look.Z)
		if flat.Magnitude > 0.01 then
			fly.align.CFrame = CFrame.lookAt(Vector3.zero, flat)
		end
	end
end)

------------------------------------------------------------------------
-- Durch Wände gehen (Humanoid setzt CanCollide jedes Frame neu, daher Stepped)
------------------------------------------------------------------------
local noclipOriginal = {} -- [BasePart] = ursprüngliches CanCollide

RunService.Stepped:Connect(function()
	local character = player.Character
	if get("noclip", false) and character then
		for _, part in ipairs(character:GetDescendants()) do
			if part:IsA("BasePart") then
				if noclipOriginal[part] == nil then
					noclipOriginal[part] = part.CanCollide
				end
				part.CanCollide = false
			end
		end
	elseif next(noclipOriginal) then
		for part, canCollide in pairs(noclipOriginal) do
			if part.Parent then
				part.CanCollide = canCollide
			end
		end
		table.clear(noclipOriginal)
	end
end)

------------------------------------------------------------------------
-- Teleport zur Mausposition
------------------------------------------------------------------------
folder:GetAttributeChangedSignal("Action_toMouse"):Connect(function()
	local character, _, root = getCharacter()
	if not root then
		return
	end
	local camera = workspace.CurrentCamera
	local mouse = UserInputService:GetMouseLocation()
	local ray = camera:ViewportPointToRay(mouse.X, mouse.Y)

	local params = RaycastParams.new()
	params.FilterType = Enum.RaycastFilterType.Exclude
	params.FilterDescendantsInstances = { character }

	local result = workspace:Raycast(ray.Origin, ray.Direction * 5000, params)
	if result then
		character:PivotTo(CFrame.new(result.Position + Vector3.new(0, 4, 0)) * root.CFrame.Rotation)
	end
end)

print("[DevTrainer] Client bereit.")
