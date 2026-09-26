# Steal a Brick Planet (working title) v2: Build Spec, revision 2

**Source tags:** [SG] steal-genre research · [UX] top-UX research · [OS] open-source research · [VA] visual/audio research · [DM] discovery/monetization research · [PT] policy/tech research · **[WEB]** checked online during this revision on 2026-09-26 · **[SIM]** Python prototype of the economy run during this revision · **[GRK]** general Roblox knowledge that the research does not cover (verify in Studio first) · **[DES]** a design decision, tunable in config.

**Rules for the builder:**
- Every balance number below lives in config. Display and balance data goes in `ReplicatedStorage.Shared.Config.*`. Secrets and anti-cheat values go in `ServerStorage.ServerConfig.*` (§8.2). Balancing must never need code edits.
- Where this spec conflicts with v1, this spec wins.
- Build in the order of Section 9. Pass each acceptance check and stop at every **owner gate** before moving on.
- All balance numbers are starting values. The EconomySim (§3.20) is the judge, and the soft test is the final judge.

---

## 0. What changed in this revision

1. **New title.** "Steal a Planet" is already taken. The working title is "Steal a Brick Planet", and the owner picks the final one (§10.1).
2. **New core mechanic "Ausbauen" (build up).** Every Planetling grows from Lv1 to Lv5, and you can watch the bricks snap on (§3.6). There is also a **Lauf-Rad** for speed training (§3.13). The current genre leader grew with exactly these two kinds of loops (§1.14).
3. **Look and fun come first.** M0 looks at the old game and extracts its style. A polished "Golden 10 minutes" slice follows, then an owner + friends play-test gate. Only after that do we build the breadth (§9).
4. **The economy is re-tuned and simulated.** New rarity rates, collision-free guaranteed spawns, capped multipliers, √-priced mutations and a new rebirth table. Simulated pacing: R1 at about 23 min, R5 at about 3.4 h, R10 at about 56 h of active play (§3.20).
5. **Stealing has real drama.** After each shield a 10 s "Nachladen" (reloading) window leaves the base open. Thieves get tools. Gear works fully only against thieves and intruders. Rewards cannot be farmed (§3.9–§3.12).
6. **Data safety is fixed.** Stolen units can no longer be duplicated. Receipts follow the official ProfileStore pattern and never lose a purchase. Units bought with Robux cannot be stolen (§8.6, §6).
7. **Reach is planned from day 1.** Roblox Kids/Select rules are verified, and the owner's tasks are in M0 (§10).
8. **The v1→v2 migration is dropped.** v1 was never published. Only a read-only "Veteran" check for the old simulator remains (§8.6).

---

## 1. Diagnosis

These are **hypotheses** from the state description, the research and the critiques. M0 replaces them with a real v1 playthrough and a 10-point defect list (§9).

1. **The first 60 seconds have no wow moment.** A welcome window, 10 goals and an arrow are tutorial UI, not an experience. Genre leaders put a purchase in your hands that pays back in about 25 s, and the world teaches the rest [UX §8]. Roblox counts first-play bounces at under 60 s and at 61–180 s as negative ranking signals [DM §1].
2. **The economy is too short and not tuned to a curve.** 18 units across 7 rarities leaves 2–3 per tier, and nothing tests the curve. SAB has 500+ units and a smooth payback curve from 25 s to about 300 s [SG §1].
3. **Offline income of 50% for 8 h devalues active play.** SAB caps offline income at 5 h [SG §1].
4. **Stealing has no drama and no counterplay.** "The owner touches the thief" plus a 40 s carry is a quiet foot race. The genre hook is alarm → chase → slap → the unit flies home [SG §1, §4]. v1 blocks tension both ways:
   - a 5-minute shield cooldown means defenders cannot react
   - auto-shields make most bases unstealable

   Also, a shield that re-arms instantly (the SAB rule) would let attentive players never be robbed at all.
5. **The conveyor never creates stampede moments.** There is no collision-free guaranteed schedule, no good announcement policy and no fair intercept [SG §1, UX §5].
6. **Characters are objects, not personalities.** SAB grew on characters that kids name, meme and imitate [DM §5].
7. **The visual identity is a collage, not a system.** The fix is rules: a stud grid, a small palette derived from the owner's old game, Plastic with studs, and one hero backdrop.
8. **Juice is below genre standard** [UX §3].
9. **Five separate galaxies split an 8-player server** [SG §4].
10. **Events do not touch your planets** [UX §6].
11. **The data layer is unsafe for a stealing game.** Moving a unit between two profiles is not atomic, and receipts can be lost [OS §1, PT §5].
12. **UI placement ignores genre conventions** [UX §1].
13. **The owner's reference look was never examined.** He asked for "a cohesive studs look like my old game". M0b extracts that look from the source instead of inventing a new one.
14. **The genre moved on** [WEB]:
    - On 2026-09-26 "Steal An Egg" (created 2026-07-25) had about **2.31M CCU** and 5.3B visits. SAB had about 99.6K CCU.
    - Steal An Egg's description lists hatching, sizes, mutations, **base upgrades** and **treadmill speed training** next to stealing.
    - Growth and self-improvement loops now lead the genre. v2 answers with Ausbauen (§3.6) and the Lauf-Rad (§3.13), and does not copy eggs, because random reveals would clash with our no-paid-random rule.
15. **The title collides** [WEB]:
    - "Steal a Planet 🌍" (Jar Game, universe 7989059515) has 8.23M visits, "100+ planets", was created June 2025 and has about 0 CCU.
    - "[Jetpacks] Steal a planet" was created 2026-09-08.

---

## 2. Pillars and identity

1. **"Klassik-Klötzchen im All" (classic bricks in space).**
   - Everything is 2008-style studded Roblox plastic, floating in a deep-space toy box.
   - The palette and material rules come from the owner's old game (M0b). The default is 9 classic BrickColors.
   - Words used: "Klötzchen", "bricks", "studs". Never the LEGO name or logo.
2. **"Planetlinge" with personality.**
   - 36 brick-built planets and aliens plus 3 limited ones.
   - Each has stud eyes, a name (DE + EN), a catchphrase, an idle quirk, a lore line and **one signature sound**.
3. **Build-snap and Ausbauen (our signature).**
   - A Planetling assembles itself brick by brick when it lands, and **grows** with every level (Lv1–Lv5): rings, hats, crowns, capes, a golden base plate.
   - When a thief is slapped, the unit bursts into bricks, flies home and reassembles.
4. **Mutations are toy materials:** Gold, Chrom, Trans-Neon and Regenbogen (rainbow). Events add Meteor-Glut, Nachtleuchtend, Leere and Urknall.
5. **Cosmic weather changes the world** and rewards the players who take part.
6. **Space pirates as recurring villains.** Pirat Zork is the mascot, the tutorial target, a permanent PvE steal source and the host of **Zork-Chaos Samstag**.
7. **A heist reads in one second.**
   - siren, then a red tether beam, then slap → brick burst → "HELD!" (hero)
   - Every base has a predictable "ÖFFNET IN 5…" moment that thieves can gather for.
8. **Fair-play promise, printed in the description:**
   - no paid random items
   - newbie protection
   - anti-bully rules: a steal cap, and gear works only on thieves and intruders
   - a revenge window
   - units bought with Robux cannot be stolen

---

## 3. Core loop v2: rules and numbers

### 3.1 The loop

1. Buy a Planetling on the **Sternenband** (conveyor).
2. It hops home and assembles.
3. It earns **Sternenstaub** (⭐) per second.
4. Collect at the Sammelplatte (collect plate).
5. **Ausbauen:** level up your favorites.
6. Lock the base with your shield, then survive the Nachladen window.
7. Steal from open bases and from Zork's ship. Defend with slaps and gear.
8. Train speed in the Lauf-Rad.
9. Fill the **Sternenatlas** (collection book).
10. **Hyperraum-Sprung** (rebirth): next galaxy skin, more slots, better gear.
11. Repeat with rarer targets.

Timers every 5, 15, 20 and 60 minutes pull players back to the belt [UX §0].

### 3.2 Map layout [DES]

**Arena:**
- One studded platform, 260 (X) × 180 (Z) studs, in front of the existing Earth backdrop.
- Parts snap to 1 stud on X/Z and 0.4 on Y.
- The backdrop (Earth plus the old props, moved more than 300 studs out) is **one Model** with `ModelStreamingMode = Persistent`, a low part count and CastShadow off, so the skyline never pops.

**Sternenband (conveyor):**
- Runs along X through the center, from X −60 (the **Wurmloch** portal arch) to X +60 (the **Schlürf-Loch** black-hole disc). 12 studs wide.
- The deck is a static part with a scrolling texture and `AssemblyLinearVelocity` of 6 studs/s along X.
- On both sides there is an **8-stud glass-brick railing**: Plastic posts every 8 studs, Glass panes at Transparency 0.6, and yellow/black warning-stripe curbs kept from v1.
  - The default JumpHeight of 7.2 cannot clear it; with the Schwerkraft-Spule (11.5) you can [GRK: verify StarterPlayer JumpHeight].
  - Buy prompts use `RequiresLineOfSight = false`.

**Crossings (chase geometry):**
- **2 brick bridges** at X −25 and X +25: 8 studs wide, deck 12 studs up, with stair ramps.
- **2 jump pads** at X 0, one per side, 10 studs from the railing. They launch any player, carriers included, over the belt in 1.2 s. This is a risky shortcut.

**Bases:**
- 8 bases, 4 per side. Centers at X −51, −17, +17, +51 and Z ±58. Each footprint is 30×30.
- The 8-stud gate faces the belt. The gate's front edge is 36 studs from the railing, which is about 1.6 s at WalkSpeed 22.
- Players spawn inside their own base, facing the belt.

**Cover between the belt and the bases:**
- low brick walls, 3 studs high (jumpable), and 2×2 pillars
- placed so that no straight line runs from any gate to any bridge

**Hub:**
- **Händler Hubble** stall at X −75, near the portal.
- **Zork's Piratenschiff** docked at X −95 to −125.
- At the black-hole end (X +75 to +110): leaderboards, the **Angeber-Podest** (show-off podium, §5) and a **lookout ramp** up to floor-2 height.

**Distances to check:**
- The longest carry (far base → bridge → opposite far base) is about 150 studs, about 11 s at 13.2 studs/s.
- Zork's ship to the farthest base is about 170 studs.

### 3.3 Sternenband (conveyor)

- **Spawning and speed:**
  - one item every **2.5 s**
  - belt speed 6 studs/s, so each item is visible for 20 s and about 8 are on the belt at once
  - unsold items spiral into the black hole over 0.6 s
- **Sign above each item** (BillboardGui, MaxDistance 60):
  - rarity pill
  - name in LuckiestGuy
  - income, e.g. "+1.2K/s"
  - price, e.g. "⭐ 30K", in large type that turns red if the player cannot afford it
  - a shimmering mutation tag
- **Buying:**
  - ProximityPrompt "Kaufen ⭐X", HoldDuration 0, MaxActivationDistance 10, key E.
  - The server validates cash, the item state, and that the player is within 14 studs of the computed position (§8.4).
  - The unit hops home at 14 studs/s (about 3–5 s) and shows the buyer's name in their base color.
- **Überbieten (intercept):**
  - While a unit is hopping, another player may buy it for **150%** of the price, and a second time for **225%**. That is the maximum of 2 intercepts.
  - The intercept is allowed only if:
    - the interceptor's income/s is **at most 3×** the current buyer's
    - the current buyer is not NEU
    - the item is not a personal offer
  - The previous buyer gets **110%** of what they paid back, with the toast "Überboten! +10%".
  - Each intercept adds 1 s to the hop, so the previous buyer can counter.
- **Personal offers:**
  - Tutorial spawns and Glücks-Spawns are **client-only** items. They hover above the belt at the point nearest the player's base and wait until bought (Glücks-Spawns expire after 60 s).
  - The server stores `{CharId, Mut, Price, Pos}` per player and validates `BuyPersonal()` within 14 studs of `Pos`.
  - Nobody else sees them and nobody can intercept them.

### 3.4 Rarity table and announcements

| Rarity (DE) | Color | Base spawn % | Guaranteed (UTC epoch seconds t) | Announcement |
|---|---|---|---|---|
| Gewöhnlich (C) | #A3A2A5 | 60 | – | – |
| Selten (R) | #1E88E5 | 27 | – | – |
| Episch (E) | #9B30FF | 11.715 | – | – |
| Legendär (L) | #FFB300 | 1.0 | when t mod 300 = 60 | banner + sound + light pillar (see policy) |
| Mythisch (M) | #FF3355 | 0.25 | when t mod 900 = 210 | server banner |
| Kosmisch (Co) | gradient #00E5FF→#FF3DF2 | 0.03 | when t mod 3600 = 3150 (xx:52:30) | + system chat, sky tint, belt lights flash |
| Geheim (S) | #0E0E12, rainbow stroke | 0.005 | never | + system chat, sky dark for 3 s, unique jingle |
| Limitiert | #FFFFFF→#FFE36B shimmer | 0 | events only | + Zork voice line |

- **Implementation:** store the rates as integer weights per 100,000: 60000 / 27000 / 11715 / 1000 / 250 / 30 / 5.
- **No collisions:**
  - All offsets are multiples of the 2.5 s tick, and none of them coincide.
  - If two guaranteed spawns ever share a tick after a config change, the higher rarity spawns first and the other on the next tick.
  - An M3a unit test walks one week of timestamps and asserts 0 collisions. The prototype check found 0 [SIM].
- **Expected count per server-hour** (1,440 spawns):
  - Legendary: about 14.4 natural + 12 guaranteed
  - Mythic: 3.6 + 4
  - Cosmic: 0.43 + 1
  - Secret: 0.07, so about one per 14 h per server (more during luck events)
- **Luck L:**
  - multiplies the weights of Legendary and above, then renormalizes
  - **L = max(active sources), never their product**
  - at L = 10: C 53.78%, R 24.20%, E 10.50%, L 8.96%, M 2.24%, Co 0.269%, S 0.045%
  - whenever L > 1, all mutation chances double as well (§3.7), so Commons and Rares can roll Gold or Chrom for newer players
- **Announcement policy** (against banner fatigue):
  - Server banners only for guaranteed spawns and natural Mythic+.
  - A natural Legendary shows a banner only to players who hold at least 50% of its price.
  - System chat only for Cosmic, Secret and events.
  - The big countdown banner "LEGENDÄR in m:ss" appears when 90 s or less remain **and** the player holds at least 50% of the cheapest Legendary price (225K). Everyone else sees only the small timer row.
- **Odds panel:** the "Details" button on the belt sign always shows the current odds, including luck [PT §1].
- **Clock:** the server uses `os.time() + TIME_OFFSET`. Clients use `workspace:GetServerTimeNow() + TIME_OFFSET` (§8.7).

### 3.5 Roster: 36 Planetlinge + 3 limited

- Payback rises from 25 s to 333 s [SG §1]. "W" is the weight within the rarity tier.
- Body templates (§7.2): **Kugel** (stepped-plate sphere), **Ring**, **Scheibe** (saucer), **Klecks** (blob) and **Robo**.
- Every entry also gets an EN name and catchphrase in `Config/Strings`, e.g. Mondi Moppel → "Moony Mope".

| # | Name | R | Price ⭐ | Income/s | Payback s | W | Body | Personality: look, quirk, bark · signature sound |
|---|---|---|---|---|---|---|---|---|
| 1 | Mondi Moppel | C | 25 | 1 | 25 | 30 | Kugel | Grumpy chubby moon in a nightcap. "Lass mich schlafen…" · snore |
| 2 | Kometti | C | 60 | 2 | 30 | 24 | Kugel+tail | Tiny comet whose tail sputters like a moped. "Wuuusch!" · moped putt |
| 3 | Staubi | C | 150 | 5 | 30 | 18 | Klecks | Asteroid dust bunny that sneezes stardust. "Hatschi!" · sneeze |
| 4 | Blip Blop | C | 350 | 11 | 32 | 13 | Klecks | Slime alien wearing a 2×2 brick as a hat. "Blip? Blop!" · blip |
| 5 | Krater-Krümel | C | 800 | 22 | 36 | 9 | Kugel | Cookie moon with bite-shaped craters. "Wer hat mich angeknabbert?!" · crunch |
| 6 | Ufo Uwe | C | 1.5K | 40 | 38 | 6 | Scheibe | Saucer dad with a mustache. "Na, Lust auf 'ne Spritztour?" · UFO wobble |
| 7 | Ringo Saturnini | R | 3K | 70 | 43 | 26 | Ring | Saturn hula-hooping its own rings. "Ringeldingeling!" · ring whirr |
| 8 | Pluto der Kleine | R | 5K | 110 | 45 | 22 | Kugel (small) | Tiny planet with a protest sign. "ICH BIN EIN PLANET!" · protest chant |
| 9 | Nebel-Nelly | R | 8K | 160 | 50 | 18 | Klecks | Shy pink nebula hiding behind her hands. "Nicht hingucken!" · giggle |
| 10 | Satelli Sepp **(new)** | R | 12K | 230 | 52 | 13 | Robo | Rusty satellite with a bent antenna; picks up radio and hums the wrong song. "Empfang… schlecht!" · radio static |
| 11 | Rover Rudi | R | 17K | 310 | 55 | 10 | Robo | Six-wheeled rover taking flash selfies. "Beep! Selfie!" · camera click |
| 12 | Polarlicht-Paula **(new)** | R | 23K | 400 | 58 | 7 | Klecks | Aurora ribbon who changes color when someone looks at her. "Oh, wie peinlich!" · shimmer |
| 13 | Zorp Zorpington | R | 30K | 510 | 59 | 4 | Klecks | Posh three-eyed alien with monocle and teacup. "Wie ausgesprochen irdisch." · teacup clink |
| 14 | Marsi Muskel | E | 45K | 700 | 64 | 28 | Kugel | Buff red planet curling two moons. "Noch ein Satz!" · grunt |
| 15 | Jupi Jumbo | E | 70K | 1.05K | 67 | 22 | Kugel (large) | Gas giant whose storm spot is his belly; burps clouds. "Buuuärp!" · burp |
| 16 | Asteroiden-Achim **(new)** | E | 105K | 1.5K | 70 | 18 | Klecks | Asteroid miner with helmet lamp and pickaxe; chips fly when he taps himself. "Glück auf!" · pickaxe clink |
| 17 | Neptuni Nudel | E | 150K | 2.05K | 73 | 14 | Kugel | Blue planet slurping endless space noodles. "Schlürf-schlürf!" · slurp |
| 18 | Venus Vulkana **(new)** | E | 210K | 2.75K | 76 | 10 | Kugel | Hot-headed volcano planet; steams and spits lava bricks when a thief comes near. "Ich koche vor Wut!" · steam hiss |
| 19 | Qualli Europa | E | 290K | 3.7K | 78 | 8 | Klecks | Glowing jellyfish from an ice moon, blinking in patterns. "Blubb…" · bubble |
| 20 | König Sol | L | 450K | 5.3K | 85 | 28 | Kugel | Sun king with crown and sunglasses. "Alles dreht sich um MICH." · fanfare |
| 21 | Schlürfi | L | 700K | 8K | 88 | 22 | Scheibe | Black hole with a straw; coin particles spiral into it. "Mehr! MEHR!" · straw slurp |
| 22 | Wurmloch-Willi **(new)** | L | 1.05M | 11.5K | 91 | 18 | Ring | Wormhole ring that pops his head out of a second mini-ring somewhere in the base. "Tunnel frei!" · pop |
| 23 | Galakto-Gans | L | 1.6M | 17K | 94 | 14 | Klecks | Space goose in a helmet that snatches hats. "HONK!" · honk |
| 24 | Supernova-Susi **(new)** | L | 2.4M | 24.5K | 98 | 10 | Kugel | White-hot star who counts down to her explosion, puffs up, then deflates. "3… 2… 1… doch nicht." · countdown beeps |
| 25 | Klotz-Kraken | L | 3.5M | 35K | 100 | 8 | Klecks | Eight-armed brick kraken hugging an asteroid. "Umarmung gefällig?" · squish |
| 26 | Andromeda-Diva | M | 6M | 48K | 125 | 32 | Scheibe | Spiral-galaxy singer; notes float around her. "Laaa-laaa!" · high note |
| 27 | Doktor Dunkelmaterie **(new)** | M | 10M | 75K | 133 | 25 | Klecks (Transparency 0.9) | Invisible scientist; only glasses, gloves and collar show. "Man sieht mich nicht… aber man spürt mich." · eerie hum |
| 28 | DJ Pulsar | M | 16M | 115K | 139 | 20 | Kugel | Spinning neutron star whose beams pulse to the beat. "Drop the Bass!" · bass drop |
| 29 | Oberst Orion **(new)** | M | 25M | 175K | 143 | 14 | Robo | Constellation general: star studs linked by beams, with a 3-star belt; marches on the spot. "Sternbild – stillgestanden!" · drum roll |
| 30 | Quasar-Königin | M | 40M | 265K | 151 | 9 | Kugel | Radiant queen with a crown of jet beams. "Verneigt euch!" · choir |
| 31 | Meister Stein | Co | 90M | 470K | 191 | 50 | Robo | Sage of old grey bricks with a white-brick beard. "Einst war alles… Grundplatte." · deep gong |
| 32 | Kosmo-Katze | Co | 180M | 830K | 217 | 32 | Klecks | Starfield cat that pushes planets off tables. "Miau. *schubs*" · meow |
| 33 | Der Große Baumeister | Co | 360M | 1.44M | 250 | 18 | Robo (giant) | Giant with a brick hammer who builds tiny planets. "Stein auf Stein!" · hammer clack |
| 34 | Glitchi | S | 1B | 3.33M | 300 | 55 | Kugel | Corrupted planet in pink/black "missing texture" checker, flickering. "ERROR 404: Planet nicht gefunden" · error beep |
| 35 | Pixel-Paradox | S | 2.5B | 7.7M | 325 | 33 | Scheibe (paper) | Paper-thin 2D planet, invisible edge-on. "Ich bin flach. Na und?" · paper flap |
| 36 | Der Eine Stein | S | 6B | 18M | 333 | 12 | single 1×1 brick | A single red 1×1 classic brick with a tiny crown, the brick all others came from. It says nothing. · one pure "click" |
| E1 | Kapitän Zork | Lim. | 12M | 90K | 133 | Zork-Chaos, 3 spawns | Robo | Pirate captain with a brick parrot. "Har! Das gehört jetzt mir!" · parrot squawk |
| E2 | Disko-Dörte | Lim. | 150M | 750K | 200 | Zork-Chaos, 1 spawn | Kugel | Disco-ball planet throwing light spots. "Tanzt, Planeten!" · disco sting |
| E3 | Buddy-Bot | Lim. | not sold | 2% of the owner's summed base income, recalculated every 60 s | – | referral only | Robo | Waves at every passer-by. "Hallo Freund!" · wave beep |

- **v1 → v2:** the 18 v1 models are rebuilt on the kit (§7.2), reusing their colors and ideas. The 18 new ones are built from the kit.
- **Weekly updates** add 2–3 Planetlinge through the kit. Never compete on unit count.

### 3.6 Ausbauen (level up) [DES]

- **How:** hold E for 0.5 s on your own slot, or tap "Ausbauen" in the slot card. The server validates ownership, the slot state and cash.

| Level | Income × | Cost to reach (× current unit price incl. mutation factor) | "Wert" (value) × price | Visual (≤ 2 extra parts per level) |
|---|---|---|---|---|
| Lv1 | 1.0 | – | 1× | base model |
| Lv2 | 1.6 | 1× | 2× | accessory detail (pom-pom, antenna tip, …) |
| Lv3 | 2.5 | 2× | 4× | orbit ring of 1×1 plates |
| Lv4 | 4.0 | 4× | 8× | crown or cape |
| Lv5 | 6.5 | 8× | 16× | golden 4×4 base plate + sparkle |

- **Marginal payback per level:** 1.67×, 2.2×, 2.67× and 3.2× the unit's base payback. Levels stay worth buying, but a new unit is usually the better deal while you have free slots.
- **What levels change:**
  - Stolen units **keep their level**, so level is visible steal bait.
  - Selling returns 50% of Wert.
  - Rebirth wipes levels together with the units.
- **Presentation:** each level-up plays the build-snap on the new bricks plus the unit's signature sound, and shows "Lv3!" in LuckiestGuy.

### 3.7 Mutations and stickers

Price scales with **√(multiplier)**, so every mutated unit is a bargain at any wealth. This creates belt stampedes and juicy steal targets.

| Mutation | Income × | Price × | Chance per belt spawn (×2 while Luck > 1) | Look |
|---|---|---|---|---|
| Normal | 1 | 1 | 90.5% | original colors |
| Gold | 1.5 | 1.22 | 6% | Plastic #FFC21A, Reflectance 0.3 |
| Chrom | 2 | 1.41 | 2.5% | Plastic #D9DEE6, Reflectance 0.5 (no Foil, so studs stay) |
| Trans-Neon | 4 | 2.0 | 0.8% | Plastic shell at Transparency 0.3 with studs, one small Neon core part + PointLight; eyes opaque |
| Regenbogen | 8 | 2.83 | 0.2% | client-side hue cycle, 2 s period, offset per part (only within 40 studs) |
| Meteor-Glut (event) | 2 | 1.41 | 5% during Meteorschauer | orange/lava colors + embers |
| Nachtleuchtend (event) | 3 | 1.73 | 3% during Wurmloch-Mittwoch | pale green glow |
| Leere (event) | 5 | 2.24 | 2% during Schwarzes Loch | black with a purple rim + void particles |
| Urknall (event) | 6 | 2.45 | 4% during Zork-Chaos | white-hot + star-burst particles |

The research reference is SAB: Gold 1.25× at about 10%, Rainbow 10× at about 1% [SG §1].

**Stickers** are applied by weather to units already placed, **only for players who took part** in that event.
- **Taking part** means one of these during the event window:
  - collected at least 1 Sternsplitter or Klotz-Regen brick
  - spent at least 30 s in total within 20 studs of the belt
  - hit a carrier or a Zork boarder with gear
- **Rules:**
  - at most 3 per unit, no duplicates
  - the sticker bonuses go into the capped bucket (§3.8)
  - each shows as an icon on the slot and a small particle effect on the model
  - hits are announced with a server toast, e.g. "Mondi Moppel von Lena hat Sonnenbrand!" (max 3 toasts per event, then "+N weitere")
- **On rebirth,** you may keep **1 sticker of your choice** in the **Sticker-Album** and re-apply it to any unit later.
- In the data, stickers are stored as a string attribute, e.g. "Sonnenbrand,Disko" (attributes cannot hold tables).

| Sticker | Bonus | Source | Chance per placed unit of a participant |
|---|---|---|---|
| Sonnenbrand | +0.5 | Sonnensturm | 5% |
| Schwebend | +0.75 | Schwerelosigkeit | 5% |
| Sternschnuppe | +1.0 | Meteorschauer | 4% |
| Entführt | +1.5 | Alien-Invasion | 4% |
| Verschluckt | +2.0 | Schwarzes Loch | 3% |
| Disko | +3.0 | Zork-Chaos (rolled at +15 min) | 5% |

### 3.8 Income formula (server only)

```
income/s (per unit) = BaseIncome × Level × Mutation × RebirthMult
                    × (1 + min(3.0, Atlas + VIP 0.25 + Crew 0.10 + Friends min(0.10×n, 0.50) + ΣSticker_unit))
                    × Doubler          -- Doubler = 2 if (2× pass OR Sternen-Party active) else 1; never 4
```

- **Worst case:** 6.5 × 8 × 6.5 × 4 × 2 = **2,704× base**. Every factor except the capped bucket is earned per unit (it was about 8,300× before, and uncapped).
- **Breakdown tooltip:** the income pill shows every factor.
- **Loop:** **one** 1 Hz server loop adds to each slot's `Pending`. Pending cannot be stolen: when a unit leaves a slot (steal, sell, rebirth), its Pending goes to the owner's Dust first.
- **OfflineRate** is the same formula **without** temporary effects (Sternen-Party, Friends, Turbo). It is saved on every autosave and on leave.

### 3.9 Base

**Slots:**
- Floor 1 has 10 slots (2 rows of 5, 5 studs apart).
- Floor 2 (8 slots, at +14 studs) unlocks at R2. Floor 3 (6 slots, at +28) unlocks at R6.
- R1, R3, R5 and R8 each add 1 slot, for a maximum of **28**. The "Anbau" pass adds 3 more in a floor-1 annex, so 31 in total.
- **Fill order:** a new unit goes to the **free slot nearest the gate**, floor 1 first. New and usually best units are therefore exposed until you move them.
- **Umstellen (swap):** hold 0.5 s on a slot, then tap another slot. Allowed **only while your shield is up**.
- **Stairs:** one 4-stud-wide brick stair per upper floor. Every slot is within 8 studs of a walkable spot.
  - A red laser **tripwire** at the bottom of each stair alerts the owner (a beep and an arrow) when a non-owner crosses it.
  - The carry monitor allows this vertical path.

**Collecting:**
- each slot has a 2×2 plate showing its Pending
- the 6×4 **Sammelplatte** at the gate collects everything at once
- R3 gives a free Magnet (auto-collect within 30 studs); the Magnet pass collects from anywhere; the Magnet-Trank does the same for 10 min

**Selling:** "Verkaufen (50%)" prompt with a 1 s hold. It returns 50% of Wert. Legendary+ and Lv3+ units show a confirm dialog. InTransit and Paid units cannot be sold mid-carry (§3.10).

**Shield (Schild):**
- **Duration:** 60 s + 10 s per rebirth, +10 s with VIP, capped at 180 s.
- **Activation:** step on the red 4×4 brick button in the base. The UI button works only inside your own footprint; outside it is greyed out with "Geh in deine Basis".
- **Nachladen (reloading):** after the shield expires, the button stays locked for **10 s**.
  - During the last 5 s of the shield, the sign shows everyone "ÖFFNET IN 5…". During Nachladen it shows "OFFEN – lädt 10…" and the roof beacon flashes.
  - Result: a predictable chase window every 70–190 s.
- **Bridging Nachladen:** the only way is a **Schild-Batterie** (+60 s, usable during Nachladen, at most 2 uses per rolling hour from any source).
- **Other shields:**
  - join shield: 30 s
  - **Rache-Schild** (revenge shield): 45 s, automatically after you are robbed
- **While active:**
  - a ForceField dome covers the base, and a red laser grid closes the gate
  - dome and lasers are CanCollide on the server; on the owner's and friends' clients CanCollide is turned off locally
  - **Server enforcement:** every 0.25 s the server checks footprint boxes. Anyone inside a shielded base who is not the owner or a Roblox friend is moved out through the gate with a server CFrame move (the speed-monitor grace applies). The steal prompt re-checks the shield on the server.
  - Friends may enter but cannot steal.
  - In the last 10 s the dome flickers and beeps once per second.

**Anzeigetafel (base sign):**
- a 6×2 SurfaceGui above the gate, readable from 150 studs, in the Arcade font
- shows owner name, shield timer and income/s
- colors: green, then yellow at 10 s or less, then "ÖFFNET IN 5…", then red "OFFEN"

**Alarm beacon:** a rotating red light on the roof while the base is being robbed or is in Nachladen.

**Hangar (overflow storage, §3.19):** a terminal inside the base.

### 3.10 Stealing (player vs player)

**Conditions.** A steal is only allowed if all of these are true:
- the target base is unshielded
- neither player has **Neuling-Schutz** (newbie protection: the first **8 min** of lifetime playtime, with a "NEU" badge)
- the thief has a free slot, is not carrying, and is not in their 20 s steal cooldown
- the thief has taken fewer than **2 steals from this victim in the last 10 min**
- the unit is not Paid, not in its 3 s landing state, and not InTransit

**Step by step:**
1. **Hold to steal.** Prompt "Klauen", HoldDuration **3 s**, MaxActivationDistance 8. The prompt lives on the server anchor.
   - `PromptButtonHoldBegan`: the server requires a distance of 10 studs or less **and** an unshielded base before it stores the start time and alerts the owner ("Jemand knackt deine Basis!" with a beep). Alerts are limited to 1 per thief per 10 s.
   - `PromptButtonHoldEnded` clears the stored start time.
   - `Triggered`: the server requires at least 2.8 s elapsed since a stored start, a distance of 10 studs or less, and the shield still off [PT §6].
2. **Grab.** The victim's slot gets `State = "InTransit"`. The server records `{StealId, thief, victim, slot, unitUid, t0}` in memory.
3. **Carrying:**
   - The unit rides above the thief's head at 0.7 scale. It is client-rendered from attributes on the thief.
   - A red tether beam with scrolling chevrons points to its home base.
   - The victim hears a siren, sees a red vignette and the banner "{Thief} klaut {Unit}!", and gets an arrow to the thief.
4. **Thief handicaps:**
   - WalkSpeed ×0.6 (minimum 12); jump ×0.8
   - cannot shield and cannot enter shielded bases
   - **20 s** limit
   - usable while carrying: thief gear (Köder-Klon, Rauch-Klotz) and the passives Raketen-Schuhe and Schwerkraft-Spule
   - all other gear is disabled; Turbo-Trank pauses
5. **Delivery.** The 10 Hz loop checks positions. When the thief is inside their own footprint, **in one no-yield block** the server:
   - credits the victim's slot Pending to the victim
   - removes the unit from the victim and places it in the thief's slot nearest the gate
   - appends the StealId to both profiles' 20-entry `StealHistory`

   Then it calls `:Save()` on **both profiles** and logs `(StealId, unitUid, from, to, time)`. The thief sees "GEKLAUT!" and gets a 20 s cooldown.
6. **Failure.** The unit returns to the victim when:
   - a valid gear hit makes the carrier drop it
   - the thief falls below Y −50, dies or leaves
   - the time runs out
   - **the victim leaves**: `StealService:AbortCarriesInvolving(player)` runs before `EndSession`, and the thief sees "Besitzer weg"

   The unit bursts into bricks on the client and reassembles in its slot.
7. **Rules while InTransit:** Sell, Rebirth, Upgrade, Swap, ApplyItem and rebirth-requirement checks reject or skip the slot.
8. **HELD reward:**
   - Paid **only** when the hitter is the victim or a Roblox friend of the victim, **and** the hitter and the thief are not friends and did not join together (`GetJoinData().ReferredByPlayerId`).
   - Amount: **min(5% of Wert, 60 s of the hitter's own income)**.
9. **Revenge:**
   - The victim gets the 45 s Rache-Schild.
   - The thief's base is highlighted for the victim for 90 s. A steal back inside that window shows "RACHE!" and pays **min(10% of Wert, 3 min of the victim's income)**, with the same friend rules.
10. **Payout caps:**
    - HELD + RACHE together: at most **5 payouts per player per hour**
    - the same (receiver, thief) pair: at most once per 30 min
    - every payout is logged with `LogEconomyEvent` (sources "Held" and "Rache")
    - any player pair with more than 4 steals in an hour is flagged in the admin log
11. **Tuning target:** a steal success rate of **30–40%** of started holds in the soft test. Custom analytics events log attempts and successes.

### 3.11 Zork's ship (PvE steal)

**Normal rules:**
- The ship is always unlocked. It holds 3 units (one Common and two Rares, plus one Epic during Zork-Chaos), re-rolled every 5 min.
- Each player can steal there once per 10 min. Zork units are normal units (they enter the Atlas and can be levelled).
- The carry limit is **30 s**.
- Zork chases with SimplePath (§8.1) at WalkSpeed **14**, so he can catch a slow carrier.
  - In the tutorial he moves at 11 and never catches.
  - If he touches the carrier, the unit returns to the ship. He stops at the ship's edge and shakes his fist.

**Special rules:** Zork's ship **ignores** Neuling-Schutz, the anti-bully cap, the 20 s cooldown and the full-slot rule (the unit goes to the Hangar). Stealing from Zork does **not** end the thief's Neuling-Schutz.

### 3.12 Gear (bought with stardust, kept through rebirth)

**General rules:**
- 3 hotbar keys. Nothing deals damage, and health never drops (Mild label) [PT §2].
- **Valid targets:** a player carrying a stolen unit (anywhere); an intruder inside **your own** footprint (not the owner, not a friend); Zork and the boarders.
- **Everywhere else:** a slap is a 4-stud cosmetic bump that makes nobody drop anything, and the other gear shows a "puff" and does nothing.
- **NEU players** are immune to all gear, and their own gear works only inside their own base.
- **Diminishing returns:**
  - slap immunity 1.5 s after a slap
  - freeze immunity 4 s after any freeze
  - one base's traps catch the same player at most once per 20 s
  - Traktorstrahl cannot pull a frozen player

| Gear | Price ⭐ | Needs | Effect on valid targets | Cooldown |
|---|---|---|---|---|
| Klotz-Klatscher (slap glove) | free from tutorial, otherwise 500 | – | carrier: knockback 20 and drops the unit; intruder: knockback 12; range 8 | 1.2 s |
| Raketen-Schuhe | 2K | – | +4 WalkSpeed, also while carrying | passive |
| Stein-Falle (trap) | 5K | – | up to 3 in your own base; freezes an intruder for 3 s | re-arms in 20 s |
| Schwerkraft-Spule | 15K | – | jump height +60% (clears the belt railing), also while carrying | passive |
| **Köder-Klon (thief)** | 250K | R1 | while carrying: a decoy carrier with a fake tether runs a different route for 4 s, and the real tether is hidden for those 4 s | 30 s |
| Eisen-Klatscher | 400K | R1 | carrier knockback 28, intruder 18; range 9 | 1.0 s |
| **Rauch-Klotz (thief)** | 2M | R2 | 3 s smoke cloud (radius 8); nobody inside can be targeted by slap, freeze or tractor; usable while carrying | 25 s |
| Traktorstrahl | 8M | R3 | pulls the target 12 studs toward you, range 40 | 10 s |
| Tarnkappe (cloak) | 40M | R4 | invisible for 6 s with name hidden; breaks when you start a steal hold or slap | 45 s |
| Gefrierstrahl (freeze ray) | 150M | R5 | freezes the target for 2 s, range 35 | 12 s |
| Laser-Wache (sentry) | 5B | R7 | turret in your base; slaps the first intruder while the base is unshielded | 30 s |
| Heimwärts-Portal | 200B | R9 | teleports you to your own base; not while carrying | 60 s |

### 3.13 Lauf-Rad (speed training) [DES]

**Why:** the current genre leader grew on speed training (§1.14).

**How it works:**
- Every base has a brick hamster wheel, 6 studs in diameter, in a back corner.
- Prompt "Trainieren" with a 0.5 s hold. The server locks the player into the wheel, and the client plays the avatar's own run animation from its Animate script [GRK: verify].
- Jump leaves the wheel instantly, so you can defend.

**Tempo levels:**
- 6 levels, each giving +1 WalkSpeed (22 → 28)
- training minutes per level: 3, 5, 8, 12, 16 and 20 (64 min in total at wheel level 1)
- Tempo is kept through rebirth
- maximum WalkSpeed with Raketen-Schuhe: 32; while carrying: 19.2

**Wheel upgrades** (stardust sink, kept through rebirth):

| Wheel level | Training speed | Cost ⭐ |
|---|---|---|
| Lv2 | ×1.5 | 50K |
| Lv3 | ×2 | 5M |
| Lv4 | ×3 | 500M |
| Lv5 | ×4 | 50B |

The speed monitor always uses the server's current WalkSpeed.

### 3.14 Hyperraum-Sprung (rebirth) and galaxies

**What a rebirth resets:** stardust (to the start value), all placed units and levels, and the non-Paid Hangar units. Paid units move to the Hangar.

**What you keep:** gear, Tempo and wheel level, the Atlas, cosmetics, passes, streaks, stats, tickets, Rucksack items, and 1 sticker in the Sticker-Album.

**Requirements** must be **placed** in your base, and must be neither Paid nor InTransit.

| R | Cost ⭐ | Required | Income mult | Shield | Slots | Start ⭐ | Unlocks |
|---|---|---|---|---|---|---|---|
| 1 | 20M | Ringo Saturnini + Pluto der Kleine | 1.5× | 70 s | 11 | 100K | Köder-Klon, Eisen-Klatscher |
| 2 | 80M | Marsi Muskel + Jupi Jumbo | 2.0× | 80 s | 19 (floor 2) | 400K | galaxy **Andromeda**, Rauch-Klotz, offline +1 h |
| 3 | 320M | Neptuni Nudel + Qualli Europa | 2.5× | 90 s | 20 | 1.6M | Traktorstrahl, Magnet (30 studs) |
| 4 | 1.3B | König Sol + any Gold-or-better Epic+ | 3.0× | 100 s | 20 | 6.5M | galaxy **Sombrero**, Tarnkappe, offline +1 h |
| 5 | 5B | Galakto-Gans + Klotz-Kraken | 3.5× | 110 s | 21 | 25M | Gefrierstrahl |
| 6 | 20B | Andromeda-Diva + any Gold-or-better Legendary+ | 4.0× | 120 s | 27 (floor 3) | 100M | offline +1 h; Mythic-Ruf offered |
| 7 | 80B | DJ Pulsar + Oberst Orion | 4.5× | 130 s | 27 | 400M | galaxy **Whirlpool**, Laser-Wache |
| 8 | 320B | Quasar-Königin + any Trans-Neon-or-better unit | 5.0× | 140 s | 28 | 1.6B | offline +1 h |
| 9 | 1.3T | any 1 Cosmic | 5.5× | 150 s | 28 | 6.5B | Heimwärts-Portal |
| 10 | 5T | any 2 Cosmics | 6.5× | 160 s | 28 | 25B | galaxy **Klotzversum**, rainbow name, title "Weltenbauer" |

- **Galaxies** are base skins at R0 (Milchstraße), R2, R4, R7 and R10, each with trim colors, a flag and a sky tint inside the base. The separate galaxy areas are removed.
- **R11–R15** ship **hidden in Config** at launch (continuing ×4 cost), so fast players never hit a wall. They are revealed in later updates.
- **Pace target:** see §3.20.

### 3.15 Events

**Clock rules:** everything runs from the synced clock (§8.7). Weather is on UTC. Scheduled events are in **Berlin time** via the DST helper.

**Kosmisches Wetter (cosmic weather):**
- runs every 20 min at :00, :20 and :40 UTC and lasts **180 s** [UX §6]
- the type is seeded by the cycle index
- a weather cycle whose start falls inside a scheduled event window is **skipped**, so the event is the weather

| Weather | Chance | Look | Effect |
|---|---|---|---|
| Meteorschauer | 35% | meteor streaks, orange tint | 20 "Sternsplitter" pickups on the arena, each worth 1 min of income (max 5 per player); Meteor-Glut on 5% of spawns; Sternschnuppe sticker |
| Sonnensturm | 25% | orange-gold sky, Bloom 1.0 | Luck 2 (so all mutation chances double); personal Glücks-Spawn; Sonnenbrand sticker |
| Schwerelosigkeit | 20% | floating debris | `workspace.Gravity` 196.2 → 60 for everyone; Schwebend sticker |
| Alien-Invasion | 12% | UFOs fly over | 5 free Alien-Kisten drop (odds in Config and shown: 50% 2 min of income / 25% Turbo-Trank / 15% Schild-Batterie / 8% Sticker-Dose Sonnenbrand / 2% Gold-Farbe); Entführt sticker |
| Schwarzes Loch | 8% | black hole in the sky, darkened grading | Luck 3; +1 Mythic spawn; Leere on 2% of spawns; Glücks-Spawn; Verschluckt sticker |

**Glücks-Spawn** (one per player per luck event):
- a personal client-only offer (§3.3) from the highest rarity the player can afford, up to Mythic
- mutation rolled at the event's doubled chances
- the price is shown before buying, and it expires after 60 s

**Scheduled events:**
- **Wurmloch-Mittwoch:** Wednesdays 19:00–19:20 Berlin time. Luck 3, Nachtleuchtend on 3% of spawns, and a Glücks-Spawn.
- **Zork-Chaos Samstag:** Saturdays **18:00–18:30 Berlin time**, which is 16:00 UTC in summer time and 17:00 UTC in winter time. It runs right after the weekly update.
  - Luck 10, Urknall on 4% of spawns, and a Glücks-Spawn.
  - The Disko sticker is rolled at +15 min for participants.
  - Kapitän Zork spawns at +5, +15 and +25 min; Disko-Dörte at +20.
  - **Klotz-Regen:** falling bricks, each worth 30 s of income, at most 20 per player.
  - **Zork boss raid** at +10: 20 pirate boarders use SimplePath to storm the bases, and the server works together to slap them. On success, everyone who slapped at least 1 gets +5 min of income.
  - The optional **"Chef ist live"** mode comes after launch (v2.1). The owner types `/live` in one public server, other servers show a banner with a join button through MessagingService, and players are teleported in-universe to that JobId, where the owner's admin commands cause real live chaos.
- **Announcements:**
  - a top-center banner and a sound sting
  - the system chat line: the server fires `Remotes.SystemMsg` and the client calls `TextChatService.TextChannels.RBXSystem:DisplaySystemMessage(localizedText)`; this API only works on the client
  - Zork-Chaos is also registered as a weekly Experience Event (§5)

### 3.16 Händler Hubble (limited restock shop)

- Restocks every **300 s** on the global clock. The stock roll is seeded with `cycleIndex = floor(t/300)`, so all servers show the same stock [UX §5].
- Per-player limits are saved against the cycle index (`HubbleCycle`, `HubbleBought`).
- **Fixed slots:**
  - Turbo-Trank: 2 min of income, minimum 500
  - Schild-Batterie: 2 min of income, minimum 1K
  - Magnet-Trank: 3 min of income
- **Rotating slots** (3 per cycle):

  | Item | Chance | Price | Limit |
  |---|---|---|---|
  | Sticker-Dose "Sonnenbrand" | 40% | 20 min of income | 1 |
  | Sticker-Dose "Sternschnuppe" | 25% | 20 min of income | 1 |
  | Gold-Farbe (turns a Normal unit Gold) | 15% | 30 min of income | 1 |
  | a named Legendary at 1.25× price | 10% | fixed | 1 |
  | Chrom-Farbe | 7% | 60 min of income | 1 |
  | a named Mythic at 1.25× price | 3% | fixed | 1 |

- **Ticket counter:** 5 Kometen-Tickets buy **one unit of your choice from one rarity above your best placed unit** (maximum Mythic). They can also buy ticket-only cosmetics: a "Glanz" (shiny) variant of an owned unit, or base flags.
- **Policy:**
  - Every outcome is fixed and visible before purchase, and the stock changes on a timer that buying cannot affect [PT §1].
  - **Never sell a paid instant restock or reroll.**

### 3.17 Sternenatlas (collection book)

- **Pages:** Normal, Gold, Chrom, Trans-Neon, Regenbogen (36 entries each), plus an Event page for limited units and event-mutation finds.
- **Entries:**
  - an entry unlocks when that character with that mutation enters your base by any route
  - undiscovered entries are black silhouettes: a ViewportFrame with a black ImageColor3 [UX §7, GRK]
  - first discovery: a "NEU ENTDECKT!" toast and 2 min of that unit's income
  - each card shows name, rarity, catchphrase, lore line, income and where to find it

**Page rewards** (permanent, in the capped bucket, +1.0 in total):

| Page | Threshold | Reward |
|---|---|---|
| Normal | 50% | +0.1 |
| Normal | 75% | +0.1 + base skin "Sternkarte" |
| Normal | 100% | +0.1 + title "Kartograf" |
| Gold | 50% | +0.1 |
| Gold | 75% | +0.1 + gold trim |
| Chrom | 50% | +0.15 + chrome trim |
| Trans-Neon | 25% | +0.15 + neon trim |
| Regenbogen | 25% | +0.2 + rainbow base |

### 3.18 Offline income

- **25%** of OfflineRate, capped at **3 h**. The cap grows by +1 h at R2, R4, R6 and R8 (7 h), and VIP adds +2 h (9 h).
- On join, a "Willkommen zurück!" card shows the amount with one big collect button that plays the full juice. It is the only window allowed on join.

### 3.19 Rucksack and Hangar (inventory)

- **Rucksack (backpack):** a left-column button with red badge counts. One tap on "Benutzen" uses an item; Sticker-Dose and Farbe then ask you to tap a target slot.
  - **5 consumable types at launch:**
    - Turbo-Trank: +25% speed for 5 min, paused while carrying
    - Schild-Batterie: +60 s shield, also during Nachladen, max 2 uses per hour
    - Magnet-Trank: auto-collect for 10 min
    - Sticker-Dose (per sticker type)
    - Farbe (Gold or Chrom)
  - Kometen-Tickets show as a counter.
- **Hangar:**
  - a profile list of at most **50** units that neither earn nor can be stolen
  - its tab in the Rucksack and the base terminal let you place, swap and sell
  - **every** unit grant goes through `GrantUnit(profile, unit)`, which fills the nearest free slot, else the Hangar, else pays out 100% of Wert
  - grant sources: gifts, tickets, Hubble, Zork, referrals, products, event units

### 3.20 Pacing targets and EconomySim

**Targets** (active play, median player, no passes):

| Milestone | Target |
|---|---|
| R1 | 20–35 min |
| R5 | 3–5 h |
| R10 | 40–60 h (about 4 weeks at 2 h/day) |
| R10 with the 2× pass | at least 25 h |

**EconomySim** (`ServerScriptService/Dev/EconomySim`, Studio only, pure Luau, seeded, run via execute_luau in batches). It reads Config and simulates:
- the belt (tick, rarities, mutations, guaranteed schedule)
- a belt share of 0.35 for contention with 8 players, and a 30 s collect delay
- a greedy policy:
  - buy if a slot is free and the unit's income is at least 20% of the best placed unit
  - replace the worst unit if the new one earns at least 1.3× as much and is affordable including the 50% refund
  - level up the cheapest-payback unit when slots are full and it costs at most 35% of cash
  - save up once requirements are met and cash reaches at least 50% of the cost
- rebirth requirements, slots and start dust
- optional toggles: stickers, Atlas, 2× pass, steal losses of 5% of Wert per hour

It prints the median, p25 and p75 time to R1–R10 over at least 200 simulated players.

**Reference** [SIM]: a Python prototype of exactly these tables (without the collect delay) gave these medians at share 0.35:

| R | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Time | 23 min | 43 min | 1.3 h | 2.2 h | 3.4 h | 6.6 h | 12.9 h | 19 h | 34 h | 56 h |

At share 0.5 it gave R1 21 min, R5 3.1 h and R10 38 h. The Luau sim must reproduce these within ±25% before the toggles are added.

**Levers**, in order: rebirth cost column, then natural Legendary+ rates, then level costs.

---

## 4. The first 5 minutes

A fresh profile starts with 100 ⭐, a 30 s join shield and 8 min of Neuling-Schutz. **There is no welcome window.** Language comes from `LocaleId` [GRK]. Goal-card updates are triggered by events, not by timestamps.

| t | What happens | Systems |
|---|---|---|
| 0.0 s | Spawn inside your own base. A 1.5 s camera swoop (first join only). | funnel 1 |
| 1.5 s | Banner "Kauf deinen ersten Planetling!" and a beam in your base color with chevrons, running to your personal spot at the belt. | Tutorial |
| 2 s | A **personal Mondi Moppel** (client-only, ⭐25) hovers above the belt at the point nearest your base with a "Zzz" bubble, and waits for you. | personal offer |
| 3–8 s | Walk about 40 studs (about 2 s; children about 5 s). | funnel 2 |
| ≤ 12 s | **First purchase.** "-25", coin-fly, and a **1.2 s camera close-up** on slot 1 while bricks rain in and snap together, plus the voice bark "Lass mich schlafen…". If no buy by 15 s: the beam pulses and a hint says "Drück E" / "Tippe auf Kaufen". | funnel 3 |
| ~15 s | "+1/s" floats up. Goal card: "Kaufe 2 weitere Planetlinge (1/3)". | Goals |
| 15–60 s | Normal belt (60% Commons). Buy Kometti (60). At 40 s, or once Pending reaches at least 30, an arrow points to the Sammelplatte: "Sammle deinen Sternenstaub ein!" Collecting sends up to 12 coins flying and the counter counts up. | funnel 4 |
| ~70 s | **First goal reward** for "3 Planetlinge": 250 ⭐, a fanfare and big confetti [UX §8]. | Goals |
| ~80 s | **"Bau Mondi aus!"** Hold E on Mondi, pay ⭐25 for Lv2: a pom-pom snaps onto the nightcap and "+60%" floats up. Reward 100 ⭐. | funnel 5 |
| ~100 s | "Schütze deine Basis! Tritt auf den roten Knopf." The dome rises. One line on the sign explains: "Danach 10 s offen!" Reward 150 ⭐. | funnel 6 |
| ~115 s | Zork's ship horn: "Har! Meine Planeten klaut keiner!" Goal: "Klau einen Planeten von Zork". | – |
| 125–175 s | Hold E for 3 s on Zork's Staubi and carry it with the tether showing. Zork (WalkSpeed 11) chases and gives up at the ship's edge. **First steal before 3 min.** "GEKLAUT!", Bump and confetti. "Zork hat seinen Handschuh verloren!" auto-equips the Klotz-Klatscher, plus 300 ⭐. | funnel 7 |
| ~180 s | Zork stomps **into your base**, so he is a valid intruder. "Klatsch ihn!" One slap sends him flying in a brick burst: +100 ⭐. | funnel 8 |
| ~200 s | **"SELTEN! Pluto der Kleine – nur für dich ⭐400"**: a personal offer at the "Entdecker-Preis" (explorer price; normal price 5K). Buying it gives "NEU ENTDECKT!", a blue aura, and the hint "Pluto brauchst du für deinen ersten Hyperraum-Sprung!" | funnel 9 |
| ~240 s | HUD pill: "Neuling-Schutz 4:00 – danach können echte Spieler dich beklauen (und du sie)". Hint: "Schilder mit OFFEN = klaubar". | – |
| ~270 s | **First mutation:** "GOLD! Ufo Uwe in Gold – nur für dich ⭐1.830" (a personal offer at the normal Gold price). The Atlas Gold page opens. | – |
| 300 s | Playtime gift 1 is ready (a badge bounces on Geschenke). The goal card shows three horizons: short (Mondi to Lv3), mid (rebirth bar: Ringo + Pluto + 20M), long (Atlas 6/36). | funnel 10 |
| any time | The LEGENDÄR countdown banner follows the rule in §3.4. Before that, only the small timer row. | – |

**Economics check:**
- By 200 s: 100 start + 900 in rewards (250 + 100 + 150 + 300 + 100), plus Commons income, so the 400 ⭐ Pluto is always affordable.
- By 270 s: Pluto alone adds 110/s, so Ufo Uwe Gold (1,830) is affordable.
- Zork's first-steal carry limit is 30 s.

**Funnel:** log with `AnalyticsService:LogOnboardingFunnelStepEvent`, server-side, published game only [UX §8]:

1. Joined
2. ReachedBelt
3. FirstBuy
4. FirstCollect
5. FirstUpgrade
6. Shield
7. ZorkSteal
8. Slap
9. FirstRare
10. Gift1
11. FirstRealSteal or Rebirth1

---

## 5. Retention and social

- **Daily streak** (every UTC day, countdown shown). "Income" means minutes of OfflineRate, with a floor of 1,000 × (R+1).

  | Day | Reward |
  |---|---|
  | 1 | 5 min of income |
  | 2 | Turbo-Trank ×2 |
  | 3 | 10 min of income |
  | 4 | Schild-Batterie ×2 |
  | 5 | 20 min of income |
  | 6 | Sticker-Dose Sonnenbrand |
  | 7 | 45 min of income + 2× income for 15 min; every 4th completed week also a Chrom-Farbe |

  - Missing a day resets the streak to day 1, unless you hold a **Streak-Retter** (streak saver): earn 1 per completed week, bank at most 1, used automatically [UX §7].
- **Playtime gifts** (12 steps [UX §7]). Progress resets at 00:00 UTC and carries across sessions within the day.

  | Minute | Gift |
  |---|---|
  | 5 | 3 min of income |
  | 10 | Turbo-Trank |
  | 15 | 5 min of income |
  | 20 | Schild-Batterie |
  | 30 | 10 min of income |
  | 40 | Glücks-Kapsel: free random (60% 5 min of income / 30% Turbo-Trank / 9% Sticker-Dose Sonnenbrand / 1% Gold-Farbe); odds shown; never sold |
  | 50 | Schild-Batterie ×2 |
  | 60 | 2× income for 10 min |
  | 75 | 20 min of income |
  | 90 | a Sticker-Dose of your choice |
  | 120 | **a Planetling of your choice from the rarity of your best placed unit (max Legendary)** |
  | 180 | Chrom-Farbe |

- **Daily quests:** 3 per day, seeded from (day, userId).
  - Easy, e.g. buy 8 units: 5 min of income.
  - Medium, e.g. level up 3 times, slap a thief, or steal 1: Turbo ×2 + 10 min of income.
  - Hard, e.g. steal a Legendary+ or discover 2 Atlas entries: a Sticker-Dose or 30 min of income.
  - All 3 give 1 **Kometen-Ticket** (§3.16).
  - Quests and the streak live inside the **Geschenke** window.
- **Codes:**
  - kept in `ServerStorage.ServerConfig.Codes`; the client learns validity only through `Redeem()`
  - case-insensitive, once per account, expire after 14 days
  - launch codes: `PLANET` (5 min of income + Turbo), `ZORK` (Schild-Batterie ×2), `KLOTZ` (1,000 ⭐)
  - a new code every Saturday
  - never tie codes to likes [DM §5]
  - the Codes field sits behind the **gear icon** (top right)
- **Community bonus "Crew-Bonus":** +10% (in the bucket) and a [CREW] tag.
  1. The button calls `GroupService:PromptJoinAsync(groupId)` in pcall on the client.
  2. If it returns Joined, the server re-checks with `GroupService:GetGroupsAsync(userId)` in pcall.
  3. Otherwise the bonus applies on the next join via `IsInGroupAsync` [GRK: `IsInGroup` is deprecated and caches per peer].

  The owner has to create the community first.
- **Favorite prompt:** once, after the first rebirth, on the client: `AvatarEditorService:PromptSetFavorite(game.PlaceId, Enum.AvatarItemType.Asset, true)`, with **no reward** [GRK: verify in the published game].
- **Friends:** +10% per Roblox friend in the server, up to +50% (in the bucket). Checked with `IsFriendsWith` at join, in pcall, and cached.
- **Invites and referrals:**
  - "Freunde einladen" (icon at top right) calls `SocialService:PromptGameInvite` with LaunchData `{ref=userId}`. The invitee reads it with `GetJoinData()` and retries once after 2 s.
  - The invitee's profile stores `ReferredBy` once, and only if its `FirstSessionTime` is less than 10 min old.
  - At 5 min of play, the invitee gets 2,000 ⭐, and the server calls `Store:MessageAsync("Player_"..inviterId, {t="ref", from=userId})`. The inviter's session handles it with `profile:MessageHandler`, which works across servers and offline.
  - Dedupe by `from` in `Referrals`, with a maximum of 10.
  - The inviter gets **Buddy-Bot** (E3) only if the invitee's `AccountAge` is at least 7 days.
- **Trading:** not at launch. Planned for v2.3 as a friends-only barter with confirm on both sides and a 5 s countdown.
  - Paid units are never tradable.
  - `PolicyService:GetPolicyInfoForPlayerAsync` is cached on join; everything stays off where `IsPaidItemTradingAllowed` is false [PT §1].
- **Leaderboards** (in-world, at the black-hole end):
  - "Reichste Weltraumdiebe": lifetime ⭐, stored as `floor(log10(x)×1e6)`
  - "Meisterdiebe der Woche": keyed by week index; counts only steals from non-friends where the unit's Wert is at least 25% of the thief's best unit Wert
  - "Höchster Sprung"
  - written only on autosave or leave, refreshed every 120 s [PT §4]
  - leaderstats: "⭐/s" and "Sprung"
- **Angeber-Podest (show-off podium):** every 60 s the server picks the server's highest-Wert placed unit. Clients render it at 1.5× scale on the podium with the owner's name and base color.
- **Jubel (cheer):** a one-button celebration for 5 s after a successful steal or defense. It is procedural (two hops, a spin and a brick fountain), so no uploaded animation is needed.
- **Notifications:** at launch **only the opt-in prompt**, after R1 (`ExperienceNotificationService:CanPromptOptInAsync` → `PromptOptIn`) [DM §5].
  - Sending needs the Open Cloud user-notification API, an API key in Secrets and HTTP enabled. That waits for the owner's approval after launch, starting with one weekly template for Zork-Chaos. Only 13+ users receive notifications.
- **Experience Events:**
  - "Zork-Chaos Samstag" is created weekly in Creator Hub by the owner.
  - The in-game RSVP button calls `SocialService:PromptRsvpToEventAsync(Config.Events.NextRsvpEventId)`. The owner updates the ID weekly, and the button hides once the event has started.
  - 1,000 RSVPs are needed to reach Trending Events [UX §4].
- **Update cadence:**
  - **every Saturday:** a code, 2–3 Planetlinge via the kit or an event mutation, a new bracket tag, a news-board post, and an Update announcement (60 characters, at most once every 3 days)
  - **every 2 weeks:** a bigger drop (R11–12, gear or a weather type) [UX §6]

---

## 6. Monetization: deterministic only, fair for kids

**Policy decisions:**
- **No paid random items at all:** no lucky blocks, no paid luck, spins, restocks or rerolls.
- Stardust is sold for Robux, so **nothing random may ever be bought with stardust** [PT §1]. The belt, personal offers and Hubble all show fixed items before purchase.
- Prompts open **only** on a button press, never on join and never in the first 10 minutes.
- **Server-checked prompts:** the client sends `RequestPurchase(productId)`. The server checks eligibility (§8.6) and, if it passes, calls `MarketplaceService:PromptProductPurchase(player, id)`.
- **Copy rules** for German kids' audiences (UWG Annex No. 28):
  - neutral and descriptive, e.g. "VIP-Pass – 349 R$ – +25% Einkommen"
  - no imperatives ("Kauf jetzt!", "Hol dir…") on Robux items
  - no countdowns or "nur noch X Stunden" on paid items
  - the Shop header reads: "Fair-Play: keine Zufallskäufe"
- **Shop tabs:** "Ausrüstung (⭐)" and "Robux".

**Game passes** (enable regional pricing [DM §7]):

| Pass | R$ | Effect | Benchmark |
|---|---|---|---|
| VIP "Kommandant" | 349 | +25% income (in the bucket), +10 s shield, +2 h offline cap, gold name, [VIP] tag | SAB VIP 375–499 |
| 2× Sternenstaub | 299 | Doubler = 2, including offline | SAB 2× Money 299 |
| Magnet | 149 | auto-collect from anywhere | – |
| Anbau +3 Slots | 249 | 3 extra slots in a floor-1 annex | – |
| Chaos-Fernbedienung | 499 | once per 10 min, one **cosmetic** effect: disco lights for 30 s (visual only), confetti rain, or a giant head for the buyer only; no zero-G and no gameplay effect | – |
| Regenbogen-Klatscher | 129 | cosmetic slap skin with a rainbow brick burst; same stats | SAB Blackhole Slap 199 |

**Developer products.** Every receipt is always granted, with the fallbacks below:

| Product | R$ | What you get | If the condition fails at receipt time |
|---|---|---|---|
| Staub-Beutel S | 29 | 15 min of OfflineRate (minimum 20K) | the quote is missing or expired: recompute now, with the minimum as floor |
| Staub-Beutel M | 79 | 1 h (minimum 80K) | same |
| Staub-Kiste L | 199 | 3 h (minimum 250K) | same |
| Staub-Tresor XL | 449 | 8 h (minimum 700K) | same |
| Schild-Batterie ×2 | 19 | 2 batteries into the Rucksack (use limits apply when used) | – (always goes to the Rucksack) |
| Turbo-Trank ×3 | 25 | 3 into the Rucksack | – |
| Sternen-Party | 149 | the whole server gets Doubler 2 for 15 min; each purchase **extends** by 15 min, up to 60 min remaining; "Danke, {name}!" shout-out; the dialog says players with the 2× pass gain nothing extra | above the cap, the extra time is banked and applied when the timer drops |
| Starter-Paket | 99 | "für neue Spieler", offered until R2 with no timer: Zorp Zorpington (Gold, Paid) + 50K ⭐ + 3 Turbo-Trank | a repeat receipt grants 50K ⭐ + 3 Turbo (stated in the product description) |
| Mythic-Ruf | 399 | from **R6**, once per UTC day: a Mythic of your choice (Normal, Paid) into a free slot or the Hangar | a second one on the same day, or no slot: goes to the Hangar |

- **Dust quotes:** the amount is computed when the dialog opens, shown, and stored in `Data.Quotes[productId] = {amount, expiresAt = now + 60}`. What the player sees is what they get.
- **Paid units** (`Paid=true`):
  - have no Klauen prompt and show a lock icon; the dialog says "kann nicht geklaut werden"
  - never count toward rebirth requirements
  - survive rebirth (moved to the Hangar)
  - at most 3 can be placed at once
  - are never tradable
- **Private servers:** the owner enables them in Creator Hub at about 99 R$/month. Events run there too.
- **Price anchors** from SAB's live store: Cash Packs 59–2,499, StarterPack 189 [DM §7].
- **Rewarded video ads (later):** "2× offline collect" once per day, with requirements per [DM §6].
- **Setup:** the owner creates all passes and products and pastes the IDs into `ServerConfig.ProductGrants` and `Config/Products` (display). The builder **never** creates or buys anything.

---

## 7. Art direction bible

### 7.1 Palette

**The old game decides.** M0b histograms the owner's old game. If up to 9 dominant BrickColors exist there, they **replace** the default world palette below. The owner signs off on the look board.

**Default world bricks** (9 classic BrickColors):
- Bright red #C4281C
- Bright blue #0D69AC
- Bright yellow #F5CD30
- Dark green #287F47
- Bright orange #DA8541
- Institutional white #F8F8F8
- Medium stone grey #A3A2A5
- Dark stone grey #635F62
- Black #1B2A35

**Space:** Void Navy #0B0E2A, Nebula Violet #3B1E6D, Nebula Magenta #C2378F, Star White #F4F1E8.

**Base team colors:** Bright red, Bright blue, Bright yellow, Dark green, Bright orange, Bright violet #6B327C, Bright bluish green #008F9C, Carnation pink #FF98DC.

**Rarity colors:** as in §3.4. Strokes: C #4A4A4F, R #0D3F73, E #4A1180, L #8A5A00, M #7A0F22, Co #1A0B3D.

**UI:**

| Element | Face | Base / shadow |
|---|---|---|
| Panel | #F4F1E8 | #C9C2B0 |
| Confirm button | #3FBF3F | #237A23 |
| Danger button | #E53935 | #8E1B1B |
| Info button | #2F80ED | #1A4B8F |
| Dark text | #1B2A35 | – |
| Text on colored buttons | white with a dark stroke | – |

### 7.2 Materials, studs and the brick kit

- **Studs:** all world and character parts are `Plastic` with `TopSurface = Studs` and, on overhangs, `BottomSurface = Inlet`.
  - Native studs render only on Plastic **Block** parts, not on MeshParts or Unions [VA §3], and probably not on Ball or Cylinder shapes [GRK: verify].
  - `studify(part)` runs last in every build script.
- **Grid:** 1 stud on X/Z and 0.4 on Y. The audit must report at least 95% compliance.
- **Allowed exceptions:**
  - `Neon`: belt arrows, lasers, rarity rings, event lights, and Trans-Neon cores; at most about 10% of visible surface
  - `ForceField`: the dome
  - `Glass`: belt railing panes and canopies
  - **No Foil.** No Wood, Concrete or Metal textures, no large SmoothPlastic, and no unvetted meshes.
- **Brick kit** (`ReplicatedStorage/Assets/Kit`):
  - **5 bodies:**
    - **Kugel** = stepped-plate sphere: 7 stacked square Block plates, widths 3/5/7/7/7/5/3 studs, heights 0.4–1.2, studded tops, 7 parts; scaled ×0.6–1.6 with integer widths
    - **Ring** = Kugel + a ring of plates
    - **Scheibe**
    - **Klecks**
    - **Robo**
  - **12 face sets:** eyes are black 1×1 round plates (Cylinders are allowed for eyes, rings and straws) with a white 0.4 highlight dot; mouths are 1×2 plates.
  - **About 20 accessories:** hats, signs, straws, crowns, capes, helmet lamp, antenna, headphones…
  - **Level add-ons** (≤2 parts per level).
  - **Color recipe per unit** in Config.
  - A new Planetling is a Config entry plus a few accessory parts, **about 15 min** of work each.
- **Faces and blink:** every Planetling has eyes. Blink scales the eye's Y to 0.1 for 0.12 s every 3–6 s, client-side, within 40 studs only.
- **Tags:** every model tags at most 6 parts `LOD="core"`.

### 7.3 Lighting and post-processing

**Default preset** [VA §1–2]. If the old game's Lighting (read in M0b) differs, the owner picks between both from screenshots in M2.5.

```lua
local L = game:GetService("Lighting")
L.LightingStyle = Enum.LightingStyle.Soft; L.PrioritizeLightingQuality = true
L.Brightness = 2.3; L.ExposureCompensation = 0.1
L.EnvironmentDiffuseScale = 0.6; L.EnvironmentSpecularScale = 0.4
L.Ambient = Color3.fromRGB(70,60,110); L.OutdoorAmbient = Color3.fromRGB(120,110,170)
L.ClockTime = 14; L.GlobalShadows = true; L.ShadowSoftness = 0.1
-- ColorCorrection: Saturation 0.2, Contrast 0.1, Brightness 0.02, Tint (255,250,245)
-- Bloom: Intensity 0.6, Size 28, Threshold 0.9 | SunRays: Intensity 0.08, Spread 0.6
-- Atmosphere: Density 0.25, Offset 0.2, Color #3B2A6B, Decay #1A1033, Glare 0, Haze 0
-- Sky: StarCount 5000, SunAngularSize 12, MoonAngularSize 0
```

- **Skybox candidates:** 123232480386985, 79185969624817, 101231340581451 [VA §2]. Take a screen_capture with each, and the owner picks in M2.5. On the client, rotate `SkyboxOrientation` Y by +0.3°/s. Keep the Earth backdrop.
- **Optional A/B:** `ColorGradingEffect.TonemapperPreset = Retro`.
- **Event overrides** (tween each in over 2 s):

  | Event | Override |
  |---|---|
  | Sonnensturm | Tint (255,210,170), Bloom 1.0 |
  | Schwarzes Loch | CC Brightness −0.1, Saturation −0.2, Tint (200,180,255) |
  | Zork-Chaos | Tint hue cycles at 0.5 Hz |
  | Secret spawn | Brightness −0.3 for 3 s |
  | Being robbed | red CC tint on the victim's own camera only |

  Only one sky override is active at a time: scheduled events suppress weather.

### 7.4 VFX per rarity

- Particles are enabled only within 80 studs of the camera, and placed units run at half rate [VA §4].

| Tier | Particles (rate/s, size) | Extras |
|---|---|---|
| Common | none | dust puff on landing |
| Rare | 4, 0.6, blue | ring decal |
| Epic | 8, 0.9, purple | 1 slowly rotating Beam ring |
| Legendary | 12, 1.2, gold | PointLight range 12; light pillar while on the belt |
| Mythic | 20, 1.6, red-pink | 2 orbiting beams, pillar, `Emit(40)` on spawn |
| Cosmic | 25, 1.8, gradient | 3 beams, pillar, sky tint on spawn |
| Secret | 25, 2.0, black | rainbow Highlight outline (the only Highlight besides hover), glitch flicker |

### 7.5 Animation (all client-side; the server keeps only anchors [VA §5])

- **Idle:**
  - bob 0.35 studs with a 2.6 s period, spin 20°/s
  - **only the nearest 40 models within 60 studs** animate, half of them on alternate frames, all through one `workspace:BulkMoveTo` call per frame
  - beyond 30 studs only core parts bob
  - no blink or hue cycle beyond 40 studs
  - faced characters turn toward the nearest player, up to 45°
- **Barks:** every 20–40 s, one random placed unit within 40 studs shows its catchphrase for 2.5 s with its signature sound.
- **Conveyor:** the texture scrolls at 6 studs/s. Items pop in from the portal (scale 0 → 1 with spr, damping 0.5, frequency 4).
- **Hop home:** arcs 3 studs high, one arc every 4 studs.
- **Landing assemble** (0.8 s; 1.2 s with a camera close-up on the very first buy):
  - each part starts at a random offset within 6 studs and tweens in with Back/Out, staggered 0.02 s per part
  - then a squash with `Model:ScaleTo` from 1.15 to 1.0
- **Level-up:** the same assemble, only on the new bricks.
- **Brick burst:** debris for 1 s, then reassembly at home.
- **Rebirth** (3 s): FOV 70 → 120 in 0.6 s, star streaks, a white flash, then the base rebuilds.

### 7.6 UI kit

- **Fonts:**
  - headers and numbers: LuckiestGuy (`Font.new("rbxasset://fonts/families/LuckiestGuy.json")`)
  - body: BuilderSans Bold
  - timers: Arcade
  - avoid FredokaOne [UX §2]
- **Brick button** [UX §2]:
  - a darker base frame, and a face at Size 0.9, AnchorPoint 0.5, Position (0.5, 0.45)
  - 3 studs along the top edge (small circles, UICorner 1,0, face color lightened 15%)
  - UICorner 0.22 scale
  - vertical UIGradient: +12% at the top, −8% at the bottom
  - UIStroke Contextual 2.5 px, LineJoinMode Round
- **Button states:**

  | State | Behavior |
  |---|---|
  | Hover (PC) | `spr.target(face, 0.6, 4, {Size=1.06×})`, stroke +1 px |
  | Press | face Y 0.45 → 0.5 in 0.06 s; base scales to 0.96 |
  | Release | overshoot pop |
  | Disabled | #9AA0A6, Active = false |
  | Badge | red #E53935 circle with a white count, bobbing 2 px |

- **Windows:**
  - open with Back/Out 0.25 s from scale 0.85, with a 40% dimmer and Blur 8; close with Quad/In 0.15 s
  - one window at a time; a 48 px X; Esc or B also closes
- **Juice** [UX §3]:
  - **Coin-fly:** stage 1 is 0.7 s Quad/Out to random offsets while growing 40 → 60 px; wait 0.25 s; stage 2 is 0.8 s Quad/In to the counter.
  - The counter counts up by tweening a NumberValue.
  - **Camera shake:** via **RbxCameraShaker** presets (§8.1). `Bump` (2.5, 4, 0.1, 0.75) for buys, steals and level-ups; `Explosion` (5, 10, 0, 1.5) for rares and shield breaks.
  - **Confetti:** in-house, using Frames and spr.
- **Number format:**
  - 3 significant digits, trailing zeros trimmed, **rounded down**
  - suffixes: K, M, B, T, Qa, Qi, Sx, Sp, Oc, No, Dc
  - tests: 999 → "999", 1000 → "1K", 12,500 → "12.5K", 99,950 → "99.9K", 125,000 → "125K", 999,999 → "999K", 1.25e9 → "1.25B", 1e15 → "1Qa"
- **PC layout:**
  - **left column** (x = 12 px, vertically centered, 72 px buttons, 10 px gaps): Shop, Rucksack, Atlas, Geschenke, Händler, Sprung
  - **top right:** small gear icon (Einstellungen with the music/SFX toggles, and Codes) and an invite icon
  - **top center:** event banner (420×64) with the timer row "LEGENDÄR 03:12 · MYTHISCH 07:12 · WETTER 02:40"; toasts below it, at most 3 stacked, each 3.5 s
  - **bottom-left:** currency pill (coin, amount, "+340/s", tap for the breakdown)
  - **bottom-right:** Shield button (96 px)
  - **right-middle:** goal card (260×90), and the NEU timer pill while protected
- **Mobile layout** (touch detected from the last input type [UX §1]):
  - left column: 56 px buttons, between 18% and 58% of screen height, so it clears the thumbstick
  - currency top-left
  - **Shield button placed at runtime:** read `PlayerGui.TouchGui.TouchControlFrame.JumpButton` AbsolutePosition and AbsoluteSize, then place it at `x = jump.X − shieldSize − 12`, vertically centered on jump. Recompute on AbsoluteSize changes, and fall back to a fixed spot if TouchGui is missing.
  - goal card collapses to a 40 px pill; banner at most 90% of screen width
  - `ScreenInsets = CoreUISafeInsets`, Scale sizes with `UIAspectRatioConstraint`, minimum touch target 48 px
- **Budget:** fewer than 300 UIStrokes on screen [VA §6]. At idle the HUD covers at most 20% of the screen.

### 7.7 Sound and music

- **Source:** Creator Store audio only, including the licensed partner catalogs [VA §7]. TikTok and Shorts clips must replace or mute the music.
- **Selection (the builder cannot listen):**
  1. The builder uses the Studio MCP asset search (Audio, Creator Store, verified or licensed catalog, duration filter) to shortlist **3 candidates per sound slot**.
  2. It builds a Studio-only **"Sound-Board"** ScreenGui with one play button per candidate.
  3. **The owner picks.** The IDs go into `Config/Sounds`.
- **Music:** 3 loops.
  - Hub: synth-pop or chiptune at about 100 BPM, volume 0.35
  - Weather: upbeat at about 128 BPM
  - Zork-Chaos: high energy
  - search terms: "space synth", "chiptune adventure", "retro arcade"
- **SFX** (pitch varies 0.95–1.05):

  | Moment | Sound |
  |---|---|
  | Buy | coin chime + rising arpeggio |
  | Collect | coin tick per coin |
  | Assemble | brick "click" × 3 |
  | Level-up | click cascade |
  | Steal grab | whoosh |
  | Victim | siren loop (victim only) |
  | Steal complete | heavy impact |
  | Slap | cartoon slap |
  | Rare spawn | risers scaled by tier |
  | Rebirth | whoosh + cymbal swell with music duck |
  | UI | soft plastic click |
  | Dust packs | "Cash Register (Kaching)" 7112275565 |

- **Signature sounds:** one per Planetling (§3.5). It plays on buy, level-up, steal and bark.
- **Optional voice lines:** the owner may record one line per character himself (phone mic, 3 s or less, pitch-shifted per character) and upload them within his audio-upload limits [GRK: verify the current limits]. The builder never uploads.
- **Mixing:**
  - SoundGroups: Music 0.4, SFX 0.8, UI 0.6, Voice 0.7
  - side-chain duck: threshold −30, ratio 8, attack 0.05, release 0.4 [VA §7]
  - Settings toggles persist in `Settings`
- **Check:** after a 5-min playtest, `get_console_output` shows no "Failed to load sound".

### 7.8 Avatars

Player avatars must not clash with the 2008 look. In M2.5, test with 4 random avatars and take screenshots:
- **(A)** R15 with body type 0% and classic proportions (Game Settings > Avatar)
- **(B)** R6

The owner picks, and the choice is recorded in `Config/Style`.

---

## 8. Tech architecture

### 8.1 Libraries (use proven code; sizes verified 2026-09-26 [WEB])

**Install method:**
1. On the owner's PC, download each raw file with `curl.exe -L -o` or `Invoke-WebRequest -OutFile` into a temp folder. Never use a summarizing fetch tool.
2. Check the byte size against this table.
3. Create the ModuleScript through the Studio MCP script tools and paste the exact contents.
4. In execute_luau, confirm that `#module.Source` equals the file size.
5. Start every module with a comment giving name, URL, commit SHA (recorded at install) and the full license text. MIT and Apache require the notice, and some of these ship to clients.

| Library | License | Raw file(s) → location | Bytes | Use |
|---|---|---|---|---|
| ProfileStore (loleris) | Apache-2.0 | `MadStudioRoblox/ProfileStore/main/ProfileStore.luau` → `ServerScriptService/Lib/ProfileStore` | 64,654 | data, session locks, MessageAsync |
| spr (Fraktality) | MIT | `Fraktality/spr/master/spr.lua` → `Shared/Lib/spr` | 21,120 | UI and model springs |
| Trove 1.8.0 (Sleitnick RbxUtil) | MIT | `Sleitnick/RbxUtil/main/modules/trove/init.luau` | 19,374 | cleanup |
| Signal 2.0.3 **or** GoodSignal | MIT | `…/modules/signal/init.luau` (11,336) or `stravant/goodsignal/master/src/init.lua` (6,884) | – | internal events |
| **RbxCameraShaker** (Sleitnick) | MIT | `Sleitnick/RbxCameraShaker/master/src/CameraShaker/init.lua` + children `CameraShakeInstance.lua` and `CameraShakePresets.lua` → `Shared/Lib/CameraShaker` | 6,043 + 3,723 + 2,369 | Bump / Explosion presets |
| **SimplePath** (grayzcale) | MIT | `grayzcale/simplepath/main/src/SimplePath.lua` → `ServerScriptService/Lib/SimplePath` | 10,612 | Zork and the boarders |
| Footprint | in-house | about 20 lines: an AABB test of a position against each base's CFrame and size | – | shield enforcement, delivery, gear rules, shield button |
| Networking | in-house | plain RemoteEvents with validation and token buckets; no Packet/ByteNet [OS §2] | – | – |
| Admin | in-house | about 100 lines, `TextChatCommand`, allowlist in ServerConfig; Cmdr optional [OS §6] | – | – |
| Reference only | – | KallumS "Steal-a-Rotting-Brain" (Rojo): read the patterns, check the license before copying anything [SG §5] | – | – |

All raw URLs start with `https://raw.githubusercontent.com/`.

**Never import:**
- GitHub "steal a brainrot" repos
- free "brainrot kits"
- **"Steal a Planet uncopylocked" kits** and any ScriptBlox scripts [OS §8, WEB]

### 8.2 Folder structure

```
ReplicatedStorage/
  Shared/Config/  Characters, Rarities, Mutations, Levels, Stickers, Rebirths, Gear, Tempo,
                  Events, Handler, Rewards, Products (display only), Style, Sounds, Strings (de/en)
  Shared/Lib/     spr, Trove, Signal, CameraShaker, Format, TimeSync, Odds, Footprint
  Remotes/        (created by the server at boot)
  Assets/Kit/ (bodies, faces, accessories, level add-ons), Assets/Planetlinge/<Id>, Assets/VFX, Assets/Sounds
  State/Belt/     (one Folder per belt item, with attributes)
ServerStorage/
  ServerConfig/   Codes, Admin, AntiCheat, ProductGrants, Migration (+TestFixtures), Debug (REAL_DATA, TIME_OFFSET)
  AltesSpiel_Welt (untouched), ZorkShip, BaseTemplates
ServerScriptService/
  Main.server.luau
  Lib/ ProfileStore, SimplePath
  Services/ DataService, EconomyService, ConveyorService, BaseService, ShieldService, StealService,
            ZorkService, GearService, TempoService, RebirthService, EventService, RewardService,
            HandlerService, InventoryService, AtlasService, MonetizationService, LeaderboardService,
            ReferralService, AntiCheatService, AdminService, AnalyticsService, MigrationService
  Dev/ TestHarness, EconomySim      -- required only when RunService:IsStudio()
StarterPlayerScripts/ ClientMain.client.luau + Controllers/ (UI, BeltView, SlotView, CarryView, Juice,
            Audio, Tutorial, EventView, Atlas, Rucksack, Input, LOD)
```

Clients get `TIME_OFFSET` as the workspace attribute `TimeOffset`.

### 8.3 Reuse map from v1 ("use existing code")

In M0 the builder writes a per-script table of **keep / adapt / replace**. The default is **adapt**, and "replace" needs a one-line reason.

| v1 system | v2 action |
|---|---|
| Own DataStore | replace with ProfileStore; the v1 SAP store is ignored (never published, Studio test data only) |
| Conveyor | adapt to the time-based belt (§8.4) |
| Steal prompt setup | adapt to §3.10 |
| Shield | adapt to §3.9 (Nachladen, enforcement) |
| Hyperraum-Sprung | adapt: keep the name and UI entry, use the new table |
| 5 galaxies | adapt into base skins; remove the areas |
| Daily reward, meteor shower, Saturday event | adapt per §3.15 and §5 |
| Goals engine, starter gift, arrow | keep the engine; rewrite the content per §4; remove the welcome window |
| "+⭐" popups, rarity effects and sounds | keep what passes M0 review; extend in M3c |
| Pirat Zork bot | keep and promote (ship, tutorial, boss) |
| Top-10 board | adapt to log-scaled OrderedDataStores |
| 18 models | adapt onto the kit, keeping their ideas and colors |
| Brick UI buttons | adapt to §7.6 |
| Monetization scaffold | adapt to §6 |

### 8.4 Server owns data, client draws visuals

- **Belt:**
  - The server creates `State/Belt/<uid>` with the attributes `CharId`, `Mut`, `SpawnT` (from `GetServerTimeNow`), `State`, `Buyer`, `HopT` and `Intercepts`.
  - Clients compute `start + dir × 6 × (now − SpawnT)` and draw a local clone with a client-created ProximityPrompt.
  - The Buy remote passes the uid, and the server recomputes the position and checks the 14-stud distance. Nothing moves on the server [PT §7].
- **Slots:**
  - The server keeps **only** an invisible, anchored `SlotAnchor` per slot, with the attributes `CharId`, `Mut`, `Lv`, `Stickers` (string), `Owner`, `State`, `Paid`, `IncomePerSec` and `LastCollectT`.
  - **Each client clones the slot models** from templates and runs LOD.
  - Pending is extrapolated on the client.
  - The steal, sell and upgrade prompts live on the **server** anchors, so `PromptButtonHoldBegan` fires on the server. The client hides whichever prompt does not apply to that player by setting `Enabled` locally [GRK].
- **Carried unit:** attributes on the thief's character (`Carrying`, `CharId`, `Mut`, `Lv`), rendered by each client.

### 8.5 Server-authoritative rules and anti-exploit [PT §6]

- **Intents** (all logic and data sit on the server):
  - `Buy(uid)`, `BuyPersonal()`, `Intercept(uid)`, `Collect()`, `Shield()`
  - `Upgrade(slot)`, `Swap(a, b)`, `Sell(slot)`
  - `Slap(targetUserId)`, `UseGear(name, pos)`, `Equip(name)`
  - `UseItem(itemId, slot)`, `HangarPlace(idx, slot)`, `Train(on)`
  - `Claim(kind, idx)`, `Redeem(code)`, `Rebirth()`, `HandlerBuy(slot)`, `RequestPurchase(productId)`
  - `SetSetting(k, v)`, `Jubel()`
- **Validation:**
  - `typeof` on every argument, `IsDescendantOf` on instances
  - reject NaN and infinities with `math.isfinite`
  - clamp strings (codes at most 20 characters)
- **Token buckets:**

  | Remote | Limit |
  |---|---|
  | default | capacity 10, refill 5/s |
  | Buy | 4/s |
  | Upgrade | 4/s |
  | Slap | 2/s |
  | Swap | 2/s |
  | Redeem | 1 per 3 s |

- **Distance checks** on every Buy, Collect, Shield, Slap, Upgrade, and on prompt HoldBegan and Triggered.
- **Shield enforcement** as in §3.9.
- **Carry and speed monitor:**
  - sample every 0.25 s; a violation is horizontal movement greater than `WalkSpeed×0.25×1.6 + 4`, using the server-known WalkSpeed
  - 3 violations while carrying: drop the unit (it returns home)
  - 5 violations otherwise: rubber-band the player
  - 1.5 s grace after knockback, a jump pad or a server teleport
- **Honeypot:** a remote named `AdminGiveCash`. Traffic is logged, then escalates log → kick → `Players:BanAsync` on a repeat.
- **Heuristics:** flag income gain per minute above 3× the theoretical maximum.
- **Config split:** codes, admin allowlist, anti-cheat thresholds, the honeypot name and the grant map live only in ServerStorage. An M15b check scans ReplicatedStorage for them.
- **Server Authority mode:** do **not** enable `AuthorityMode = Server` in v2 [PT §6].
- **Studio settings:** `LoadStringEnabled = false`. HTTP stays off unless the owner approves.

### 8.6 Data (ProfileStore)

**Template** (`SAP_Players_v2`, key `Player_<UserId>`):
- `Version=2, Dust=100, TotalEarned=0, Rebirths=0, NextUid=1`
- `Slots={[i]={Uid, Id, Mut, Lv=1, Stickers="", Paid=false, Pending=0, State="Placed"}}`
- `Hangar={}, StickerAlbum=""`
- `Gear={}, Equipped={}, Consumables={Turbo=0, Schild=0, Magnet=0, Stickers={}, Farben={}}, ShieldUseLog={}`
- `Tempo={Level=0, Sec=0}, WheelLv=1, Tickets=0`
- `Atlas={}, AtlasRewards={}, Titles={}, Cosmetics={}, BaseSkin="Milchstrasse"`
- `Daily={Streak=0, LastDay=0, Savers=0}, Playtime={Day=0, Sec=0, Claimed={}}, Quests={Day=0, List={}, Done={}}`
- `Codes={}, Stats={PlaySec=0, Steals=0, Defends=0}, WeeklySteals={Week=0, Count=0}`
- `StealHistory={}` (20 entries), `PayoutLog={}`
- `HubbleCycle=0, HubbleBought={}`
- `PurchaseIdCache={}, Quotes={}, StarterOwned=false, MythicRufDay=0`
- `FirstSessionTime=0, ReferredBy=0, Referrals={}`
- `Tutorial={Step=0}, Settings={Music=true, SFX=true}`
- `LastOnline=0, OfflineRate=0, Migration={Done=false}`

**Session flow:**

```lua
local Store = ProfileStore.New("SAP_Players_v2", Template)
if RunService:IsStudio() and not ServerConfig.Debug.REAL_DATA then Store = Store.Mock end
Players.PlayerAdded:Connect(function(plr)
  local profile = Store:StartSessionAsync("Player_" .. plr.UserId,
    { Cancel = function() return plr.Parent ~= Players end })
  if not profile then plr:Kick(Strings.DataLoadFail) return end   -- DE/EN text
  profile:AddUserId(plr.UserId)   -- GDPR
  profile:Reconcile()
  profile.OnSessionEnd:Connect(function() Profiles[plr] = nil; plr:Kick(Strings.SessionEnded) end)
  if plr.Parent ~= Players then profile:EndSession() return end
  Profiles[plr] = profile
  profile:MessageHandler(ReferralService.OnMessage)
end)
Players.PlayerRemoving:Connect(function(plr)
  StealService:AbortCarriesInvolving(plr)          -- always first
  local p = Profiles[plr]
  if p then EconomyService:FlushPending(plr, p); EconomyService:SaveOfflineRate(plr, p); p:EndSession() end
end)
```

- **Autosave:** every 300 s (the ProfileStore default [OS §1]).
- **Steal integrity:** InTransit plus the abort-first rule (§3.10). On delivery, `Save()` **both** profiles. This is cheap, and the 20 s steal cooldown bounds the rate. Every transfer is logged.
- **Migration** (reduced):
  - The SAP v1 store is ignored.
  - Only if M0 confirms that the old *Weltraum-Erkundungs-Simulator* was public with real players: MigrationService calls `GetAsync` on the old store (names found in M0 by grepping `GetDataStore` inside AltesSpiel_Welt, read-only) with 3 retries and backoff of 1, 2 and 4 s. A hit grants the "Veteran" title, a base flag and 50K ⭐, then sets `Done`.
  - **Never** SetAsync, UpdateAsync or RemoveAsync on old keys.
  - Tests use `ServerConfig.Migration.TestFixtures` in Mock mode, never real keys.
  - Everyone who joins during the Public Beta gets the title "Pionier".
- **ProcessReceipt:** exactly **one** handler, in MonetizationService. Use the **official ProfileStore "caching PurchaseIds" pattern** from `madstudioroblox.github.io/ProfileStore/devproducts/` (read and verified [WEB]):
  1. Wait while `Profiles[plr] == nil and plr.Parent == Players`.
  2. If the PurchaseId is not in `Data.PurchaseIdCache`, `pcall(Grant)`. Grant computes everything first, then changes Data in one final block with no yields, and **never refuses** (fallbacks in §6). Then insert the id and keep the cache at 100.
  3. Loop while the profile is active:
     - if `LastSavedData.PurchaseIdCache` contains the id, return **PurchaseGranted**
     - otherwise call `profile:Save()` and, if `LastSavedData` is unchanged, `OnAfterSave:Wait()`; check again, then `task.wait(10)`
  4. If the profile becomes inactive, return **NotProcessedYet**. **Never return Granted on a timeout.**
- **Pre-purchase eligibility** (on `RequestPurchase`):
  - Schild-Batterie and Turbo: always OK
  - Starter-Paket: not owned and below R2
  - Mythic-Ruf: at least R6, not yet bought today
  - dust packs: write the quote
- **Game passes:** `UserOwnsGamePassAsync` on join (cached) plus `PromptGamePassPurchaseFinished` [GRK].

### 8.7 Admin, events and time

- **Server clock:** `os.time() + TIME_OFFSET`.
- **Client clock:** `workspace:GetServerTimeNow() + workspace:GetAttribute("TimeOffset")`. Never the device clock.
- **Calendar math:** always `os.date("!*t", t)`.
- **Berlin DST helper:** summer time runs from the last Sunday of March 01:00 UTC to the last Sunday of October 01:00 UTC. For example, 25 Oct 2026 switches Zork-Chaos from 16:00 UTC to 17:00 UTC, and it stays 18:00 German time.
- **Admin commands** (owner allowlist):
  - `/weather <type>`, `/luck <x> <min>`, `/spawn <id> [mut] [lv]`, `/event zork|mittwoch`
  - Studio only: `/time +<sec>`, `/give <user> <dust>`
  - optional: `/live` (§3.15)

### 8.8 Performance [PT §7]

- **Streaming:** StreamingEnabled on, TargetRadius 512, MinRadius 128. `ModelStreamingMode` is Atomic for bases and Persistent for the belt, the hub and the backdrop.
- **Part budgets** (server-side Workspace at most about 7K; client-rendered worst case at **12K or fewer** with 8 full bases in view):

  | Area | Budget |
  |---|---|
  | Arena static | ≤ 3,500 |
  | Each base (floors, stairs, wheel) | ≤ 300 |
  | Common–Epic models | ≤ 20 |
  | Legendary–Mythic models | ≤ 30 |
  | Cosmic–Secret models | ≤ 40 |
  | Per Ausbauen level | +2 at most |
  | Average across a full server's 248 units | ≤ 25 |

- **LOD:** beyond 90 studs a client **destroys** everything except the ≤6 core parts, and re-clones the full model when the player comes back in range. The budget report counts client clones.
- **Decor parts:** Anchored, with CanCollide, CanTouch and CanQuery off, and CastShadow off on small parts.
- **Particles:** at most 40 active emitters, each at most 25/s [VA §4].
- **Server loops:** one 1 Hz economy loop and one 10 Hz carry/footprint loop. No per-unit loops.
- **FPS measurement:** a client execute_luau averages 1/dt over 600 RenderStepped frames.
  - PC Studio: at least 55 FPS.
  - Device Emulator at 812×375, quality level 1, 8 full bases: at least 40 FPS. The emulator uses PC hardware, so the owner confirms on his real phone once a Limited test build exists.
- **Localization:** all text in `Config/Strings` (DE for `de-*`, EN otherwise), including EN names. Automatic translation is on for other languages [GRK].
- **Analytics:**
  - the funnel (§4)
  - `LogEconomyEvent` for every source and sink, including Held, Rache and Ausbauen [GRK]
  - custom events: steal attempt and success, slap, intercept, rebirth, level-up

### 8.9 TestHarness (Studio only)

`ServerScriptService/Dev/TestHarness` is never required outside `RunService:IsStudio()`. Its `FakePlayer` objects own a Mock profile and a base, and send intents by calling service functions directly. The multi-player acceptance checks use it, because the Studio MCP runs a single-client playtest:
- rejecting holds under 2.8 s
- the steal cap
- revenge
- victim leaves or sells mid-carry
- shield ejection
- payouts

---

## 9. Build order for the Studio agent

**How each milestone ends:**
1. Playtest (`start_stop_play`, `character_navigation`, keyboard and mouse input).
2. Check that `get_console_output` shows 0 errors from our scripts.
3. Take a `screen_capture`.
4. Post a short change log.
5. Ask the owner to **Save** (Ctrl+S), plus File > Save to File every 3 milestones.

Each milestone is **at most one service plus its UI, about 400 lines**.

### Phase A: look and fun first

| # | Milestone | Scope | Acceptance |
|---|---|---|---|
| M0 | Audit and owner tasks (read-only) | Owner saves `SAP_v1_backup.rbxl`. Backdoor scan (§11). Inventory scripts, remotes, DataStore names and the 18 models. Play v1 and capture t = 0, 30 s, 60 s and 3 min on PC and at 812×375; write a **10-point defect list**. Ask the owner: **which "old game" does he mean** (AltesSpiel_Welt or another place, with a link or file)? And what are his **3 worst moments** in v1? Write the keep/adapt/replace table (§8.3). Post the owner checklist (§10.1). Search the title candidates on roblox.com. | Everything posted; scan hits are 0 or explained; the owner has answered both questions. |
| M0b | Style extraction (read-only) | In a playtest, where changes are discarded, clone the old world into a folder 5,000 studs away (never move the original). Print histograms of BrickColor, Material, Top/BottomSurface, part sizes (mod 1 and mod 0.2) and Lighting properties; take 6 captures; destroy the clone. If the old game is another place, the owner opens it and the same script runs there. Build a one-screen **look board**: old game vs proposed palette/lighting vs one Planetling mock. | **Owner gate:** the owner writes "ok" on the look board. |
| M1 | Foundations-lite | Libraries (§8.1 with byte checks), Config split, Format + tests, DataService with Mock, TimeSync + DST helper, TestHarness skeleton, EconomySim | Format tests pass; a Mock rejoin keeps changed Dust; every `#Source` equals its file size; EconomySim reproduces §3.20 within ±25%. |
| M2 | Arena block-out | Final geometry (§3.2), including railings, bridges, jump pads, cover, the lookout, 8 base templates, portal, black hole, ship dock, Hubble stall, podium and boards; backdrop model | Spawn capture shows the belt and at least 5 bases. Gate to railing is 2.5 s or less at WalkSpeed 22. A default jump cannot clear the railing and a Spule jump can. Grid audit at least 95%. **Owner gate:** screenshot sign-off. |
| M2.5 | Style lock | One finished base, a 30-stud belt segment, 3 finished Planetlinge (Mondi Moppel, König Sol, Glitchi) with faces, blink, idle, build-snap and the Lv1–Lv5 look; lighting and skybox candidates; avatar A/B; HUD with 3 brick buttons and the currency pill | **Owner gate:** the owner picks from 2–3 variants and writes "ok". Presets are saved in `Config/Style`, and every later milestone reuses them. |
| M3a | Belt core | Time model, signs, odds, mutations and the guaranteed schedule as pure functions | Week walk shows 0 collisions. A 10-min soak is within ±20% for C/R/E. A Legendary spawns at every t mod 300 = 60. |
| M3b | Buy, hop, collect, Ausbauen, sell | Plus personal offers and intercept rules | A new profile buys within 15 s. Lv1→Lv5 costs and incomes match §3.6 exactly. Sell pays 50% of Wert. The intercept rules hold, tested through TestHarness. |
| M3c | Juice and UI kit core | Brick button, windows, banner and toasts, coin-fly, count-up, CameraShaker, confetti, announcement policy, Sound-Board v1, core SFX, hub music | Every buy fires coin-fly, sound and Bump. Buttons show all 4 states. At 1920×1080 and 812×375, the shield/jump and thumbstick overlap area is 0 by script. HUD at most 20%. |
| M3d | Shield and sign | Dome, lasers, Nachladen, server enforcement, sign states, join shield | A FakePlayer inside a shielded base is ejected within 0.5 s. The sign runs green → yellow → "ÖFFNET IN 5" → "OFFEN – lädt 10". The UI button is disabled outside the base. |
| M3e | Zork steal and slap | Steal core (hold validation, carry, tether, delivery, InTransit), Zork ship with SimplePath, Klotz-Klatscher | The Zork steal lands within 3 min of join. A hold under 2.8 s is rejected. Carry speed is 0.6×. A slap returns the unit with a brick burst. |
| M3f | Tutorial + 6 finished Planetlinge | §4 script; Mondi, Kometti, Staubi, Pluto, Ufo Uwe and König Sol finished | A scripted run fires funnel steps 1–10 in order within 5 min. |
| **GATE** | Play-test | Owner + at least 3 friends play for 20 min: via Team Test, or the owner (after his age check) publishes to **Limited > Friends/Playtesters** after his own "go". Trusted Friends of an age-checked owner can join regardless of age once the questionnaire is done [WEB]. | Average look ≥ 7 **and** fun ≥ 7 out of 10. Otherwise fix the 3 lowest-rated points and retest (at most 2 loops, then re-plan with the owner). |

### Phase B: breadth

| # | Milestone | Acceptance |
|---|---|---|
| M4a | PvP steal rules (conditions, NEU, cap, cooldown, aborts, double Save, StealHistory) | TestHarness: if the victim leaves mid-carry, the thief's slot count is unchanged and the victim still owns the unit; if the victim sells mid-carry, it is rejected; a 3rd steal within 10 min is blocked. |
| M4b | Slap, HELD, RACHE, payout caps, alert rate-limit | HELD pays min(5%, 60 s of income) only to the victim or the victim's friends; a friend pair pays 0; the 6th payout in an hour pays 0. |
| M4c | Base strategy (fill order, Umstellen, stairs + tripwire, Hangar, GrantUnit) | Swap works only while shielded; every slot is within 8 studs of a walkable spot; the tripwire alerts the owner; a full base sends grants to the Hangar. |
| M5a–f | Roster via the kit in 6 batches of 6, plus the 3 limited units | Per batch: a lineup capture (every character has eyes), budgets pass, and one unit × 5 mutations × Lv1/Lv5 renders correctly. |
| M6a | Defender gear | Target rules and diminishing returns verified; a NEU player is immune; nothing deals damage. |
| M6b | Thief gear + Lauf-Rad | Köder-Klon and Rauch-Klotz work while carrying; Tempo and wheel level survive a rebirth. |
| M7 | Art pass (base skins, rarity VFX, idle budget, burst/assemble polish) | 4 side-by-side "old game vs v2" captures approved by the owner; no large SmoothPlastic; Neon about 10% or less; FPS gates from §8.8; client parts 12K or fewer with 8 full bases. |
| M8 | Rebirth, galaxies, Sticker-Album; EconomySim tuning | R1 → R2 on a test profile resets and keeps the right things, Paid units go to the Hangar, floor 2 opens; EconomySim medians are within the §3.20 bands. |
| **PUBLIC BETA** | The **owner** publishes Public after his "go" (§10.3). | – |
| M9a | Weather, participation stickers, Glücks-Spawn | With TIME_OFFSET, each weather runs 180 s; it is skipped inside event windows; stickers roll only for participants. |
| M9b | Scheduled events, DST, admin commands | Zork-Chaos starts at 16:00 UTC with a summer offset and at 17:00 UTC with a winter offset; Luck equals the max of active sources. |
| M9c | Zork boss raid, Klotz-Regen | 20 boarders path to the bases; success pays participants. |
| M10 | Atlas | A discovery fires the toast; the 50% page reward applies once. |
| M11a–d | Daily + gifts / quests + codes + tickets / crew + friends + invites + referrals / leaderboards + podium + Jubel | The date-roll test passes; a code works once only; a referral message is handled across servers (Mock); the friend bonus shows in the breakdown. |
| M12 | Händler Hubble + Rucksack UI | Two separate execute_luau runs of `RollStock(cycle)` give the same stock; a limit survives a rejoin. |
| M13 | Monetization (tabs, RequestPurchase, passes, receipts, fallbacks, Paid rules) | Synthetic receipts: a duplicate PurchaseId is granted once; a profile still loading waits; a forced save failure returns NotProcessedYet. Plus one owner test purchase in Studio [GRK: costs no Robux]. |
| M14 | Audio complete (Sound-Board, barks, signature sounds, mix) | Volumes and compressor asserted by script; the owner listens and approves; 0 "Failed to load sound". |
| M15a–c | Performance/LOD · security (buckets, honeypot, config audit) · analytics | Budget report passes; the honeypot kick works via TestHarness; ReplicatedStorage holds no secrets; all 11 funnel steps fire in order (step 11 via TestHarness). |
| M16 | Launch assets | Thumbnails and icon renders via screen_capture and the description are done. **The owner approves, uploads and publishes.** |

---

## 10. Launch and reach plan

### 10.1 Owner checklist (start in M0)

These requirements come from Creator Hub, "Roblox Kids and Select" and "Publish games", read on 2026-09-26 [WEB]:

- **Audience tiers:** Roblox Kids (5–8, Minimal/Mild), Roblox Select (9–15, up to Moderate), and Roblox (16+ and Trusted Friends).
- **To reach 16+ at all:** the account must be at least 2 days old and in good standing, the owner must do an **age check** (facial estimation or ID), and the **maturity questionnaire** must be complete.
- **To reach under-16s**, additionally:
  - **facial age estimation** (the owner is under 18)
  - **2-Step Verification**
  - **either** a one-time **refundable 1,000 R$ fee per game**, refunded automatically 90 days after the game becomes eligible (or 90 days after payment if it never does), **or** 2 consecutive months of Roblox Plus or Premium
  - passing the **evaluation:**
    - a trial phase with age-checked 16+ users only
    - **250 unique plays by "highly engaged" age-checked users within 60 days** (account tenure, playtime in our game, and any Roblox purchase in the last 60 days)
    - a safety review
  - Progress shows on the **Audience Reach** dashboard.
  - An expedited review costs a refundable 50,000 R$. Not recommended.
- **Private** games are for Edit-permission users only. **Limited > Playtesters/Friends** lets Trusted Friends of an age-checked owner play regardless of age.

**Owner tasks now:**
1. Age check.
2. 2SV.
3. Questionnaire. Answers: Mild; unrealistic, bloodless slapping; **mild crude humor** (Jupi's burp); **random rewards are free only**; no paid random items; no gambling.
4. Decide between the fee and Plus/Premium.
5. In Creator Hub, check whether this universe was ever public, its lifetime visits, and its Audience Reach status.

### 10.2 Title, icon, store page

- **Title:**
  - The working title is **"Steal a Brick Planet"**. Alternatives: "Steal a Planetling", "Klötzchen-Klau im All".
  - On 2026-09-26, Roblox search showed no exact match for the first two [WEB]. The builder re-checks in M0 and M16, and **the owner picks**.
  - A bracket tag rotates each update, e.g. "[ZORK-CHAOS] Steal a Brick Planet" [DM §3].
  - Never "LEGO" or "Robux" in the title. DE localized title, e.g. "Klau einen Klötzchen-Planeten".
- **Icon** (512×512, readable at 150 px):
  - an unmistakably **studded stepped-plate planet** with a yellow stud ring on Void Navy
  - Ringo Saturnini grinning, carried off by a blocky avatar
  - thick dark outline
  - 2 variants, swapped weekly
- **Thumbnails** (1920×1080, 2–5 active, which turns on personalization: +8.5% qPTR [DM §3]). Real in-game renders only, with no promotional text and nothing important near the bottom edge.
  1. A chase at "ÖFFNET IN 5…": the thief carries a glowing Lv5 Mythic, the owner winds up the slap, the red tether shows.
  2. The belt with the Secret banner and a darkened sky.
  3. A full base with levelled, glowing Planetlinge.
  4. The Zork-Chaos disco.
- **Description** (DE + EN), draft:
  > "Kauf Planetlinge, bau sie Stein für Stein aus, klau sie deinen Freunden und verteidige deine Basis! 36 verrückte Klötzchen-Planeten, kosmisches Wetter alle 20 Minuten, Zork-Chaos jeden Samstag um 18 Uhr (deutsche Zeit). Fair-Play: keine Zufallskäufe, Neuling-Schutz, gekaufte Planetlinge kann niemand klauen."

  Add the current code, and keep the copy neutral (§6).
- **Genre:** Simulation, subgenre Tycoon [DM §2].

### 10.3 Timeline

1. **Phase A + gate** (Limited/Team Test only).
2. **Public Beta after M8** (the owner publishes Public with a "[BETA]" tag). This starts the 60-day evaluation clock. Only age-checked 16+ players can find the game.
   - **Goal:** 250 highly engaged plays.
   - **Channels:** older contacts, German Roblox Discords (16+ areas), 1 clip a day on TikTok/Shorts. Aim for 15+ minutes of play per player.
   - The owner watches the Audience Reach dashboard weekly.
   - Up-and-Coming only counts games published within the last 28 days [DM §2]. That window will likely pass during this 16+ phase; accept it, because it needs about 224 CCU anyway.
3. **Real launch in the week the game becomes Kids/Select eligible:**
   - a Friday release, with the first Zork-Chaos the next day
   - an Experience Event created 7 days in advance
   - launch codes
   - a 3-week clip push
4. **Universe decision:** keep this universe by default. Use a new one only if the owner wants a clean start **and** this universe is not already eligible. Migration no longer matters either way.

### 10.4 Clips and expectations

- **Clip ideas** (record with the Windows Game Bar; replace the music):
  1. A steal one second before "ÖFFNET IN 5" ends.
  2. Pluto's protest chant.
  3. A slap chain that sends the brick burst home.
  4. The black hole swallowing the sky.
  5. The first Glitchi.
  6. Zork's boss raid.
  7. A Lv5 Regenbogen base tour.
  8. "RACHE!"
  9. The Köder-Klon fooling a whole server.

  Post about 1 a day for 3 weeks. One video a month does nothing [DM §5].
- **Realistic expectations** [DM]:
  - Until eligibility, expect single-digit CCU.
  - The lowest game on Up-and-Coming page 1 had 224 CCU.
  - **v2 targets:** D1 ≥ 13%, D7 ≥ 3%, session ≥ 15 min, qPTR ≥ 3%.
  - **Robux:** keeping 15,000 R$ needs about 21,400 R$ of gross spend. At a steady 100 CCU (2–24 R$ per CCU per day) that takes about 6–75 days; at 10–20 CCU, months.
  - **DevEx** needs 30,000 R$.
  - The steal genre is not dead: Steal An Egg was at 2.31M CCU on 2026-09-26 [WEB]. But that shows how high the bar is, not what we will get.
- **Ads:** only after the targets are hit. A meaningful test costs roughly 13K R$, and paying by card needs 18+. **Default: no ads.**

---

## 11. Safety

**Vetting every inserted asset or code** [OS §9]:
- **Scan patterns.** Before any asset stays, run a Luau scan over every Script, LocalScript and ModuleScript for:
  - `require%s*%(%s*[%d%.%+%*]`
  - `getfenv`, `setfenv`, `loadstring`
  - `:reverse()` / `string.reverse`
  - escaped byte runs, `string.char(`
  - `HttpService`, `PostAsync`, `RequestAsync`, `discord.com/api/webhooks`
  - `InsertService`, `LoadAsset`, `TeleportService` (outside our own ZorkService/live code)
  - more than one `ProcessReceipt` assignment
  - lines over 500 characters
  - an aliased `require`
  - scripts inside Parts, Decals, Meshes or TestService
  - disabled scripts, or names like "Vaccine", "Anti-Lag", "RotateP"
- **Asset rules:**
  - Free models are for meshes, skyboxes and sounds only; delete every script inside them.
  - Never install "anti-virus" plugins.
  - Code comes only from the raw GitHub URLs in §8.1.
  - Never use "Steal a Planet uncopylocked" kits or ScriptBlox scripts.

**Hard rules for the builder:**
1. **Never publish** to any audience (Public, Limited or Private), **never create or buy passes or products, never pay fees, never spend Robux, never upload assets, and never start ads** without the owner's explicit "go" in chat. The owner presses Save and Publish.
2. Never modify `ServerStorage.AltesSpiel_Welt`. Only the read-only clone in a discarded playtest (M0b) is allowed. Never write to any old DataStore.
3. Test with `Store.Mock` unless the owner enables `REAL_DATA`. TestHarness and EconomySim never run outside Studio.
4. Never enable HTTP requests, `LoadStringEnabled`, cross-universe teleports or webhooks without the owner's approval.
5. **No IP copying:**
   - no LEGO name or logo
   - no Steal a Brainrot, Steal An Egg or Steal a Planet names, models, audio or UI art
   - no brainrot characters, no copyrighted music
   - every Planetling is original
6. No player-entered text. If it is ever added, filter it server-side with `TextService:FilterStringAsync` [PT §3].
7. No gambling visuals and no paid random items, anywhere, ever [PT §1–2]. Free random rewards always show their odds.
8. No imperative buy calls and no countdowns on Robux items (§6).
9. Post a change log after every milestone, and stop at owner gates and at any ambiguity.

---

## Appendix A: Critique decisions

Critiques C = competitor, F = feasibility. **Everything not listed here was accepted as proposed and merged into the sections above.**

- **C (genre is shrinking) — premise rejected, fix accepted.** SAB fell, but the steal genre is at its peak: Steal An Egg had 2.31M CCU on 2026-09-26 [WEB]. We still add Ausbauen, and also the Lauf-Rad, because the current leader grew on exactly these loops.
- **C1/C2 (numbers copied from SAB = the generic look) — partly rejected.** Players see the look and the feel, not the tables. We kept genre-expected anchors and changed what shapes play: shield Nachladen, gear targeting, the rebirth table, levels.
- **C2 (Ausbauen at a flat +60% per level) — modified** to income ×1.6/2.5/4/6.5, so Lv5 still pays back at about 3.2× base payback instead of getting worse every level.
- **C5 vs F27 (R5 at 5 h or more vs 3–5 h) — chose 3–5 h, with R10 at 40–60 h.** Verified with a prototype [SIM].
- **C6 (36–40 units, 3 per week) — chose 36 at launch and 2–3 per week**, which the kit makes realistic.
- **C12 (shift weather to :05/:25/:45) — rejected** for suppressing weather during scheduled events: one rule instead of two clocks, and a 30-min event still overlaps with shifted weather.
- **C18 (a belt raised 2 studs blocks crossing) — modified.** The default JumpHeight of 7.2 clears 2 studs, so we use 8-stud glass railings, which the Spule can clear.
- **C20c ("EPISCH für dich") — modified** to a personal **Gold Ufo Uwe**. An Epic (45K+) would need a 98% discount for a 5-minute player; a Gold unit is affordable and teaches mutations.
- **C21 (10-min steal immunity for paid units) — replaced** by F18: paid units can never be stolen. That is safer against refunds and "scam" reviews.
- **C22/F2 ProcessReceipt — merged** into the official ProfileStore pattern, read on 2026-09-26.
- **C36 (Jubel emote) — accepted as a procedural effect.** The builder cannot upload animations.
- **F10 (friend soft test is impossible) — partly rejected.** Limited > Playtesters/Friends lets Trusted Friends of an age-checked owner join regardless of age [WEB]. The Public (16+) publish starts after M8, not after M2.5 + M6, so the first public impression has at least 1 h of content.
- **F21 (save both profiles only for Epic+ steals) — modified** to save on every delivered steal. It is simpler, and the 20 s cooldown keeps it within DataStore budgets.
- **C33 (owner voice lines) — optional.** It is the owner's choice, it is bound by his upload limits, and the builder never uploads.
- **C34 ("Chef ist live") — accepted as optional v2.1**, not launch scope.
