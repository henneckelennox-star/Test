# Asset Board v1: Steal a Brick Planet

**Scope:** this board answers the owner's complaint ("die Optik, die Pets, die Base, das GUI völlig schlecht"): the look, the pets, the base and the GUI are all bad.

**Status of every id on this board:**
- All ids passed a desk check on 2026-09-26: the item exists, its script count and licence text were read, and API or page data was checked.
- "partly" means the item exists and has no scripts, but one detail is still open. That detail is noted in the row.
- Nothing has been opened in Studio yet.
- Creator Store prices are in USD, not Robux.
- **No purchase of any kind without owner approval.**

**Builder rule:** insert only the ids and URLs listed on this board. Look-alike copies found through Toolbox search are off-limits, even when the name is the same.

---

## 1. Style directions

### A. "Brick Galaxy" (RECOMMENDED)

The idea: Grow a Garden's stud UI and Steal a Brainrot's stud world, moved into a bright, cartoon space setting. Everything has studs, and the floor stays bright and saturated even in space.

**Palette**

| Hex | Role |
|---|---|
| `#1B1F5E` | Navy: panels, sky base |
| `#7B4DFF` | Purple: stud floor, Index header, Epic rarity |
| `#E8433A` | Red: stud carpet conveyor, laser gate, X button, Mythic rarity |
| `#FFC21A` | Gold: Shop header, Legendary rarity, Gold mutation |
| `#7BFA0A` | Lime: money, buy buttons |
| `#2FCFFE` | Cyan: Rebirth header, Rare rarity |
| `#FFFFFF` | White: trim, text |
| `#1A1A2E` | Outline and text stroke |
| `#8C7BD6` | Ambient light |

**UI style**
- **Panels:** body `#1B1F5E` with the stud tile 18878366001 laid over it (image id 18878365966, ScaleType Tile, tinted with ImageColor3, ImageTransparency about 0.85).
- **Panel frame:** UIStroke 4 px `#1A1A2E`, UICorner 12 px.
- **Title bar colour per menu:** Shop `#FFC21A`, Index `#7B4DFF`, Rebirth `#2FCFFE`.
- **Buttons:** buy button uses a UIGradient from `#7BFA0A` to `#4DF907`. The X button is red `#E8433A`.
- **Text:** FredokaOne (26) for body text and LuckiestGuy (32) for titles and numbers. All text is white with a 2–3 px `#1A1A2E` UIStroke.
- **HUD:** use the standard genre layout:
  - A left column of large square labelled buttons: Index, Rebirth, Shop, VIP, Robux.
  - Money very large and lime at the bottom-left.
  - Rewards on the right.
  - Menus open in the centre, with a title bar, the X at top-right and a 4-column card grid.
- **Rarity colours:** Common `#FFFFFF`, Rare `#2FCFFE`, Epic `#7B4DFF`, Legendary `#FFC21A`, Mythic `#E8433A`, Secret as an animated rainbow UIGradient.
- **Overhead tag on each pet:** name in white, rarity in its colour, $/s in lime, then the price.

**Pet style**
- Chunky cube pets: Kenney for the low tiers, Quaternius monsters for the high tiers.
- All recoloured to the palette above.
- Space add-ons welded on: antenna, bubble visor, star decal.
- Pets stand on stud pedestals.
- Mutations (Gold, Diamond, Rainbow, Galaxy) are material and colour swaps.

**Planet style**
- Voxel spheres built from stud blocks.
- Rings are made of stud plates.
- Higher rarities get faces (a Decal).
- Mutations swap the material.

**Base style**
- A 3-floor stud-brick hangar in the owner's colour, with white trim.
- Green stud slot pads, a red Neon laser gate, and a plank sign showing the owner's name.
- A COLLECT pad.
- A force-field dome while the base is locked.
- A red stud carpet conveyor through the middle of the map.

**Lighting:** ShadowMap; Ambient and OutdoorAmbient `#8C7BD6`; ColorCorrection Saturation +0.2; bloom only on Neon and Secret items. Starting values are in section 4.

**Assets that fit A**

| Category | Ids / URLs |
|---|---|
| Pets | https://kenney.nl/assets/cube-pets · https://quaternius.com/packs/ultimatemonsters.html · optional 71503059287039 ($2.99) · golden-tier reference 16758792155 |
| Planets / props | Self-built voxel spheres + 17042355690 · https://quaternius.com/packs/ultimatespacekit.html · https://kenney.nl/assets/space-kit · https://kenney.nl/assets/planets (2D, for Index icons and backdrop) |
| Base | https://kenney.nl/assets/space-station-kit · https://kenney.nl/assets/modular-space-kit · https://kenney-assets.itch.io/conveyor-kit · 17042355690 · 3115655893 · 18878366001 |
| GUI | 18878366001 · 99176447965360 · https://gvesster.itch.io/free-icon-pack (Outline set) · devforum.roblox.com/t/900668 (shape reference) · 17542996966 (layout) · game-icons.net · Enum.Font FredokaOne 26 / LuckiestGuy 32 |
| Sky / effects | 8496926666 · https://kenney.nl/assets/particle-pack · 688892084 · 688963157 |

### B. "Candy Cosmos"

**Palette:** `#2A1B6E` `#FF6FD8` `#7DE3FF` `#FFE45C` `#90F613` `#FB0B46` `#FFFFFF` `#26203F`

- **UI:** white rounded panels with a 4 px dark outline, a planet-and-star pattern in the background at about 5 % opacity, glossy lime and pink buttons, glowing 2.5D icons. Fonts: FredokaOne and LuckiestGuy.
- **Pets:** smooth, rounded toon monsters with big eyes and lots of sparkles.
- **Planets:** smooth spheres with faces.
- **Base:** floating pastel islands with checker floors and force-field domes.
- **Lighting:** Future, strong bloom, pastel sky.

| Category | Ids / URLs |
|---|---|
| Pets | https://quaternius.com/packs/cutemonsters.html · https://quaternius.com/packs/ultimatemonsters.html · 80954209451355 ($2.99, includes eggs) · reference 16758792155 |
| Planets / props | https://quaternius.com/packs/ultimatespacekit.html (planets, with Decal faces added) · https://kenney.nl/assets/planets |
| Base | https://quaternius.com/packs/ultimatespacekit.html (domes, alien plants) · 3115655893 |
| GUI | devforum.roblox.com/t/1471212 · https://gvesster.itch.io/free-icon-pack (Regular set) · 99176447965360 · devforum.roblox.com/t/4603719 |
| Sky / effects | 8496926666 · https://kenney.nl/assets/particle-pack |

**Downside:** this direction needs high-quality custom meshes, has almost no brick flavour, and sits close to Pet Simulator 99.

### C. "Neon Star Station"

**Palette:** `#0E1330` `#3F525D` `#1B2123` `#00E5FF` `#FF2E63` `#7FCE42` `#FFD23F` `#FFFFFF`

- **UI:** the Steal a Brainrot layout (slate title bar, dark body) with neon cyan outlines and gradient title bars. Fonts: GothamBlack (20), with Bungee Inline 12187370000 for the logo.
- **Pets:** monsters with Neon eyes and visors.
- **Planets:** low-poly spheres with a Neon atmosphere rim and a rarity aura ring. The conveyor becomes a glowing hover rail.
- **Base:** a dark slate station with stud plates and cyan and white neon trim.
- **Lighting:** darker ambient, SurfaceLights, strong bloom on neon.

| Category | Ids / URLs |
|---|---|
| Pets | https://quaternius.com/packs/ultimatemonsters.html · 71503059287039 ($2.99) · 5440863035 (UFO pets only; credit Interbyte; medium risk) |
| Planets / props | https://kenney.nl/assets/space-kit · https://quaternius.com/packs/ultimatespacekit.html · 86562085896990 ($2.99) |
| Base | https://kenney.nl/assets/space-station-kit (native lavender and blue-grey) · 138256887069021 ($3.99, partly) · 3115655893 |
| GUI | Frames only · game-icons.net glyphs in cyan · 99176447965360 |
| Sky / effects | 9016402918 (partly; near-black starfield) · 5359993882 (partly) |

**Risk:** C is darker and less cartoony. The reference report warns that, done badly, it looks like the version the owner already rejected.

### Why A

1. **It is what the game and the complaint call for.** It is the only direction that is bright, cartoony, chunky, studded and space-themed, which is what "Brick Planet" and the owner's complaint point to.
2. **It copies the two biggest proven looks:**
   - Grow a Garden's stud-textured UI (35.9B visits).
   - Steal a Brainrot's stud world with bright floors (73.6B visits).
   - Steal An Egg's space zone (about 2.2M online) shows that space can stay bright.
3. **It can be built for $0, with no third-party scripts:**
   - Kenney and Quaternius packs (CC0, imported by us).
   - HD Stud Materials (MIT).
   - The free stud decal.
   - Built-in fonts.
4. **Kenney's cube pets already fit.** They speak the same blocky language as the studs, so they need recolours rather than remodelling.
5. **It sets us apart from the competitor.** "Steal a Planet" (93215493073492) went with grey sci-fi and has 0 players online.

**What to borrow from the other directions:**
- From C: Steal a Brainrot's red laser gate and base floor layout.
- From B: Steal An Egg's glossy 2.5D shop icons and lime gradient buy buttons.

---

## 2. Top picks per category

### 2.1 Pets

| # | Asset | ID / URL | Creator | Price | Verified | Use and rework (A) |
|---|---|---|---|---|---|---|
| 1 | Cube Pets 2.0 | https://kenney.nl/assets/cube-pets | Kenney | Free, CC0 | yes | **Main pack for Common to Rare.**<br>• 24 Earth animals, each with 8 animations; about 490–740 triangles.<br>• Import the GLB, recolour to the palette, and weld on 1–2 space add-ons.<br>• The animations move whole parts, so test whether they survive import. Fallback: our own hop-and-bob tween. |
| 2 | Ultimate Monsters | https://quaternius.com/packs/ultimatemonsters.html | Quaternius | Free, CC0 | yes | **Epic to Secret.**<br>• Use Alien, Glub, Armabee, Squidle, Ghost, Goleling and Green Spiky Blob; the Evolved forms are the next tier up.<br>• About 4.2k triangles each: use them only for top tiers, or reduce the triangle count in Blender.<br>• Scale chunkier and flatten the textures to the palette.<br>• Download only from quaternius.com or its Google Drive. The Sketchfab copy is listed as CC-BY. |
| 3 | Cute Animated Monsters | https://quaternius.com/packs/cutemonsters.html | Quaternius | Free, CC0 | yes | Backup or extra top-tier bodies (21 monsters, from 2020, simpler than #2). Same recolour. |
| 4 | Alien Pet Pack | 71503059287039 | nano1456mo | $2.99 | yes | **Optional.** The only ready-made space cube pets.<br>• 0 scripts, 6k triangles in total, 0 votes.<br>• Only about 4 of the 10 are usable. Drop or redesign the 2 Among Us look-alikes (red body with blue visor, grey body with blue visor) and the generic ones (dollar-sign eyes, bat wings). |
| 5 | Low Poly Pets & Eggs | 80954209451355 | predaa74 | $2.99 | yes | **Optional filler:** 120+ pets at about 540 triangles each, plus 7 eggs. 0 scripts, 0 votes. Check every pet for copies of trending games. |
| 6 | Pets asset pack | 16758792155 | INobuser | Free (DevForum permission, credit optional) | yes | **Reference only** for the golden-tier and egg look. The pets are Pet Simulator look-alikes, so don't ship them. |
| 7 | Banning Sim 1 Pets | 5440863035 | Cigatronix / Interbyte Studios | Free, MIT, **credit required** | yes | **Last resort** for 1–3 UFO or alien meshes.<br>• Dated, uneven style; 505k triangles.<br>• Medium risk: suspicious scripts were found in 2020; the API now shows 0.<br>• Quarantine it, take out single meshes, delete the rest. |
| 8 | Studded [Animal Pack] | 82257705200038 (alternative: 121944333988832, Lukami_th, $3.99) | JustJoay | $7.99 | yes | **Don't buy.** Look at it only as a stud reference, and build stud pedestals with 17042355690 instead. |

**Tier plan (A)**

| Tier | Source and treatment |
|---|---|
| Common / Uncommon | Kenney cube pets plus 1 space add-on each |
| Rare | Kenney cube pets plus 2 add-ons in cyan or purple colourways, or the roughly 4 usable aliens from 71503059287039 |
| Epic | Quaternius base forms |
| Legendary | Quaternius Evolved forms (Glub, Armabee, Goleling, Mushnub) |
| Mythic / Secret | Evolved forms with the Galaxy material, a Kenney particle aura and Brickles 688892084 |
| Mutations (any tier) | Gold, Diamond, Rainbow and Galaxy as Material, Color and particle swaps |

### 2.2 Planets, props, sky and effects

| # | Asset | ID / URL | Creator | Price | Verified | Use and rework (A) |
|---|---|---|---|---|---|---|
| 1 | Ultimate Space Kit | https://quaternius.com/packs/ultimatespacekit.html | Quaternius | Free, CC0 | yes | 92 models: rockets, rovers, domes, alien plants, planets. Use the static props only (the animated mechs need rig work). Recolour. |
| 2 | Space Kit (3D) + Planets (2D) | https://kenney.nl/assets/space-kit · https://kenney.nl/assets/planets | Kenney | Free, CC0 | yes | Rocks, ores, rockets and pads for decoration. The 50 planet sprites work for Index icons, distant billboards and the loading screen. |
| 3 | HD Stud Materials (+Weld) | 17042355690 | DudeAx | Free, MIT | yes | **The core of the brick look.**<br>• Put the MaterialVariants in MaterialService and use them on floors, plates, voxel planet blocks and pedestals.<br>• **Visibly stretches on curved meshes**, so never use it on smooth spheres. |
| 4 | Low Poly Space Sci-Fi Props x46 | 86562085896990 (sister packs: 76778582969278, 115831907400961) | Lukami_th | $2.99 each | yes (quality unverified) | **Low priority.**<br>• The creator has 237 store assets, all with 0 votes (mass-produced).<br>• The vehicles pack is heavy (about 5.7k triangles each).<br>• The free kits already cover these props. |
| 5 | Universe Sky | 8496926666 | ramen_rqman | Free | yes | **Default sky for A:** a flat purple-to-peach cartoon gradient with clouds and sparkles. It has no licence text, so replace it with our own sky later (section 4). |
| 6 | Purple Night Sky | 5359993882 (identical copy: 5363085842) | ropeccool | Free | partly | Backup sky (magenta to navy, with stars). The textures probably come from Roblox's 2020 event kit; not confirmed. |
| 7 | Galaxy Skybox | 9016402918 | Festivereinhard2 | Free | partly | For C only. It is a near-black starfield, so check all 6 faces. |
| 8 | Particle Pack | https://kenney.nl/assets/particle-pack | Kenney | Free, CC0 | yes | 80 textures (stars, sparks, glows). Upload them and build our own rarity-aura emitters, one per tier. |
| 9 | Rainbow Brickles + Confetti | 688892084 · 688963157 | Nanonauts | Free | yes | Brick-shaped confetti for Legendary and higher reveals and for egg hatching. Recolour. Skip Colorful Vortex 688965431, which has 1 script. |

### 2.3 Base and environment

| # | Asset | ID / URL | Creator | Price | Verified | Use and rework (A) |
|---|---|---|---|---|---|---|
| 1 | Space Station Kit | https://kenney.nl/assets/space-station-kit | Kenney | Free, CC0 | yes | About 90 pieces: floors, walls, doors, pipes, consoles, stairs, crates. Use them for base interior details. To recolour, edit the kit's shared colour-map image once to the palette. |
| 2 | Modular Space Kit | https://kenney.nl/assets/modular-space-kit | Kenney | Free, CC0 | partly (file formats not confirmed) | 40 rounded walls, doors and pillars. The best match for base interiors. |
| 3 | Space Kit | https://kenney.nl/assets/space-kit | Kenney | Free, CC0 | yes | Hangars, domes, landing pads, rockets, monorail: landmarks between plots. |
| 4 | Conveyor Kit | https://kenney-assets.itch.io/conveyor-kit | Kenney | Free (pay what you want), CC0 | partly (file formats) | Rails and frames for the central conveyor. Recolour from steel and blue to `#E8433A` and white. The belt doesn't move, so we write our own script. |
| 5 | Ultimate Space Kit | https://quaternius.com/packs/ultimatespacekit.html | Quaternius | Free, CC0 | yes | Domes, habitat modules and alien plants around the plots. Static props only. |
| 6 | HD Stud Materials | 17042355690 | DudeAx | Free, MIT | yes | Plot floors, base walls in the owner's colour, slot pads and edges. The Weld variant covers trim seams. |
| 7 | Force Field (hex dome) | 3115655893 | XenoSynthesis | Free | yes | The lock-base dome: 1 MeshPart, 3,200 triangles, ForceField material. Set its Color to the owner's colour. |
| 8 | Classic stud texture | 18878366001 (image 18878365966) | 0bjectshow_fan | Free | yes | Texture objects on signs and pads where a MaterialVariant doesn't fit. |
| 9 | Base Defense Plot Traps Props Kit x50 | 138256887069021 | Lukami_th | $3.99 | partly (quality unverified) | **Optional.** The only candidate with an owner door, laser gate, plot sign, vault and spawn pad. It is grey-heavy and needs recolouring. Otherwise, kitbash these pieces ourselves (section 4). |

### 2.4 GUI

| # | Asset | ID / URL | Creator | Price | Verified | Use and rework (A) |
|---|---|---|---|---|---|---|
| 1 | Simulator Icon Pack | 99176447965360 | DevJoob | Free | yes | **Main icon set:** 112 decals, 294 up / 6 down votes. Give credit. Use this exact id only, **not** the copies 108206621646849 or 99200681519083. |
| 2 | Free Icon Pack v3.1 | https://gvesster.itch.io/free-icon-pack | gvesster | Free (the DEV version with SVGs is $4.49+) | yes | • Use the ready-made Outline set, and the Recolor and Flat variants, as they ship.<br>• Editing them in a commercial game is a grey area, so ask the author before recolouring.<br>• No AI training on these icons. |
| 3 | Full Game Cartoon UI Pack V2 (PSD + RBXL) | devforum.roblox.com/t/900668 | Bylocks | Free, no licence stated | yes | Shape, bevel and button reference.<br>• Recolour the PSD, export PNGs and upload them under the game owner.<br>• **Delete the Discord, Facebook and Twitter icons** (one user was moderated for uploading them).<br>• Replace the Riffic font with LuckiestGuy or FredokaOne.<br>• Open the RBXL only in quarantine (section 3). |
| 4 | Free Simulator UI Kit (PSD) | devforum.roblox.com/t/1471212 | Serraated (FramedBlake) | Free (games OK; no resale, redistribution or portfolio use) | yes | Second reference. It is inspired by Pet Simulator, so restyle it heavily with studs and the palette. |
| 5 | Clicking Simulator UI Kit! | 17542996966 | ILikePenutButterJely | Free | partly (author unclear, 0 votes) | **Layout skeleton only:** pet inventory, shop, rebirth, trading, codes, stats, index, egg preview. The API reports no scripts. Replace all the visuals. |
| 6 | Gamepass & Badge Icons (100+) | devforum.roblox.com/t/4603719 | ClassicDivines | Free, commercial use OK | yes | Gamepass, developer product and badge icons. Add a stud frame and an outline. |
| 7 | game-icons.net | https://game-icons.net | Lorc, Delapouite and others | Free, **CC BY 3.0 (credit required)** | yes | Glyphs for the gaps: rocket, planet, lock, shield, steal. Export white PNGs. UIStroke doesn't outline images, so put a slightly larger dark copy behind each glyph. |
| 8 | Fonts | Enum.Font LuckiestGuy 32, FredokaOne 26, Cartoon 9, GothamBlack 20 · Bungee Inline 12187370000 · Bungee Shade 12187367666 | Roblox | Free (OFL) | yes | A: LuckiestGuy for titles and numbers, FredokaOne for body text, with a 2–3 px stroke. Logo: Bungee or a pre-rendered image. **No custom .ttf files:** they don't work once the game is published. |
| 9 | Stud tile | 18878366001 | 0bjectshow_fan | Free | yes | Tiled panel backgrounds, tinted per menu. |

### 2.5 Look references (view only, never insert)

| Game | Links | What to take |
|---|---|---|
| Steal a Brainrot | https://www.roblox.com/games/109983668079237 · https://static.wikia.nocookie.net/stealabr/images/8/85/Base.png · https://static.wikia.nocookie.net/stealabr/images/b/b7/Screenshot_2025-09-28_at_4.23.30_PM.png | HUD layout, base layout, laser gate, overhead tags |
| Steal An Egg | https://www.roblox.com/games/107778070777162 · https://static.wikia.nocookie.net/stealanegg/images/8/80/Full_speed_shop_screenshot.png | Glossy 2.5D shop icons, lime gradient buy buttons, a bright space zone |
| Grow a Garden | https://www.roblox.com/games/126884695634066 · https://static.wikia.nocookie.net/growagarden/images/7/70/Pets_menu.png | Stud-textured title bars, left tab stack, rarity pills |
| Pet Simulator 99 | https://www.roblox.com/games/8737899170 · https://static.wikia.nocookie.net/pet-simulator/images/4/4b/PS99_Box_UI_Customization.png | Outline thickness and bevelled X. A cue only; don't copy. |
| Steal a Planet (competitor) | https://www.roblox.com/games/93215493073492 | The benchmark to beat: grey sci-fi, 0 online |

---

## 3. Import and safety procedure

### 3.1 Staging
1. Create an empty place, "Asset Staging", and add a Folder `ServerStorage/Quarantine`.
2. Put every insert in that folder first, never in Workspace. **Don't press Play or Run in the staging place until the scan in 3.3 is clean.**
3. Settings in the live place:
   - Allow HTTP Requests off, unless our own code needs it.
   - `ServerScriptService.LoadStringEnabled = false`.
   - Third-party teleports and third-party sales off.

### 3.2 Insert
- **Creator Store items:**
  - Search the exact numeric id in the Toolbox, or open the store page and use Get, then Toolbox Inventory.
  - Check that the name **and** the creator match this board, then insert into Quarantine.
- **Paid items:** you can't insert them without buying them, so judge them from the store preview first. The owner buys them with the account or group that owns the game, after approving the spend.
- **Kenney and Quaternius packs (CC0):**
  - Download only from kenney.nl, kenney-assets.itch.io, or quaternius.com and its official Google Drive.
  - Never use Sketchfab (listed as CC-BY) or store re-uploads.
  - Import GLB or glTF files (FBX as fallback) with the 3D Importer.
  - **Upload under the account or group that owns the experience**, or the meshes and animations won't load in the live game. Publish the animations under the same owner.
- **Images** (icons, PSD exports, particles, 2D planets):
  - Upload them with Asset Manager Bulk Import under the owner.
  - Never reuse third-party decal ids, such as the ones in the Bylocks RBXL.
- **Off-platform .rbxl files** (Bylocks from MediaFire): open them only in the staging place and without Play. Run the scan and take only the images.

### 3.3 Scan (run in the command bar right after each insert)
```lua
local root = game:GetService("ServerStorage"):WaitForChild("Quarantine")
local patterns = {"require%s*%(%s*%d", "require%s*%(%s*tonumber", "getfenv", "setfenv",
  "loadstring", "HttpService", "InsertService", "TeleportService", "MarketplaceService",
  "string%.char", "\\%d%d%d", "HttpGet", "_G%.", "rawset"}
local scripts, flagged = 0, 0
for _, d in ipairs(root:GetDescendants()) do
  local src
  if d:IsA("LuaSourceContainer") then
    scripts += 1
    local ok, s = pcall(function() return d.Source end)
    src = ok and s or ""
  elseif d:IsA("StringValue") then
    src = d.Value
  end
  if src then
    local hits = {}
    for _, p in ipairs(patterns) do if src:find(p) then table.insert(hits, p) end end
    if #hits > 0 then flagged += 1 end
    if #hits > 0 or d:IsA("LuaSourceContainer") then
      warn(d.ClassName, d:GetFullName(), "len=" .. #src, table.concat(hits, " | "))
    end
  end
end
print("scripts:", scripts, "flagged:", flagged)
```
**Hard stop:** if an asset the board lists as having 0 scripts shows any script, or any hit for `require(<number>)`, `getfenv` or `loadstring`, delete the whole asset and report it. Don't try to clean it.

Also look for these by hand:
- Invisible parts (Transparency 1) or very small parts (Size under 0.1).
- Unexpected Sound, ClickDetector, ProximityPrompt, Remote* or Bindable* objects.

### 3.4 Clean art-only models (every asset on this board is art-only)
```lua
for _, d in ipairs(root:GetDescendants()) do
  if d:IsA("LuaSourceContainer") or d:IsA("BaseRemoteEvent") or d:IsA("RemoteFunction")
    or d:IsA("BindableEvent") or d:IsA("BindableFunction")
    or d:IsA("ClickDetector") or d:IsA("ProximityPrompt") then
    d:Destroy()
  end
end
```
- **Keep:** MeshPart, Part, SpecialMesh, SurfaceAppearance, Texture, Decal, MaterialVariant (move to MaterialService), Attachment, Bone, Motor6D, welds, AnimationController, Animator, Animation, ParticleEmitter, Beam, Sky (move to Lighting), and UI objects.
- **Rescan** until it prints `scripts: 0 flagged: 0`. Only then copy the asset into the live place.
- **Behaviour** (conveyor, lock, pet follow) always comes from **our own** scripts, never from asset scripts.

### 3.5 After import
- **Pets:**
  - Pivot at bottom centre, PrimaryPart set.
  - CanCollide, CanTouch and CanQuery all false; Massless true; CollisionFidelity Box.
  - Make all pets roughly the same height, since Kenney and Quaternius import at different scales.
- **Props:** Anchored true; CollisionFidelity Box or Hull.
- **Suggested triangle budget:** common pets up to about 1k triangles, top tiers up to about 5k. Reduce Quaternius meshes if many are on screen at once.
- **Record the source on every asset root:** `SetAttribute("Source", "<id or URL>")`, `SetAttribute("Licence", "CC0" / "MIT" / "CC BY 3.0" / "Store")`, and `SetAttribute("Creator", "<name>")`.

### 3.6 Never insert (confirmed as bad during verification)
- Copies of DevJoob's icon pack: 108206621646849 and 99200681519083.
- Colorful Vortex 688965431 (1 script).
- The "Steal A Brainrot Map" free model (7 scripts).
- "Auras Pack Not mine!" and its paid copies (20 scripts).
- The "Synty Sci-Fi City Pack" re-upload by RICHDBRO.
- "Viral Cube Pets" (a paid re-upload of Kenney's free pack).
- Any Brainrot pet or map pack, and any Pet Simulator look-alike pack.
- Free tycoon kits that contain scripts.
- Roblox's "Beyond the Dark" space packs (58 scripts, 894k triangles).

### 3.7 Credits (paste into the game description and an in-game Credits panel)

**Required:**
- Icons by Lorc, Delapouite *(plus each other author actually used)*, available on https://game-icons.net, licensed CC BY 3.0.
- HD Stud Materials, Copyright (c) 2024 dudeax, MIT License (github.com/dudeax/Roblox-HD-Studs).
- Pets by Interbyte Studios, MIT. *(Only if any mesh from 5440863035 ships.)*

**Courtesy credits (recommended):**
- Kenney (kenney.nl): Cube Pets, Space Kit, Space Station Kit, Modular Space Kit, Conveyor Kit, Planets, Particle Pack (CC0).
- Quaternius (quaternius.com): Ultimate Monsters, Cute Animated Monsters, Ultimate Space Kit (CC0).
- DevJoob: Simulator Icon Pack. The pack mentions attribution but gives no terms, so credit it.
- gvesster: Free Icon Pack.
- ClassicDivines: Gamepass & Badge Icons.
- Bylocks: Cartoon UI Pack V2.
- Serraated / FramedBlake: Simulator UI Kit.
- ramen_rqman (sky), Nanonauts (particles), XenoSynthesis (force field), 0bjectshow_fan (stud texture), INobuser (if used).

---

## 4. Gaps and plan

| Gap | Free plan (default) | Paid or commission option (owner approval) |
|---|---|---|
| **No original, animated space-pet set in one style** | A "space pass" over Kenney and Quaternius:<br>• One shared add-on library (antenna, bubble visor, star decal, ring halo, mini jetpack, alien eyes), welded onto each pet.<br>• One palette for everything.<br>• If imports lose the animations, use our own hop-and-bob idle. | 71503059287039, $2.99 (about 4 usable aliens) · commission a set of 20–30 cube space pets (quote needed) |
| **No space eggs and no Gold, Rainbow or Galaxy variants** | • Egg: a Ball part scaled 1 : 1.3 : 1, with the stud texture, star decals and the tier colour.<br>• Variants: Material and Color swaps plus a Kenney particle aura, and Brickles 688892084 for the top tiers.<br>• Use 16758792155's golden tiers as the reference. | 80954209451355, $2.99 (includes 7 eggs) |
| **No stylised brick planets in the store** | 1. Build 3 master voxel planets (small, medium, large) from stud blocks.<br>2. Recolour each planet; add Decal faces for high rarities; rings from stud plates; moons are small voxel spheres.<br>3. **Test first** how the stud material looks on the blocks and how many parts a planet takes. If it's too many, merge each master into one MeshPart with per-face UVs. | Commission 3 master meshes with clean UVs (quote needed) |
| **No owner door or laser gate, plot sign, lock button or collect pad** | Kitbash them:<br>• Laser gate: Kenney door frames and pillars plus red Neon Beam lasers.<br>• Plot sign: brown plank Parts plus a SurfaceGui in LuckiestGuy.<br>• Collect pad: a green stud cylinder plus a SurfaceGui reading "COLLECT".<br>• Lock button: a Neon cylinder plus a ProximityPrompt.<br>• Lock dome: 3115655893. | 138256887069021, $3.99 |
| **No animated conveyor** | Kenney Conveyor Kit rails plus a red stud belt Part, driven by our own ~10-line script: scroll `Texture.OffsetStudsV` (or a Beam's `TextureSpeed`) and set the belt's `AssemblyLinearVelocity` | Not needed |
| **No clearly licensed cartoon sky** | Use 8496926666 for now. Then make our own 6-face sky (purple-to-pink gradient, stars, flat clouds) and upload it under the owner. | Small commission (quote) |
| **No space GUI pieces** (planet frames, rocket buttons, base-lock HUD, pet cards, rarity frames) | • Build them from Frames (UICorner, UIStroke, UIGradient) plus the stud tile 18878366001, game-icons.net glyphs and recoloured Bylocks PSD parts.<br>• Pet and planet cards show the live 3D model in a ViewportFrame. | gvesster DEV, $4.49+ (SVGs), only if icons must be edited. The other paid UI kits all have 0 votes; not recommended. |
| **Overall scene look** (the "Optik" complaint) | Starting values for A, to tune by eye:<br>• Lighting: Technology ShadowMap, Ambient and OutdoorAmbient `#8C7BD6`, Brightness about 2.5.<br>• ColorCorrection: Saturation 0.2, Contrast 0.05.<br>• Bloom: high Threshold (1.5 or more) so only Neon and Secret items glow.<br>• Atmosphere: light, Density about 0.25, lavender colour.<br>• Floor `#7B4DFF`, conveyor `#E8433A`. | None |

### Paid shortlist (Creator Store prices in USD, none bought without owner approval)

| Item | Id | Price | Advice |
|---|---|---|---|
| Alien Pet Pack | 71503059287039 | $2.99 | Optional, if the space pass on Kenney pets isn't enough |
| Low Poly Pets & Eggs | 80954209451355 | $2.99 | Optional, for eggs and more pets |
| Base Defense Plot Traps Kit x50 | 138256887069021 | $3.99 | Optional; judge from the store preview first |
| Space Sci-Fi Props x46 | 86562085896990 | $2.99 | Low priority; the free kits cover it |
| gvesster DEV (SVG) | gvesster.itch.io/free-icon-pack | $4.49+ | Only if icons need editing |
| Studded Animal Pack / alternative | 82257705200038 / 121944333988832 | $7.99 / $3.99 | Don't buy |

- **Minimum spend for A:** $0.
- **Maximum if every optional item is bought:** about $17.45 USD, plus any commissions (quotes needed).

### Test in Studio first, before the full build
1. Do the Kenney GLB part animations survive the import?
2. Does a Quaternius skinned monster keep its rig and play its animations?
3. How does the HD stud material look on voxel planet blocks, and on a sphere?
4. How does the recoloured Kenney colour map look under the A lighting?
5. Scale and pivots: bring Kenney and Quaternius pets to one common height.
6. Which file formats do the Modular Space Kit and Conveyor Kit zips actually contain?
7. What do all faces of sky 8496926666 look like with the A lighting?

Then build one A mock-up: one plot, 3 pets, the conveyor and the HUD. Screenshot it and get the owner's sign-off before rolling it out everywhere.