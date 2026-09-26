# Runbook: getting the 36 pet models into the place while the owner is away

**Summary:** There are two ways to do this with no owner action, B and C. Each depends on one untested condition, so check both conditions in the first few minutes. If both fail, the only option that needs no owner action is D, and D uses substitute models, not the real Kenney/Quaternius ones. The real files would then need one API key from the owner (A).

Getting access means asking the owner. Do not try to get around a login: no `.ROBLOSECURITY` cookie, no stored passwords.

## Step 0: check the two conditions (about 2 minutes)
1. Is the desktop locked? Run `Get-Process LogonUI -EA 0`. If it returns a process, the desktop is locked and C is not possible.
2. Can Studio upload meshes? Run this with `execute_luau` (Edit). It uploads a throwaway asset named "probe".
   ```lua
   local AS=game:GetService("AssetService"); local em=AS:CreateEditableMesh()
   local v=em:BatchAdd(Enum.MeshAttribute.Vertex,{Vector3.zero,Vector3.xAxis,Vector3.yAxis}); em:AddTriangle(v[1],v[2],v[3])
   print(pcall(AS.CreateAssetAsync,AS,em,Enum.AssetType.Mesh,{Name="probe",IsPackage=false}))
   ```
   - `true Success <id>` means use B.
   - Any error: write it down and go to C.

## 1st choice: B, build the meshes in Luau and upload them (no UI)
1. **Turn the FBX files into GLB on the PC.** First check whether the Quaternius pack already ships glTF. If not, run `FBX2glTF.exe --binary -i X.fbx -o X`. Only the static pose is kept.
2. **Prepare the data in PowerShell.**
   - Encode each GLB with `[Convert]::ToBase64String([IO.File]::ReadAllBytes($p))`.
   - Decode the Kenney colormap PNG with System.Drawing, swap BGRA to RGBA, and encode that as base64 too.
   - If the text is too big for one `execute_luau` call, split it across StringValues in `ServerStorage.GlbTmp` and delete them afterwards.
3. **Parse the GLB in Luau.**
   ```lua
   local b=game:GetService("EncodingService"):Base64Decode(buffer.fromstring(s))
   local jl=buffer.readu32(b,12)
   local j=game:GetService("HttpService"):JSONDecode(buffer.readstring(b,20,jl))
   local bin=20+jl+8
   ```
   - Component types: 5126 is `readf32`, 5125 `readu32`, 5123 `readu16`, 5121 `readu8`.
   - Respect `byteStride`. glTF indices start at 0, so add 1.
   - Apply each node's TRS. Scale by about ×3.57 or to a target height.
4. **Build the meshes.**
   - Kenney: one EditableMesh per texture, using `BatchAdd` (Vertex/Normal/UV), then `AddTriangle`, `SetFaceUVs` and `SetFaceNormals`. Stay at or under 20k triangles.
   - Quaternius: one MeshPart per material, coloured with `BasePart.Color`.
5. **Upload.** Call `CreateAssetAsync(em, Enum.AssetType.Mesh, {Name=..., Description="CC0 Kenney/Quaternius", IsPackage=false})`. Upload the colormap once as an Image. The limit is 30 per minute, so wait `task.wait(2.5)` between calls.
6. **Create the parts.** Call `AS:CreateMeshPartAsync(Content.fromAssetId(id),{CollisionFidelity=Enum.CollisionFidelity.Box})`, then set `TextureContent`, anchor the parts and group them into Models under `ServerStorage.Pets`. If a mesh is still processing, retry up to 3 times.
7. **Test with one pet first.** Check winding and the V-flip with `screen_capture`, then do the other 35.
8. **Make the result stick.** Also upload each finished pet with `Enum.AssetType.Model` and `IsPackage=false`. Save a CSV of name → asset ID on the PC, so the pets survive even if the place is never saved.

## 2nd choice: C, drive the Studio Importer
Only if the desktop is unlocked and Studio is not running as admin.
1. Call `SetThreadExecutionState(0x80000003)` so the screen stays on, and `SetProcessDPIAware()`. Put the files in `C:\rbx_import\b1..b3`, 12 per folder, with short ASCII names and each FBX's textures next to it.
2. Bring Studio to the front with `AppActivate`, then send `SendKeys ^m`. If that does nothing, use File > Import.
3. In the file dialog, match on window class `#32770`, not the title (on German Windows it is "Öffnen"). Set AutomationId 1148 to the folder path and press Enter. Then set it to `"a.glb" "b.glb" …` and invoke AutomationId 1.
4. Take a screenshot with `CopyFromScreen`. Check that Creator is the owner and Upload to Roblox is on. Then click Import All with `SetCursorPos` + `mouse_event`. Stay under 50 files per batch.
5. Check the result with `execute_luau` (`MeshId` must not be empty) and `get_console_output`. On "Upload Mesh failed", retry with a smaller batch. Then `ScaleTo`, anchor the models and move them to ServerStorage.

## 3rd choice: D, free stand-ins from the Creator Store
This always works, but these are not the real models, so report them as placeholders.
- Insert each with `insert_asset`, split the packs into single Models under `ServerStorage.Pets`, anchor and scale them, and check with `screen_capture`.
- IDs: 15894403400 (about 10 cube animals), 18873463683 (about 8), 76069502838572, 11252047975, 7102203011, 14022567478, 9715964641. Use 12499907326 for a space theme.
- All are free and contain no scripts (checked 2026-09-26).

## Needs the owner: A, Open Cloud (only if B and C both fail)
Get the PC's IP with `curl.exe -s https://api.ipify.org`. Also check `api64.ipify.org`, because an IPv6 connection would be blocked by an IPv4-only restriction.

Ask him in one sentence:
> "Kannst du bitte auf create.roblox.com/dashboard/credentials einen API-Key mit Assets Read+Write, IP-Beschränkung <IP>/32 und Ablauf morgen erstellen, ihn mir schicken und nach dem Upload wieder löschen?"

Then:
1. Keep the key only in `$env:RBX_KEY`. Check it with the introspect endpoint and read `authorizedUserId`.
2. Write `req.json` with `"assetType":"Model"` and `"expectedPrice":0`. For each file run:
   ```
   curl.exe -s -X POST https://apis.roblox.com/assets/v1/assets -H "x-api-key: $env:RBX_KEY" -F "request=<req.json" -F "fileContent=@cat.glb;type=model/gltf-binary"
   ```
   For FBX files use `type=model/fbx`.
3. Poll `operations/{id}` until `done`. Insert each asset ID with `insert_asset`. Upload one file first to check that textures come through.

## Saving the place
- Team Create saves on its own.
- If the desktop is unlocked, send `SendKeys ^s`.
- Otherwise, report "place not saved, press Ctrl+S" together with the CSV of model IDs.

## Risks
- Every upload is in the owner's name and goes through moderation. While an asset is "Reviewing", it may not load yet.
- Do not restart Studio or edit GlobalSettings to turn on the beta while there is unsaved work.
- Importer: batches of 50 or more can come in as empty meshes, and rigged Quaternius FBX files may upload their animations too.
- UV direction, winding and whether textures survive are all untested, so always do one pet first.
- Never print the API key or write it to a file or log.
