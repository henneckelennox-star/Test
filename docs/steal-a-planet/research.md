# Research: steal-genre

# "Steal a …" genre research report (Sept 2026)

**Access note:** The Steal a Brainrot Fandom wiki (stealabrainrot.fandom.com) returned HTTP 402 to the fetcher. Sportskeeda, progameguides, lolga and bloxinformer returned 403. So every number below comes from secondary wikis and guides I fetched, or from search-result snippets marked "(snippet)". Guide sites often disagree, and conflicts are noted. Anything marked "unverified" I could not confirm in any source I read.

## 1. Steal a Brainrot (SAB): the genre template

**Meta:** Made by SpyderSammy, owned by DoBig Studios, released 16 May 2025. Peak concurrent players:
- 20M on 23 Aug 2025
- 24M on 13 Sep 2025
- about 25.4M in Oct 2025. Guinness lists 25,868,678 on 11 Oct 2025 (snippet).
- Bruno Mars concert in Jan 2026: 12.8M.

It won Best Creative Direction at the 2025 Roblox Innovation Awards. On 17 Jun 2026 it was only #10 at about 154k CCU, so the genre is still big but has faded (Wikipedia, maxlevelgg).

Criticism Wikipedia cites:
- pay-to-win: the best items need Robux
- auto-collect and auto-steal cheat scripts
- viral clips of crying kids who lost their brainrots

**Server:** 8 players, 8 bases arranged around a central studded red carpet (snippet).

### Core loop
Buy cheap units on the carpet → they walk to your base and earn $/s → buy better units / gear → steal from unlocked bases and defend your own → rebirth (lose units and cash, gain a permanent multiplier, more lock time, more slots, new gear) → repeat with rarer targets.

### Red Carpet (conveyor)
- Units come out of a front tunnel, walk the carpet, and vanish into a back tunnel if nobody buys them. You get about **10–15 s** to react (ofzenandcomputing, unverified).
- Buying: walk up, use the E purchase prompt, and the unit turns and walks to your base.
- **Intercept:** while the unit is walking to the buyer's base, another player can buy it away for **150%** of the price. Each further snipe multiplies by another 1.5x (1.5P → 2.25P), per u7buy and ofzenandcomputing. boundbyflame says it stays a flat 150%, so this is contested.
- **Guaranteed spawns:** a Legendary every **5 min**, a Mythic every **15 min**. A Brainrot God is guaranteed each time the game reaches a like milestone, which is disabled in private servers (steal-a-brainrot.wiki; search snippet).
- **Spawn weights** per unit (ofzenandcomputing, unverified): Common 37–100, Rare 15–30, Epic 1.75–13, Legendary 0.3–1, Mythic 0.055–0.2. Common is about 55% of spawns (snippet).
- Secret, God, OG, Lucky Block and admin spawns trigger a server-wide announcement plus a sound cue.
- Lucky Blocks also spawn on the carpet (snippet): Mythic block **$2.5M** with 37/30/20/10/3% odds; Brainrot God block **$15M**.

### Rarity, price and income tiers (GameRant)

| Rarity | Cost | Income/s | Anchor units |
|---|---|---|---|
| Common | $25–1.7K | $1–14 | Noobini Pizzanini $25 → $1/s; Pipi Corni $1.7K → $14/s |
| Rare | $2K–9.7K | $15–75 | Trippi Troppi $2K → $15/s |
| Epic | $10K–45K | $75–300 | Cappuccino Assassino $10K → $75/s |
| Legendary | $35K–345K | $200–1.8K | |
| Mythic | $300K–3.5M | $1.4K–17K | |
| Brainrot God | $5M–100M | $10K–310K | |
| Secret | $50M–200B | $300K–200M | |
| OG | e.g. Strawberry Elephant $500B | $350M | |

Rule of thumb: **price ≈ 25–30 × income** in the low tiers (about 25 s payback at $1/s, 125 s at $15/s), rising to **about 300 ×** for Gods and Secrets. There are more than 500 units in total.

### Base
- Floors: 1st floor **10 slots**, 2nd floor unlocks at Rebirth 2, 3rd floor at Rebirth 10.
- Sources disagree on the maximum: 10/8/8 = 26 (skibidigames), 10/8/7 = 27 (snippet), or 22 with +1 slot per rebirth (steal-a-brainrot.wiki).
- Slots fill front→back, left→right, lowest floor first, so the first slots are the most exposed.
- Sell a unit for **50%** of its price (snippet).
- Offline income is about **3%**, capped at **5 h** (snippet, Fandom Offline Cash).
- Base skins (Gold, Diamond, Rainbow, Cursed, Taco) give **+0.5x**. You unlock one by completing that mutation's Index.

### Lock and shield
- Step on the **yellow circle** in your base. It gives **60 s**, plus **10 s per rebirth**, plus **10 s with VIP**.
- **30 s** automatic lock when you join.
- While locked, red lasers seal the entrance and your units cannot be stolen. When the timer ends you must re-lock by hand; it does not re-lock itself.
- Friends pass the lasers. The Friend Controller lets trusted players through without triggering alerts.

### Stealing rules
- Walk into an unlocked base and grab a unit through its prompt. Hold time is unverified; the reference open-source clone uses a 6 s hold.
- Carrying **slows you, strips or drops all gear, and alerts the owner** with a message and alarm sound.
- **Any hit from any player** makes the thief drop the unit, and it **teleports back** to the owner's base.
- Delivering it to your own base transfers ownership.
- Exact carry speed: unverified. A cheat-script site calls walkspeed 52 the anti-cheat-safe maximum, which suggests the normal speed is well below that.
- Defence gear: Slap line, Trap (freezes 10 s, max 5 placed), Taser, Web Slinger, Medusa's Head, Subspace Mine (max 2), All Seeing Sentry, Attack Doge.
- Gear prices: Slap **$500**, Speed Coil **$750**, Trap **$1K**, Iron Slap $2K (R1), Bee Launcher $10K (R1), Grapple $75K (R3), Taser $100K (R3), Invisibility Cloak $300K (R4), Attack Doge $1B (R16), Flash Teleport $3B. There are 37+ gears, and all survive rebirth (TechWiser, u7buy).

### Mutations (one per unit) and traits (several per unit, multiplied together)
- **Natural mutations:** Gold **1.25x** (about 10%), Diamond **1.5x** (reported 20.4%, doubtful), Rainbow **10x** (about 1%).
- **Event mutations:** Bloodrot 2–2.5x, Candy 4x, Lava 6x, Galaxy 7x, Yin Yang 7.5x, Radioactive 8.5x, Cursed 9x, Divine 10x, Disco/Cyber 11x, Phantom 12x, Crystal 13x.
- **Traits** come from weather, admin events, rituals and machines, not from the carpet:
  - Rain 2.5x, Snow 3x, Starfall 3.5x, Taco 3x, Asteroid 4x, Crab Rave 5x, Nyan/Firework 6x, Strawberry/Spider 8x.
  - Trait Machine: $25M per roll.
- Visuals are simple recolours: gold/yellow, cyan, neon green, RGB-cycling rainbow, neon orange for lava, neon purple for galaxy.

### Rebirth
Rebirth removes all units, your cash and your base contents. You keep gear and the permanent multipliers. Costs dropped over updates, so the wiki shows ranges (steal-a-brainrot.wiki / Beebom):

| R | Cash | Required units | Mult | Unlocks |
|---|---|---|---|---|
| 1 | $500K–1M | Trippi Troppi + Tung Tung/Gangster Footera | 0.5x or 1x (conflict) | Iron Slap, Gravity Coil, Bee Launcher |
| 2 | $1.5–3M | Brr Brr Patapim + Boneca Ambalabu | 1–2x, +1 slot, floor 2 | Gold Slap, Coil Combo |
| 3 | $12.5M | 2 units | | Taser, Grapple |
| 4 | $35M | 2 units | | Invisibility Cloak |
| 5 | $100M | 2 units | | Medusa |
| 6 | $350M | 1 unit | | |
| 7 | $1B | 1 unit | | |
| 8 | $5B | 1 unit | | |
| 9 | $12.5–25B | 1 unit | | |
| 10 | $125–250B | 1 unit | floor 3 | |
| 11 | $800B–1T | 1 unit | | |
| 17 | $2.5Qa | 1 unit | x17 | |

Every rebirth also adds +10 s of lock time and a cash kick-start ($5K at R1 up to $50T at R17). Scaling is roughly **×3–5 per level**.

### Other systems
- Index collection bonuses
- Fuse Machine
- Multiplayer rituals, e.g. 3 players standing in a triangle
- Lucky Blocks
- Los Traders (Update 57): trade specific units plus cash for 6 rotating Secrets, restocking about every 30 min
- Trade Plaza (Update 53, 13 Jun 2026): barter only, with no currency by design, both players press Confirm, and event units cannot be traded

### Monetisation (snippet; prices vary by source)
- VIP 499 R$ (+0.5x cash, +10 s lock, chat tag)
- 2x Money about 299 R$
- Server Luck: 2x for 15 min 249 R$, 4x for 30 min 999 R$, 8x for 45 min 2,999 R$
- Admin Panel 9,999 R$
- Secret Lucky Block 2,399 R$
- Flying Carpet 375 R$, Blackhole Slap 199 R$

### Events
- **Weekly Admin Abuse**, Saturday about 3 PM ET, 30–45 min, right after the weekly update. It brings exclusive spawns, global luck (25x or more), and weathers such as Taco rain, UFO, Crab Rave and Sammy Snap.
- **Taco Tuesday**, 2 PM PT, 3x chance of Taco traits.
- **Weather** events add traits to units already placed in bases.
- Missing an event means missing its rewards, which is what makes people log in.

## 2. First 5 minutes in SAB (reconstructed; details marked unverified)
1. **0:00** You spawn in one of the 8 bases with **$100**. The **30 s join lock** is on, so the lasers are red.
2. **0:10** Walk to the red carpet a few seconds away. Units walk past with signs over their heads showing name, rarity colour, $/s and price.
3. **0:20** Buy **Noobini Pizzanini ($25, $1/s)** with the purchase prompt. It walks to your front slot and starts earning. Buy 1–2 more cheap Commons with the rest. How much cash you get back is unverified.
4. **0:40** A thief can snipe the unit on its way to your base for 150%. Early on this teaches you that other players are a threat.
5. **~1:00** Cash builds up per slot. You collect it by stepping on a pad or button in front of the slot (unverified, recalled from gameplay, not seen in any source). Your join lock runs out, so you **step on the yellow circle to lock for 60 s**.
6. **1–3 min** Loop: collect → buy a better unit. Payback is about 25 s per Common, so income ramps fast. Sell weaker units at 50% when all 10 slots are full.
7. **~2–4 min** Buy the **Slap ($500)**. Then the Speed Coil ($750) or a Trap ($1K).
8. **3–5 min** You see a Legendary or Mythic announcement, or a big unit in an unlocked base. You try your first steal: grab it, get slowed, the owner is alerted, and one slap sends it home. Or you get robbed and learn to re-lock. The first rebirth ($500K–1M plus two named Rares) becomes the next goal, which takes much longer than 5 minutes.

## 3. Other genre titles
- **Steal a Fish:** fish come out of a tunnel and swim down a river, and you press E to buy one. The base has a **forcefield button (about 60 s)**, and you defend with a slap glove in the style of Slap Battles. **Rebirth only takes the required cash and fish, so you keep your base.** It has 8 levels:
  - R1: $500 + Turtle → 1.1x money, +10 s forcefield, +5 min offline, Flintlock
  - R3: $25K → +1 floor
  - R5: $15M → +2 slots, Freeze Gun
  - R8: $250B → Invisible Cape
  - Walk speed +5% on several levels, offline time rising to +2 h, and 1.1x money on alternating levels.
- **Steal An Egg:** creator group "and Collect Rare Pets", place 107778070777162. Instead of a conveyor, you **steal eggs from NPC-guarded nests**: a chicken guards the Forest, a swan guards the Lake. You sprint home, hatch the egg into a pet that earns $/s, and fuse **3 identical pets → 1 of higher rarity**. Speed is the main stat:
  - you train it on a treadmill, which unlocks for $1K
  - Like + favourite + join group gives 10,000 free speed
  - biome speed gates: Lake about 900, Desert 10K, Jungle 40K, Snow 170K, Volcano 700K, Abyss 2.5M, Prehistoric 17M, then Cosmic and Cherry Blossom
  - rare eggs run on a 5-minute cycle
  - other players can steal eggs you carry or have hatched
  - there are pet sizes and mutations
  - one search snippet called it the #1 game at about 1.44M CCU (unverified)
- **Steal a Pet / Steal a Labubu:** thinner reskins with the same buy/steal/slap loop. Steal a Pet has a 3-to-1 fuse; Steal a Labubu has offline cash. **Grow a Garden 2** (#2 at 508K CCU in Jun 2026) also added crop stealing.

## 4. Why it is addictive, and what players complain about
**Hooks:**
- Payback on a unit takes seconds, so progress is felt immediately.
- Every server is 8 people who can see each other's bases, so showing off and revenge happen constantly.
- The owner-alert alarm turns each steal into a short chase.
- Server-wide announcements for rare spawns trigger a stampede to the carpet.
- Guaranteed 5/15-minute spawns give you a reason to stay.
- Weekly scheduled live events cause FOMO.
- Collection is deep: Index, mutations and traits that multiply together.
- Rebirth is a clear long-term goal.

On the platform side, Roblox's algorithm rewards days played per week and D7 retention, and it favours short, frequent sessions (freesystems substack, DevForum "slop" thread). The DevForum thread also says strong VFX/SFX and very readable feedback matter for ads and retention.

**Complaints:**
- Pay-to-win Robux gear, luck boosts and lucky blocks
- Exploiters with instant steal, auto-lock and ESP scripts
- Losing hours of progress to a thief while AFK or on the carpet
- Rarity walls and extreme OG odds
- Rewards locked to live events you have to attend
- Too few lock seconds early on

## 5. Takeaways for "Steal a Planet"
- Early price ≈ 25x income; 10 starting slots; 60 s lock (+10 s per rebirth); 30 s join lock; 150% intercept; 50% sell-back; 3% offline capped at 5 h.
- Guaranteed Legendary every 5 min and Mythic every 15 min; server-wide announcements; one mutation plus several traits multiplying together; any hit returns the carried unit.
- Rebirth costs about ×3–5 per level, needs named units, and gives +1 slot and new gear.
- The KallumS "Steal a Rotting Brain" repo is an open-source Rojo reference to check before building. Its values: 6 s steal hold, lock 30 s + 6 s per rebirth with a 60 s cooldown, rebirth $1M × 4ⁿ for +25% each, Gold 3x, Rainbow 8x. It has a server-authoritative DataStore and 12 services.

## Sources
- https://en.wikipedia.org/wiki/Steal_a_Brainrot
- https://www.u7buy.com/blog/steal-a-brainrot-game-mechanics/
- https://www.u7buy.com/blog/how-to-play-steal-a-brainrot-beginner-guide/
- https://www.u7buy.com/blog/steal-a-brainrot-base-guide/
- https://steal-a-brainrot.wiki/
- https://steal-a-brainrot.wiki/rebirth-system/
- https://steal-a-brainrot.wiki/mutations/
- https://beebom.com/steal-a-brainrot-rebirth-guide-levels-and-rewards/
- https://beebom.com/steal-a-brainrot-admin-events-guide/
- https://beebom.com/steal-a-fish-rebirth-guide/
- https://gamerant.com/roblox-steal-a-brainrot-all-brainrots-list/
- https://techwiser.com/all-items-in-steal-a-brainrot-roblox/
- https://www.ofzenandcomputing.com/steal-a-brainrot-red-carpet-guide/
- https://boundbyflame.com/steal-a-brainrot-red-carpet-guide/
- https://skibidigames.com/roblox-steal-a-brainrot/bases/
- https://rblxguide.com/games/steal-a-brainrot/updates/steal-a-brainrot-mutations-guide-may-2026
- https://rblxguide.com/games/steal-a-brainrot/updates/steal-a-brainrot-best-base-layouts-2026 (low quality; its numbers were ignored)
- https://www.mumuplayer.com/blog/roblox-steal-a-brainrot-beginner-guide.html
- https://vgtimes.com/guides/166496-steal-a-brainrot-beginners-guide-tips-and-basics.html
- https://games.gg/roblox/guides/steal-a-brainrot-ultimate-beginners-guide/
- https://mitchcactus.co/blog/steal-a-brainrot/steal-a-brainrot-secret-spawn-chance/
- https://allthings.how/steal-a-brainrot-trading-plaza-and-update-53-trading-changes-explained/
- https://www.pocketgamer.biz/robloxs-peak-concurrent-user-count-hits-record-474m-as-steal-a-brainrot-and-grow-a-garden-compete/
- https://www.maxlevelgg.com/news/ten-most-popular-roblox-games-in-twenty-twenty-six-based-on-concurrent-players/
- https://freesystems.substack.com/p/the-algorithm-behind-steal-a-brainrot
- https://devforum.roblox.com/t/how-do-slop-games-do-so-well/4510868
- https://devforum.roblox.com/t/how-to-make-roblox-%E2%80%9Csteal-a-brainrot%E2%80%9D-game-tutorial-series/4137672
- https://github.com/KallumS/Steal-a-Rotting-Brain/pull/1
- https://fandomwire.com/roblox-steal-a-fish-tips-and-tricks-for-new-players/
- https://games.gg/roblox/guides/steal-an-egg-beginner-guide/
- https://www.mmoexp.com/News/roblox-steal-an-egg-guide-best-eggs-pets-speed-biomes-and-beginner-tips.html
- https://www.ldplayer.net/blog/roblox-steal-an-egg-beginner-guide.html
- https://steal-an-egg.github.io/guide/
- https://www.roblox.com/games/107778070777162/Steal-An-Egg

---

# Research: top-ux

# Top Roblox UX and retention patterns, 2025–2026 (for "Steal a Planet")

## 0. Numbers that set the targets
- **Steal a Brainrot (SAB):** released May 16, 2025 by SpyderSammy, owned by DoBig Studios. Peak concurrent users were 20M in Aug 2025, 24M on Sep 13, 2025 and 25.4M in Oct 2025. It was the first game over 25M.
- **Grow a Garden (GAG):** 35.3B visits and 10.9M favorites as of May 2026. It reached 1B visits in 33 days and peaked at 22.3M on Aug 23, 2025.
- **"Admin war" on Aug 23, 2025:** Roblox as a whole hit 47.4M concurrent users. On a normal day each game had about 1M. So a scheduled event gave roughly a 20x spike.
- **GameAnalytics 2026 benchmarks (500+ games):**
  - Day-1 retention: median 10.3%, top 1% 22.2%.
  - Day-7: median 1.6%, top 1% 9.1%. Day-30: median 0.5%, top 1% 4.7%.
  - Median session is 9.8 min. Median player has 1.56 sessions a day; the top 1% of games get 8.3.
  - 3.8% of players pay.
  - Platforms: 44% use several devices, 40.8% PC only, 11.6% mobile only.
  - Takeaway: build for many short sessions, with timers that come due every 5–15 min.

## 1. HUD layout conventions
- **Left edge: a vertical column of square icon buttons.** This is the near-universal menu.
  - SAB puts Shop, Index and a separate codes/gift button on the left. Codes used to sit at the bottom of the Shop.
  - PS99 puts its "Free Rewards" present icon on the left.
  - Blox Fruits puts menu, stats and items on the left.
  - 99 Nights puts its Classes button on the left.
- **Top center: navigation and event info.**
  - GAG has free teleport buttons there (Seeds, Sell, Garden) that work without limit.
  - Dress to Impress shows the theme banner with the round timer just below it.
- **Currency:** GAG shows Sheckles in the bottom-left corner and mirrors them in the Roblox leaderboard at top right. SAB's exact currency position: unverified.
- **Bottom center:** the Roblox backpack hotbar. GAG seeds go here; in Fisch the rod is key 1 and the equipment bag key 2.
- **Mobile rules:**
  - The thumbstick sits bottom-left and the jump button bottom-right. Keep important UI out of both zones.
  - Put custom action buttons next to the jump button.
  - Button size: 70×70 px when the screen's shorter side is 500 px or less, otherwise 120×120. The position formula is `UDim2.new(1, -(js*1.5-10), 1, -js-20)` on small screens, where js is the jump button size.
  - A button 40% down from the top is reachable on a phone but hard to reach on a tablet.
  - The top bar inset is now 58 px (it used to be 36). Set `ScreenGui.ScreenInsets` to CoreUISafeInsets.
  - Size with Scale, add a `UIAspectRatioConstraint`, and use `UICorner` scale values (for example 0.2).
  - Design for phones first in the Device Emulator.
  - Detect touch with the last input type rather than `TouchEnabled`, which is also true on touchscreen PCs.
- **Top-bar icons:** TopbarPlus v3 (github.com/1ForeverHD/TopbarPlus) handles PC, mobile and console.

## 2. Button style recipe (chunky cartoon)
- **Pet Simulator-style button (DevForum):**
  - Build it from two frames rather than relying on UIStroke.
  - The outer frame is the darker base. The inner face is Size (0.9,0,0.9,0) with AnchorPoint (0.5,0.5).
  - Position the face at (0.5,0,0.45,0) so a lip of the base shows below it.
  - On press, tween the outer frame. The face drops and shrinks with it.
- **UIStroke:**
  - Tweenable properties are Color, Thickness and Transparency.
  - `StrokeSizingMode` now exists, so strokes can scale with screen size.
  - Use `ApplyStrokeMode` Contextual for outlined text and Border for frames.
- **Motion:**
  - For a springy pop, use spr (github.com/Fraktality/spr): `spr.target(btn, 0.6, 4, {Size=...})`, which overshoots.
  - For calm motion use damping 1.0 at 1–2 Hz.
  - With TweenService, use Back/Out for opening windows. Bounce and Elastic are the other overshoot styles.
- **Fonts:**
  - Fredoka One is everywhere and is seen as "generic simulator."
  - Luckiest Guy is the other common choice.
  - The "simulator logo" look is Burbank Big Condensed, which is not a built-in Roblox font.
- **Rarity colors (SAB wiki, from a search snippet):**

  | Rarity | Color |
  |---|---|
  | Common | #089F42 |
  | Rare | #00AFFF |
  | Epic | #AA00FF |
  | Legendary | #FFEA00 |
  | Mythic | #FF5050 |
  | Brainrot God | rainbow gradient |
  | Secret | black gradient |

## 3. Reward "juice", with concrete parameters
- **Coins flying to the counter (DevForum):**
  - Clone the coin images.
  - Stage 1: 0.7 s, Quad Out, move to random offsets (`math.random(300,700)/1000`) while growing from 40 to 60 px.
  - Wait 0.25 s.
  - Stage 2: 0.8 s, Quad In, fly to the counter and shrink to 50 px, then Destroy.
  - Run each coin in `task.spawn`. A Bezier-curve version with about 50 coins is also shown.
- **Counter ticking up:**
  - Listen with `GetPropertyChangedSignal("Value")` and compute the change as new minus old.
  - Show a "+$X" pop-up and tween a NumberValue so the counter counts up.
  - Number abbreviation (K/M/B/T and beyond) is mandatory: SAB prices run from $25 to $1T.
- **Camera shake (Sleitnick/RbxCameraShaker presets):**

  | Preset | Magnitude | Roughness | Fade in | Fade out | Position influence | Rotation influence | Use it for |
  |---|---|---|---|---|---|---|---|
  | Bump | 2.5 | 4 | 0.1 | 0.75 | 0.15 | (1,1,1) | purchases, a successful steal |
  | Explosion | 5 | 10 | 0 | 1.5 | 0.25 | (4,1,1) | rare drops, a shield breaking |

- **Confetti:** the UIEmitter v2 module (Creator Store asset 136446687840036). Call `:Emit(amount, config, parent)`; it takes ranges such as `Size={8,24}` and supports gravity and drag.
- **Built-in celebrations and world effects:**
  - GAG fires fireworks when an egg hatches.
  - SAB events change the whole world: during Lava the sky turns red for 15 min, and during Nyan Cat the map goes dark.
  - Roblox's own onboarding guide says to end onboarding with a celebratory reward and animation.

## 4. Notifications and announcements
- **In game:**
  - GAG developers post global chat announcements about incoming weather and restocks.
  - SAB and GAG announce events on Discord (SAB uses a "bombardiro-news" channel).
  - Exact toast layout: unverified. The usual pattern is a stacked banner at top center tinted in the rarity color.
- **Off-platform, Experience Notifications:**
  - Limit is 1 per user per day per experience, 99 characters.
  - `ExperienceNotificationService:PromptOptIn()` does not show for users under 13, for users already opted in, or for anyone who saw it in the last 30 days.
  - Messages must be personalized, for example "Your {egg} hatched!"
- **Experience Events:**
  - Up to 10 upcoming events at once.
  - An event reaches Trending Events once it has at least 1,000 RSVPs, started within the last 7 days and is public.
  - `SocialService:PromptRsvpToEventAsync(eventId)` asks players to RSVP in game.
  - Update announcements are limited to 60 characters, once every 3 days.

## 5. Shops, restocks and limited stock
- **GAG seed shop:**
  - Restocks every 5 min on one global clock.
  - Sold-out items show a red "NO STOCK" button but can still be bought with Robux.
  - An instant restock costs 39 Robux.
  - Holding the buy button buys the whole stock.
  - Carrot, Strawberry, Blueberry and Tomato are always in stock.
- **Keeping every server in sync (DevForum):**
  - Compute `os.time() % 300` for the time left in the cycle. Every server then flips at the same moment with no cross-server messaging.
  - Seed the stock roll from the cycle index so all servers show the same stock.
  - Save each player's purchases keyed to the cycle's timestamp (with `UpdateAsync`) so rejoining does not reset stock.
- **SAB conveyor ("red carpet"):**
  - The first unit, Noobini Pizzanini, costs $25 and earns $1/s, so it pays for itself in 25 s.
  - Rare starts at $2K for $15/s (133 s payback). Mythic runs about $350K for $1.9K/s (about 184 s).
  - So payback climbs slowly, from 25 s to about 3 min per tier.
  - A Mythic appears on the conveyor every 15 min (search snippet).
  - Taking over a unit that is already heading down the carpet costs 150% of its price.
  - Codes spawn a specific brainrot on your server's carpet.
  - The "Los Traders" machine restocks about every 30 min.
- **Robux in the first minute:** an analysis found that SAB greets new players with a spin wheel whose free spin is 1h27m away, next to buy and luck-boost prompts.

## 6. Global events that pull players online together
- **GAG weather:**
  - Rain comes about every 20 min; Thunderstorm every 2–6 h. Weather usually lasts 3–5 min.
  - Each weather adds a mutation (Wet, Shocked). Mutation multipliers range from 2x to 150x.
- **GAG admin abuse:**
  - Saturdays, about 1 h before the weekly update, lasting 30–90 min, public servers only.
  - Plus "Watering Wednesday".
  - Developers restock shops by hand during the event.
- **SAB scheduled events:**
  - Taco Tuesday at 6 PM ET (Beebom says 2 PM PT, a conflict) and Saturday at 3 PM ET.
  - Each runs 30–45 min on all servers at once.
- **SAB traits and multipliers:**
  - Weather traits: Rain 2.5x, Snow 3x, Starfall 3.5x.
  - Admin-event traits: Lava 6x (lasts 15 min), Rainbow 10x, Taco 3x.
- **SAB weather timing (search snippet):** every 3 h on weekdays and hourly on weekends, 15 min each, with one free spin per event.
- **Update rhythm:** GAG shipped major updates every 2–3 weeks. Both games tie their events to a weekly Saturday update.

## 7. Retention systems by game
- **Daily rewards and quests:**
  - Adopt Me pays 25/50/100/200/300 Bucks on a repeating 5-day streak, claimable every 15 h.
  - Adopt Me also gives 1 Star per day, spent on items that include a 24 h Streak Saver. The developers restored streaks lost during a Roblox outage.
  - GAG gives 3 daily quests that award a Seed Pack. This later became a Season Pass with 6 quests a day.
  - 99 Nights has 3 daily quests (easy, moderate, hard) at 5 diamonds each. Its 35+ badges add up to 100+ diamonds.
- **Playtime gifts:**
  - PS99 has 12 gifts: at 5, 10, 15 and 20 min; 30, 40, 50 and 60 min; 1:15 and 1:30; then 2 h and 3 h.
  - Each gift shows a countdown until it turns into "Redeem!".
  - SAB timed gifts go up to 10K cash after 1 h, with an hourly free spin and a watch-an-ad extra spin (search snippet).
- **Collection book (Index):**
  - In SAB, units you don't own show as black silhouettes.
  - Normal, Gold, Diamond and Rainbow each need 75% (381 of 508). Each completed book gives +0.5x base multiplier, up to +2.0x in total.
  - Completion also unlocks base skins, about 26 in all.
  - Event-mutation books need 50–100%.
- **Codes:**
  - Case-sensitive and often expire within hours.
  - Tying new codes to like goals (for example "8000 likes") is common; only one source confirmed it.
- **Group join:** `GroupService:PromptJoinAsync(groupId)` returns a `GroupMembershipStatus` (Joined, AlreadyMember, JoinRequestPending, and so on). Call it on the client inside pcall. Specific group rewards in these games: unverified.
- **Favorite prompt:** `AvatarEditorService:PromptSetFavorite(game.PlaceId, Enum.AvatarItemType.Asset, true)` works according to DevForum. It shows even if the player already favorited.
- **Friends:**
  - GAG adds +10% sell value per Roblox friend in the server, up to +70% with 7 friends, applied as the last multiplier.
  - SAB has a friend boost too; the exact amount is unverified (about 10%).
  - Invites use `SocialService:PromptGameInvite(player, ExperienceInviteOptions)` with PromptMessage, InviteUser, InviteMessageId and LaunchData (up to 200 characters).
  - Read the invite on arrival with `Player:GetJoinData()`, retrying after a delay, to pay a referral reward.
- **Free private servers:** GAG makes private servers free (search snippet, unverified); most games charge.
- **Offline income:**
  - GAG plants keep growing while you are offline.
  - SAB offline cash stops accruing 5 h after you leave. The rate is disputed (3% vs 50%): unverified.
- **Rewarded video ads:**
  - Requirements: publisher 13+, ID-verified, 2-step verification on, and at least 2,000 unique visitors a month.
  - The reward must be a developer product worth the equivalent of 3–10 Robux, and it cannot be random.
  - APIs: `GetAdAvailabilityNowAsync`, `CreateAdRewardFromDevProductId`, `ShowRewardedVideoAdAsync`.
- **Leaderboards:**
  - GAG shows Sheckles in the Roblox leaderboard (player list) at top right.
  - Physical leaderboards in the world built on OrderedDataStore are common; per-game details unverified.

## 8. The first 60 seconds and first session
- **GAG:**
  - New players are pointed at the seed shop.
  - They start with 20 Sheckles, which buys 2 carrots, and the first crop grows fast.
  - Then harvest, sell, and use the top teleport buttons.
  - GEEIQ describes it as "no tutorials. No onboarding. No friction."
- **SAB:**
  - You spawn in your own base next to the central carpet.
  - Buying the $25 unit gives $1/s at once, so you earn it back in 25 s.
  - Stealing is visible right away.
  - Lock Base: one source says 60 s plus 10 s per rebirth and 10 s more with VIP; the wiki snippet says it starts at 30 s. This conflicts.
- **99 Nights:** a lobby with a matchmaking box where you pick team size 1–5. Difficulty is fixed by the party size at start, the campfire is the safe zone, and days 1–4 are the critical part.
- **Dress to Impress:** a dressing room walks new players through stations in a fixed order. Rounds are 360 s with the theme banner and timer at top, then 1–5 star voting and a top-3 podium.
- **Dead Rails:** a lobby town, a train platform where you make a party with a code, and Bonds as a currency that carries over between runs.
- **Roblox onboarding guidance:**
  - Teach what the core loop is and why it matters.
  - Keep early thresholds low and hand out starter currency.
  - Show short, mid and long-term goals where players can see them.
  - End onboarding with a celebration.
  - Instrument it with `AnalyticsService:LogOnboardingFunnelStepEvent(player, step, name)`. Log only from the server and in the published game; the dashboard shows up to 10 funnels.

## 9. What this means for Steal a Planet
1. **First purchase:** make the first planet affordable immediately and pay back in about 25 s. Keep payback rising slowly toward about 3 min per tier.
2. **Guaranteed rare spawn:** force a Mythic onto the conveyor every 15 min, with a countdown shown in the top-center banner.
3. **Global restock:** use a shop synced with `os.time() % 300` so every server restocks on the same 5-min clock. Add a "NO STOCK" state and keep a few staple items always in stock.
4. **Events:** run a weather event about every 20 min for 3–5 min, each adding a mutation (for example a Meteor Shower). Add a weekly scheduled event registered as an Experience Event.
5. **Screen layout:** a left column for Shop, Index, Rewards, Codes and Rebirth. Top center for event and restock timers. Currency bottom-left and in the Roblox leaderboard. Keep the jump zone clear on mobile.
6. **Collection book:** silhouettes until owned, and +0.5x income per completed mutation book.
7. **Session rewards:** PS99-style 12-step playtime gifts, a 5-day login streak with a streak saver, and 3 daily quests.
8. **Friends:** +10% income per friend in the server, up to +70%. Buttons that call the invite prompt, group join and favorite prompt APIs.
9. **Juice on every purchase or steal:** Bump camera shake, coins flying to the counter, a +$ pop-up and confetti, with a spr pop (0.6, 4) on every button.

## Sources
**Pages fetched and read:**
- https://en.wikipedia.org/wiki/Steal_a_Brainrot
- https://en.wikipedia.org/wiki/Grow_a_Garden
- https://www.tubefilter.com/2025/08/25/roblox-grow-garden-steal-brainrot-admin-war-record/
- https://gamedevreports.substack.com/p/gameanalytics-key-roblox-and-roblox
- https://create.roblox.com/docs/ui/animation
- https://create.roblox.com/docs/production/game-design/onboarding
- https://create.roblox.com/docs/production/analytics/funnel-events
- https://create.roblox.com/docs/production/promotion/experience-events
- https://create.roblox.com/docs/production/promotion/experience-notifications
- https://create.roblox.com/docs/production/promotion/invite-prompts
- https://create.roblox.com/docs/production/promotion/rewarded-video-ads
- https://create.roblox.com/docs/reference/engine/classes/GroupService
- https://create.roblox.com/docs/reference/engine/classes/AvatarEditorService
- https://create.roblox.com/docs/reference/engine/classes/SocialService
- https://create.roblox.com/docs/reference/engine/classes/UIStroke
- https://devforum.roblox.com/t/designing-ui-tips-and-best-practices/3074034
- https://devforum.roblox.com/t/the-correct-way-to-design-mobile-buttons/2494558
- https://devforum.roblox.com/t/make-buttons-like-pet-simulator/3984742
- https://devforum.roblox.com/t/how-to-make-this-coin-ui-animation/1812608
- https://devforum.roblox.com/t/coin-ui-bezier-animation/1473115
- https://devforum.roblox.com/t/what-is-the-best-way-to-make-currency-change-ui/653454
- https://devforum.roblox.com/t/advanced-currency-system-ui-anims-more/4841915
- https://devforum.roblox.com/t/uiemitter-module-ui-particles-confetti/2913477
- https://devforum.roblox.com/t/how-to-make-stock-system-like-grow-a-garden/3667791
- https://devforum.roblox.com/t/where-can-i-find-this-simulator-font/650336
- https://github.com/Fraktality/spr/blob/master/README.md
- https://raw.githubusercontent.com/Sleitnick/RbxCameraShaker/master/src/CameraShaker/CameraShakePresets.lua
- https://mygagcalculator.com/grow-a-garden-admin-events-schedule/
- https://www.slythergames.com/2025/05/21/grow-a-garden-beginners-guide/
- https://geeiq.com/grow-a-garden/
- https://www.eldorado.gg/blog/steal-a-brainrot-admin-abuse-schedule-explained/
- https://www.eldorado.gg/blog/all-brainrots-in-steal-a-brainrot/
- https://www.u7buy.com/blog/steal-a-brainrot-game-mechanics/
- https://www.u7buy.com/blog/steal-a-brainrot-index-system-guide/
- https://beebom.com/steal-a-brainrot-admin-events-guide/
- https://freesystems.substack.com/p/the-algorithm-behind-steal-a-brainrot
- https://howtofisch.wiki/guides/fishing/
- https://www.playadopt.me/news/halloween-event-and-log-in-streak-timer-update

**Search snippets only (the page itself was blocked or not fetched):**
- https://pet-simulator.fandom.com/wiki/Free_Rewards_(Pet_Simulator_99)
- https://stealabrainrot.fandom.com/wiki/Rarities
- https://stealabrainrot.fandom.com/wiki/Index
- https://stealabrainrot.fandom.com/wiki/Offline_Cash
- https://growagarden.fandom.com/wiki/Weather
- https://growagarden.fandom.com/wiki/Seed_Shop
- https://mygagcalculator.com/grow-a-garden-2-friend-boost/
- https://adoptme.fandom.com/wiki/Daily_Reward
- https://devforum.roblox.com/t/is-there-any-way-to-prompt-a-player-to-favorite-the-game/2717433
- https://github.com/1ForeverHD/TopbarPlus
- https://progameguides.com/roblox/roblox-grow-a-garden-vip-private-server-links/
- https://99-nights-in-the-forest.fandom.com/wiki/Diamonds
- https://pixeltwelve.com/articles/dress-to-impress-beginner-guide
- https://deadrails.fandom.com/wiki/Lobby
- https://www.pcgamesn.com/steal-a-brainrot/codes

---

# Research: open-source

# Open-source Roblox (Luau) libraries for "Steal a Planet": what to reuse, 2025–2026

## TL;DR: recommended minimal stack
| Need | Use | Install without Wally/Rojo |
|---|---|---|
| Player data | **ProfileStore** (loleris), Apache-2.0 | One file: `https://raw.githubusercontent.com/MadStudioRoblox/ProfileStore/main/ProfileStore.luau` (64.6 KB, **no `require` dependencies**, checked). Paste it into a ModuleScript in ServerScriptService. Creator Store asset 109379033046155 also works. |
| Server→client state | **Player Attributes / leaderstats** (built into Roblox). Optionally **Replica** (loleris), Apache-2.0 | Replica is several files, so use Creator Store asset 84146677869807. |
| Networking | **Plain RemoteEvents** in one `Remotes` folder, with server-side validation and a per-player rate limit. Optionally **Packet** (5uphi). | Packet: Creator Store asset 104116977416770 |
| Animation | **spr** (Fraktality), MIT | One file: `https://raw.githubusercontent.com/Fraktality/spr/master/spr.lua` (21 KB, no dependencies) |
| Cleanup | **Trove** 1.8.0 (Sleitnick RbxUtil), MIT | `https://raw.githubusercontent.com/Sleitnick/RbxUtil/main/modules/trove/init.luau` (no requires) |
| Signals | **Signal** 2.0.3 (Sleitnick) or **GoodSignal** (stravant), MIT | `.../RbxUtil/main/modules/signal/init.luau` or `https://raw.githubusercontent.com/stravant/goodsignal/master/src/init.lua` |
| Debug/admin | **Cmdr** v1.13.0, MIT | `Cmdr.rbxm` from GitHub releases |
| Number format | A self-written suffix function (~15 lines) | none |
| UI | Plain Instances built in code, plus spr for motion. No framework. | none |

**How to install from source:** fetch the raw GitHub file, create a ModuleScript and set its `.Source`. This avoids Creator Store sandboxing (see the Security section) and gives you exactly the published code.

---

## 1. Player data
- **ProfileStore** (https://github.com/MadStudioRoblox/ProfileStore). Apache-2.0, about 337 stars. The GitHub page has **no releases**; the current source is on `main`. Released on the DevForum on Oct 11, 2024.
  - Used by Grow a Garden and Dead Rails, according to the DevForum post.
  - API: `ProfileStore.New(name, template)`, `:StartSessionAsync(key, {Cancel=...})`, `Profile.Data`, `:Reconcile()`, `:EndSession()`, `Profile.OnSessionEnd`, `:MessageAsync()`. There are also the signals `OnSave`, `OnLastSave` and `OnAfterSave`, plus `Profile.LastSavedData`.
  - Constants in the source (checked):

    | Constant | Value |
    |---|---|
    | `AUTO_SAVE_PERIOD` | 300 s (ProfileService used 30 s, so about 10x fewer DataStore calls) |
    | `SESSION_STEAL` | 40 s |
    | `ASSUME_DEAD` | 630 s |
    | `START_SESSION_TIMEOUT` | 120 s |
    | `LOAD_REPEAT_PERIOD` | 10 s |
    | `CRITICAL_STATE_ERROR_COUNT` | 5 |
    | `MAX_MESSAGE_QUEUE` | 1000 |

  - It uses MessagingService to resolve session conflicts faster. It can read ProfileService data, but ProfileService cannot reliably read ProfileStore data after `MessageAsync` has been used.
- **ProfileService** (https://github.com/MadStudioRoblox/ProfileService). Apache-2.0. The README says **"FOR NEW PROJECTS - USE ProfileStore"** and "no longer supported". Do not use it for new work.
- **DataStore2** (https://github.com/Kampfkarren/Roblox). Last commit is **Mar 17, 2023**. It has a custom license: if you ship modified code you must publish your changes, for example as a GitHub fork.
  - It has **no session locking**. DevForum threads name this as the cause of item-duplication exploits.
- **Why ProfileStore is the right choice for this game:** stealing moves an item from one player's data to another's. Session locking prevents duplicates when players hop between servers.
  - Both players are always in the same server during a steal. So change both `Profile.Data` tables in the same server step. You do not need `MessageAsync`.

## 2. Networking
| Library | Status | Notes |
|---|---|---|
| **ByteNet** (ffrostfall), MIT, about 181 stars | Latest **v0.4.3, Mar 10, 2025**, marked pre-release | Buffer-based. Installs as `.rbxm` from releases. Its fork **ByteNet Max** is at v0.2.1 (DevForum). |
| **Packet** (5uphi), permissive ISC-style license | DevForum Mar 26, 2025; latest version stated as **1.7** (not checked against the asset itself) | Batches all events, 16/24-bit floats, built-in DDoS rate limiting, remote functions, unreliable events. Users on page 8 of the thread reported bugs (Apr 2025): buffers breaking after 255 bytes, and drops when the same packet fires twice in one frame. |
| **Zap** (red-blox), MIT | v0.6.x (v0.6.29 was the newest tag listed). A rewrite is in progress. | An IDL compiler that needs a CLI or web tool to generate code, so it is awkward for this workflow. |
| **Blink** (1Axen), MIT | Very active: v0.18.9 and v1.0.0-pre.10 on "Sep 19" (the page showed no year; probably 2026, not confirmed) | IDL compiler. Has a Studio plugin, "Blink Editor" (Creator Store 77231976488966), so it works without Rojo. Community benchmarks rate it the fastest. |
| **BridgeNet2** | README: "I strongly recommend you use ByteNet over BridgeNet2" | Deprecated in practice. |
| **Red** | **Archived Dec 23, 2025** | Avoid. |

**Recommendation:** this genre only sends small event traffic (buy, steal, place, collect, rebirth). Plain RemoteEvents are enough, as long as the server validates everything: distance to the target, ownership, price, cooldowns. A buffer library only saves bandwidth, and bandwidth is not the bottleneck here. If you do want one, use Packet (a single asset, simple API: `Packet("Name", Packet.NumberU32)`).

## 3. UI frameworks
| Library | License, stars | Latest | Install |
|---|---|---|---|
| **Fusion** (dphfox) | MIT, about 797 | **0.3** (tag `v0.3-beta`, Aug 30 2024). No 0.4 or 1.0 yet. Still described as "beta". | rbxm from releases. Docs: elttob.uk/Fusion/latest |
| **React-lua** (jsdotlua) | MIT, about 570 | v17.2.1 | Community fork of Roblox's read-only mirror. Several packages; a roblox-model build exists. Heavy to set up. |
| **Vide** (centau) | MIT, about 332 | **0.4.1 (Jul 11, 2026)**; 0.4.0 was Jan 17, 2026 | Actively maintained. rbxm release, Wally or pesde. |

**Recommendation:** skip the frameworks. An agent writing imperative Luau makes fewer mistakes with plain `Instance.new` and small helper functions. If you want reactive UI anyway, Vide is the most actively maintained option.

## 4. Tweens and springs
- **spr**: MIT, 143 stars. Single file.
  - API: `spr.target(inst, dampingRatio, frequency, {props})` and `spr.stop(inst, prop?)`.
  - Supported types: boolean, CFrame, Color3 (animated in CIELUV colour space), ColorSequence, number, NumberRange, UDim, UDim2, Vector2, Vector3.
  - A damping ratio below 1 overshoots, which gives a "juicy" button pop.
- **TweenPlus** (RoFishy, Oct 12, 2024): Creator Store 119206751672046. Adds string-ID tweens, a queue, and global events. License not stated.
- **Flipper**: MIT, older, built for Roact. Not needed.

## 5. Utilities
| Library | Version | Notes |
|---|---|---|
| **Trove** (RbxUtil) | 1.8.0 | MIT; Sleitnick's RbxUtil repo has about 464 stars. Includes Signal 2.0.3, Timer 2.0.0, TableUtil 1.2.1 and Comm 1.0.1. |
| **Janitor** (howmanysmall) | v1.17.0 (Aug 12, 2024) | MIT. |
| **Promise** (evaera) | v4.0.0 (Mar 3, 2024) | MIT. Source is `lib/init.lua` (58 KB). Optional: task/pcall is enough here. |
| **GoodSignal** | — | MIT. Same behaviour as RBXScriptSignal. |

## 6. TopbarPlus, ZonePlus, Cmdr, number formatting
- **TopbarPlus v3**
  - Latest GitHub release is v3.4.0 on "Sep 17" (year not shown; probably 2025, not confirmed).
  - Official Creator Store asset: **92368439343389** (the older 6311707237 is legacy).
  - License is **MPL-2.0 plus a credit clause**: keep the attribute, or credit TopbarPlus in the game description.
  - API: `Icon.new():setImage(id):setLabel("Shop")`.
- **ZonePlus v3.2.0**: Creator Store 6245329519.
  - The author says updates are "planned to modernize ZonePlus for 2026" and that he is not monitoring the thread in the meantime.
  - A "v4.0.0 by the Superbullet team" appeared only in a search summary; I did not find it on any page, so treat it as unconfirmed.
  - Newer alternatives: QuickZone, RegionManager.
  - **For our game** you can skip it. Use `workspace:GetPartBoundsInBox` on the server, or a distance check, for base entry and the shield laser.
- **Cmdr v1.13.0** (Sep 3, 2024): MIT, 525 stars, `Cmdr.rbxm`. v1.12.0 fixed a critical security issue, so use at least 1.12. Useful for dev commands such as `givecash` or `spawnrarity`, restricted to admins through Cmdr's guards (BeforeRun hooks).
- **Number formatting**
  - **FormatNumber** by Blockzez: v31.1, BSD-2-Clause (per the DevForum; the license file was not found on GitHub), github.com/Blockzez/RobloxFormatNumber.
  - **Eclipse's Abbreviation Module** (Oct 2025): no license stated.
  - Simplest route: your own function with the suffixes `{"K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"}`, trimming trailing zeros (so 12.50K becomes 12.5K).

## 7. Official Roblox templates and UI kits
- The official templates (create.roblox.com/docs/resources/templates) are:
  - Platformer, UGC Homestore, Laser Tag, FPS System, Racing, Baseplate
  - Modern City, Village, Castle, Suburban, Pirate Island, Classic Obby
  - Starting Place, Line Runner, Capture the Flag, Team/FFA Arena, Combat, Concert
  - Move It Simulator, Mansion of Wonder, Flat Terrain, Classic Racing, **Classic Baseplate** (the legacy stud texture, useful for a classic look)
- **There is no official UI kit.** The UI kits on the DevForum are community-made or paid, for example "UI Generator" at $4.99.

## 8. Steal-a-Brainrot, tycoon and conveyor kits: not safe to reuse
- **GitHub searches for "steal a brainrot"** return exploit or cheat script repos (for example robloxcomphub/stealabrainrot and Justwheat7/brainrot-hacks) and SEO spam. **Never run them.**
- **A free "Steal a Brainrot" kit on the Creator Store**, reviewed in the DevForum thread "Is this a scam?" (4145909):
  - It assigns `ProcessReceipt` several times, which breaks purchase handling.
  - The consensus is that it is a "loosely packed together free model". **Reject it.**
- **"Brainrot animals kit" models** carry DMCA risk (stolen assets).
- **TwinPlayzDev's tutorial series** (Dec 9, 2025) is a YouTube playlist. It is unclear whether the kit is available or under what license. Use it for reference only.
- **Tycoon repos on GitHub**:
  - adit-rah/ttt: conveyor, upgraders, rebirth, all built in code, has a paste-in build. 0 stars, no license stated.
  - pogogt12/slime-tycoon-forge: MIT, 0 stars, new.
  - MonzterDev/Roblox-Game-Template: 16 stars, uses the deprecated ProfileService, needs Rojo, Aftman and Wally.

  All are low maturity. Read them for patterns, but do not import them.

## 9. Security: sandboxing and vetting free models
**Sandboxing (announced May 13, 2026).** Everything inserted from the Creator Store is now automatically sandboxed.
- Blocked capabilities: `LoadUnownedAsset` (which covers `require(id)` and `LoadAssetAsync`), `LoadAsset`, `LoadString` and `CapabilityControl`. `getfenv`/`setfenv` are also blocked.
- Error format: "The current thread cannot … (lacking capability X)".
- A sandboxed script can only require modules with the same capabilities or fewer. Staff confirmed this is intentional; big admin kits (Adonis, HD Admin) get exceptions.
- **Fix for trusted libraries you have vetted:** set `Sandboxed = false` on each script, from the command bar:
  ```lua
  for _,v in game:QueryDescendants("ModuleScript") do v.Sandboxed=false end
  ```
  Or set `Workspace.SandboxedInstanceMode = Experimental` and manage the capabilities one by one. Better still, paste the raw GitHub source into new ModuleScripts; scripts you create yourself are not sandboxed.

**Vetting checklist** (run a Luau scan over every `Script`, `LocalScript` and `ModuleScript`):
1. Look for these patterns:
   - `require%s*%(%s*[%d%.%+%*]` (require with a numeric ID or maths on one)
   - `getfenv` and `setfenv`
   - `loadstring`
   - `string.reverse` or `:reverse()`
   - escaped byte sequences such as `\114\101\113` (that one spells "req")
   - `string.char(` sequences
   - `HttpService`, `PostAsync`, `RequestAsync`, `discord.com/api/webhooks`
   - `InsertService`, `LoadAsset`
   - `TeleportService`
   - `MarketplaceService.ProcessReceipt` assigned more than once
2. Look for these signs of obfuscation:
   - `require` assigned to a harmless-looking name (for example `local _cframe,_ = require, CFrame.new(...)`)
   - metatable `__div` or `__index` tricks used to build asset IDs
   - lines longer than 500 characters, or code hidden after long runs of whitespace
3. Look for scripts in odd places: inside Parts, Decals or Meshes, TestService, `Disabled` scripts that get enabled later, and names like "RotateP", "Vaccine", "Infection" or "Anti-Lag".
4. Game settings: HTTP off unless needed, `ServerScriptService.LoadStringEnabled = false`, third-party teleports off.
5. Do not trust "anti-virus" plugins; many contain malware themselves (per the DevForum "Removing Backdoors 101" guide).

## Sources
- https://github.com/MadStudioRoblox/ProfileStore
- https://github.com/MadStudioRoblox/ProfileStore/releases
- https://madstudioroblox.github.io/ProfileStore/
- https://raw.githubusercontent.com/MadStudioRoblox/ProfileStore/main/ProfileStore.luau
- https://devforum.roblox.com/t/profilestore-save-your-player-data-easy-datastore-module/3190543
- https://github.com/MadStudioRoblox/ProfileService
- https://github.com/Kampfkarren/Roblox
- https://github.com/Kampfkarren/Roblox/commits/master
- https://kampfkarren.github.io/Roblox/
- https://devforum.roblox.com/t/should-i-use-profileservice-datastore2-or-datastoreservice/1611913
- https://devforum.roblox.com/t/replica-server-to-client-state-replication-module/3216980
- https://raw.githubusercontent.com/MadStudioRoblox/Replica/main/README.md
- https://raw.githubusercontent.com/MadStudioRoblox/Replica/main/default.project.json
- https://github.com/ffrostfall/ByteNet
- https://github.com/ffrostfall/ByteNet/releases
- https://github.com/ffrostfall/ByteNet/releases/tag/v0.4.3
- https://devforum.roblox.com/t/packet-networking-library/3573907
- https://devforum.roblox.com/t/packet-networking-library/3573907?page=8
- https://devforum.roblox.com/t/best-network-library/3667044
- https://github.com/red-blox/zap
- https://github.com/red-blox/zap/releases
- https://github.com/1Axen/blink
- https://github.com/1Axen/blink/releases
- https://1axen.github.io/blink/getting-started/1-installation
- https://github.com/ffrostflame/BridgeNet2
- https://github.com/red-blox/Red
- https://github.com/dphfox/Fusion
- https://github.com/dphfox/Fusion/releases
- https://github.com/jsdotlua/react-lua
- https://github.com/jsdotlua/react-lua/releases
- https://github.com/centau/vide
- https://github.com/centau/vide/releases
- https://github.com/Fraktality/spr
- https://github.com/Reselim/Flipper
- https://devforum.roblox.com/t/introducing-tweenplus-a-better-way-to-handle-tweens-in-your-game/3192203
- https://github.com/Sleitnick/RbxUtil
- https://github.com/stravant/goodsignal
- https://github.com/evaera/roblox-lua-promise
- https://github.com/evaera/roblox-lua-promise/releases
- https://github.com/howmanysmall/Janitor
- https://github.com/howmanysmall/Janitor/releases
- https://github.com/1ForeverHD/TopbarPlus
- https://github.com/1ForeverHD/TopbarPlus/releases
- https://github.com/1ForeverHD/TopbarPlus/releases/tag/v3.4.0
- https://raw.githubusercontent.com/1ForeverHD/TopbarPlus/main/LICENSE
- https://devforum.roblox.com/t/topbarplus-v340-construct-topbar-icons-with-ease-customise-them-with-themes-dropdowns-captions-labels-and-more/1017485
- https://github.com/1ForeverHD/ZonePlus
- https://devforum.roblox.com/t/zoneplus-v320-construct-dynamic-zones-and-effectively-determine-players-and-parts-within-their-boundaries/1017701
- https://github.com/evaera/Cmdr
- https://github.com/evaera/Cmdr/releases
- https://devforum.roblox.com/t/311-formatnumber-a-module-for-formatting-numbers/527979
- https://devforum.roblox.com/t/eclipse%E2%80%99s-abbreviation-module-%E2%80%93-quick-number-formatting/3985417
- https://create.roblox.com/docs/resources/templates
- https://create.roblox.com/docs/scripting/capabilities
- https://devforum.roblox.com/t/protect-your-games-with-script-capabilities-sandboxing/4634642
- https://devforum.roblox.com/t/the-current-thread-cannot-require-modulescript-lacking-capability-unassigned/4638871
- https://devforum.roblox.com/t/models-inserted-from-toolbox-have-sandboxing-enabled-even-if-sandboxing-is-disabled-in-the-place/4627153
- https://devforum.roblox.com/t/removing-backdoors-101/545574
- https://devforum.roblox.com/t/how-does-backdoors-work-nexus-admin-exploit-works-in-detail/2922935
- https://devforum.roblox.com/t/how-to-make-roblox-%E2%80%9Csteal-a-brainrot%E2%80%9D-game-tutorial-series/4137672
- https://devforum.roblox.com/t/is-there-any-free-brainrot-kits/3869477
- https://devforum.roblox.com/t/is-this-a-scam/4145909
- https://github.com/MonzterDev/Roblox-Game-Template
- https://github.com/adit-rah/ttt
- https://github.com/pogogt12/slime-tycoon-forge

---

# Research: visual-audio

# Visual and audio research for "Steal a Planet" (studs look, space setting, Roblox 2026)

## 1. Lighting (the old `Technology` property is gone)

- **Unified Lighting has been fully live since July 23, 2025.** `Lighting.Technology` is deprecated. Two properties replace it:
  - `LightingStyle`: `Realistic` is the old Future. `Soft` covers both old ShadowMap and Voxel and gives "a flat, retro-Roblox look with softer lights and shadows".
  - `PrioritizeLightingQuality` (bool): `true` keeps shadow and shader quality and cuts draw distance first; `false` does the opposite.
- **Automatic migration of old places:** Future becomes Realistic + true, ShadowMap becomes Soft + true, Voxel becomes Soft + false.
- **Realistic falls back to Soft** below graphics quality level 11, which covers most phones.
- **Compatibility lighting was removed in November 2024.** Its look now comes from `ColorGradingEffect.TonemapperPreset = Retro` (the other option is `Default`). The docs suggest using Retro with light Brightness at most 1.0 for the pre-2019 look.
- **Light range is still capped at 60 studs.**
- **Class defaults (robloxapi):**
  - Brightness 1, ExposureCompensation 0
  - EnvironmentDiffuseScale 0, EnvironmentSpecularScale 0 (range 0–1)
  - Ambient and OutdoorAmbient (128,128,128)
  - ShadowSoftness 0.5 (Realistic only), ClockTime 14, GeographicLatitude 41.73
  - ShadowColor (178,178,184)
  - The values in a new Studio baseplate template differ from these (unverified).
- **What the community recommends:**
  - A DevForum "cartoony style" thread (Jan 2023): Brightness 2.5, ExposureCompensation 0.1, ShadowMap (now Soft), ShadowSoftness 0.05, warmer ColorCorrection with more saturation and contrast.
  - A DevForum "best lighting for a brainrot game" thread (Nov 2025): mostly near-default lighting, "just make it more saturated", "saturated bright lighting". Nobody gave numbers.

**Suggested space/studs preset** (my synthesis, not taken from a specific game):
```lua
local L = game:GetService("Lighting")
L.LightingStyle = Enum.LightingStyle.Soft          -- toy-like, consistent on mobile
L.PrioritizeLightingQuality = true
L.Brightness = 2.5; L.ExposureCompensation = 0.15
L.EnvironmentDiffuseScale = 0.6; L.EnvironmentSpecularScale = 0.4 -- plastic sheen from the sky
L.Ambient = Color3.fromRGB(70,60,110); L.OutdoorAmbient = Color3.fromRGB(120,110,170) -- purple fill
L.ClockTime = 14; L.GlobalShadows = true; L.ShadowSoftness = 0.1
local cc = Instance.new("ColorCorrectionEffect", L)
cc.Saturation = 0.2; cc.Contrast = 0.1; cc.Brightness = 0.02; cc.TintColor = Color3.fromRGB(255,250,245)
local bloom = Instance.new("BloomEffect", L)
bloom.Intensity = 0.6; bloom.Size = 28; bloom.Threshold = 0.9 -- defaults 0.4 / 24 / 0.95
local rays = Instance.new("SunRaysEffect", L); rays.Intensity = 0.08; rays.Spread = 0.6 -- defaults 0.25 / 1
```

**Other post-processing defaults:**
- DepthOfField: FarIntensity 0.75, NearIntensity 0.75, FocusDistance 0.05, InFocusRadius 10. Only use it in menus or cutscenes. It blurs a lobby.
- BlurEffect: common for backgrounds behind open menus (docs use case).
- Effects can live in `Lighting` (everyone) or in the Camera (per player), e.g. a red tint on the victim when stolen from.

## 2. Atmosphere and sky for space

- **Atmosphere class defaults:** Density 0.395, Offset 0, Color (200,170,108), Decay (92,60,14), Glare 0, Haze 0.
  - Glare needs Haze > 0. Decay needs both Haze and Glare > 0.
- **For space:** delete Atmosphere, or set Density ≈ 0.2–0.3, Haze 0, Offset ≈ 0.2, Color a dark violet. This keeps the skybox visible and only fades distant bases slightly (my recommendation, not tested).
- **Sky defaults:** StarCount 3000, SunAngularSize 21, MoonAngularSize 11, CelestialBodiesShown true, SkyboxOrientation (0,0,0).
  - Setting SunAngularSize or MoonAngularSize to 0 hides that body but keeps the stars.
  - `SkyboxOrientation` is cheap on all platforms. You can animate it slowly on the client (e.g. +0.5°/s on Y) for a drifting nebula.
  - The six faces are Bk/Dn/Ft/Lf/Rt/Up and must be seamless at the edges.
- **Nebula skyboxes on Creator Store:**
  - Blue Red Nebula 123232480386985
  - Purple Nebula 79185969624817
  - Purple Nebula Complex 101231340581451
  - Blue Nebula 176459834
  - Purple Nebula 230057997
  - "[FREE!] HD Space Skybox" 1121496997
- **Custom skyboxes:** the DevForum "Ultimate skybox pack" thread points to Blockade Labs (skybox.blockadelabs.com) plus skybox-generator.vercel.app, which slices the image into cube faces.

## 3. Classic studs look

**Native studs still work (verified, DevForum Aug 22 and Feb 22, 2025):**
- Parts made with `Instance.new("Part")` get studs by default on their top and bottom surfaces.
- Surfaces only render on the **Plastic** material, not SmoothPlastic and not other materials.
- The `SurfaceType` enum is marked deprecated in the docs, but it still renders: Studs = 3, Inlet = 4, Smooth = 0.
- Native surfaces do not work on MeshParts or Unions.

```lua
local function studify(p) p.Material = Enum.Material.Plastic
  p.TopSurface = Enum.SurfaceType.Studs; p.BottomSurface = Enum.SurfaceType.Inlet end
```

**For MeshParts and Unions:**
- Use MaterialVariants in MaterialService. Examples:
  - The model "2008-2024 Studs As PBR Materials" (asset 11120912366, tutorial dated Sep 13, 2024).
  - The "HD Stud Materials 2008-2022" pack (open-source place 10509927516).
  - The Resurface plugin (Creator Store 5070921519), which uses MaterialVariants.
- Limitation: a MaterialVariant covers the whole part. It cannot be applied to a single face.
- Fallback: a `Texture` instance with a stud image and `StudsPerTileU/V = 4`.
- Creator Store stud texture assets 18878366001, 4657587428 and 14905298664 exist. I did not check whether they are image IDs usable in a Texture (unverified).

**Emissive masks (new, live February 12, 2026):**
- New properties `EmissiveMaskContent`, `EmissiveStrength` and `EmissiveTint` on SurfaceAppearance, MaterialVariant and TerrainDetail.
- The mask is grayscale (red channel only). The glow color comes from the ColorMap.
- It uses the same pipeline as Neon, so it blooms but does not light up nearby objects.
- Use it for glowing windows or panels on bricks, and for planet city lights.
- SurfaceAppearance also has `Color` (tint), `AlphaMode` and the PBR maps.

**Highlight:**
- The limit went from 31 to **255** on November 10, 2025.
- Each highlighted object costs an extra draw call, and any highlight on screen adds a post-processing cost.
- Highlights parented outside Workspace/PlayerGui still count toward the limit (DevForum bug report).
- Use them for hover or selection and for Secret-tier outlines. Don't put one on every planet.

## 4. Rarity aura VFX

**Particle limits (Creator Docs):**
- Up to 400 particles/s per emitter (docs say 100/s on mobile).
- Lifetime max 20 s.
- FlipbookFramerate max 30; layouts are Grid2x2, Grid4x4, Grid8x8 or Custom.
- LightEmission 0 means normal blending and 1 means additive.
- `Brightness` only shows when LightInfluence < 1.
- ZOffset controls layering.
- Orientation options: FacingCamera, FacingCameraWorldUp, VelocityParallel, VelocityPerpendicular.
- Shape options: Box, Sphere, Cylinder, Disc; ShapeStyle Volume or Surface.

**Beams** (Width0/1, CurveSize0/1, TextureMode Wrap/Static/Stretch, TextureSpeed, FaceCamera) are cheap and do not depend on the player's graphics level. A DevForum thread "Aura's using Beams!" covers this.

**Tier recipe (my synthesis):**
```lua
local AURA = { -- color, rate, size, extras
  Legendary={Color3.fromRGB(255,190,40), 12, 1.2, beams=0},
  Mythic   ={Color3.fromRGB(255,60,120), 20, 1.6, beams=2},
  Secret   ={Color3.fromRGB(20,20,30),   25, 2.0, beams=3, highlight=true, rainbow=true}}
local function addAura(model, tier)
  local cfg = AURA[tier]; if not cfg then return end
  local root = model.PrimaryPart
  local pe = Instance.new("ParticleEmitter")
  pe.Color = ColorSequence.new(cfg[1]); pe.Rate = cfg[2]
  pe.Size = NumberSequence.new{NumberSequenceKeypoint.new(0,0), NumberSequenceKeypoint.new(0.3,cfg[3]), NumberSequenceKeypoint.new(1,0)}
  pe.Transparency = NumberSequence.new{NumberSequenceKeypoint.new(0,1), NumberSequenceKeypoint.new(0.2,0.3), NumberSequenceKeypoint.new(1,1)}
  pe.LightEmission = 1; pe.LightInfluence = 0; pe.Brightness = 2
  pe.Lifetime = NumberRange.new(1,1.8); pe.Speed = NumberRange.new(0.5,1.5)
  pe.RotSpeed = NumberRange.new(-60,60); pe.Rotation = NumberRange.new(-180,180)
  pe.Shape = Enum.ParticleEmitterShape.Sphere; pe.ShapeStyle = Enum.ParticleEmitterShapeStyle.Surface
  pe.Acceleration = Vector3.new(0,2,0); pe.Parent = root
  if cfg.highlight then local h = Instance.new("Highlight"); h.FillTransparency = 1
    h.OutlineColor = Color3.new(1,1,1); h.DepthMode = Enum.HighlightDepthMode.Occluded; h.Parent = model end
end
```

**Extras for top tiers:**
- Add a PointLight (Range ≤ 60) in the tier color.
- Add a spinning ring made of a Beam with CurveSize so it forms an arc.
- On a rare drop, call `pe:Emit(40)` once for a burst.

**Free and paid VFX sources:**
- "Yuruzuu's Open Source VFX" (DevForum), free.
- BuiltByBit RNG aura packs (paid).

## 5. Idle bobbing and rotation

- Run it only on the client. Tweening many parts on the server causes lag (DevForum). Keep the server model anchored and static.
- **Option A: tween.** TweenService tweens (e.g. Sine, InOut, repeat -1, reverses true) run on Heartbeat and did better than per-frame CFrame code in a DevForum FPS comparison.
- **Option B: one loop for all items.** Move everything in a single `RenderStepped` pass with `workspace:BulkMoveTo(parts, cframes, Enum.BulkMoveMode.FireCFrameChanged)`, which avoids firing extra events.

```lua
local items = {} -- {part=, base=CFrame, phase=}
game:GetService("RunService").RenderStepped:Connect(function()
  local t = os.clock(); local parts, cfs = {}, {}
  for i, it in items do parts[i] = it.part
    cfs[i] = it.base * CFrame.new(0, math.sin(t*2 + it.phase)*0.4, 0) * CFrame.Angles(0, t*0.6 + it.phase, 0) end
  workspace:BulkMoveTo(parts, cfs, Enum.BulkMoveMode.FireCFrameChanged)
end)
```

## 6. UI art direction

**Fonts** (confirmed in the Font enum): FredokaOne (26), LuckiestGuy (32), Bangers (22), GothamBlack (20), Cartoon (9), Arcade (13), DenkOne (24), Michroma (34), Nunito (35), BuilderSans (46).
- Gotham and Arial were removed in May 2024. Games using them are silently switched to Montserrat and Arimo, so GothamBlack no longer renders as real Gotham. Prefer FredokaOne or LuckiestGuy for headers and BuilderSans for body text.
- Weights: `Font.new("rbxasset://fonts/families/FredokaOne.json", Enum.FontWeight.Bold)`.

**UIStroke upgrade** (full release December 4, 2025):
- `StrokeSizingMode` is FixedSize or ScaledSize. With ScaledSize, Thickness is a fraction of the shortest axis (0.1 on a 200 px frame = 20 px).
- `BorderStrokePosition` is Outer (default), Center or Inner.
- Also new: `BorderOffset` (UDim), `ZIndex`, and more than one border stroke per object.
- Roblox recommends fewer than 300 UIStrokes on screen.
- Typical cartoon style: text stroke via ApplyStrokeMode Contextual, Thickness 2–3 px (or ScaledSize ≈ 0.06), a dark tint of the fill color, `LineJoinMode = Round`.

**UIGradient:** Type is Linear, Radial or Conical; also Scale, TileMode (Clamp/Repeat/Mirror), Rotation and Offset. For a shine sweep, tween `Offset.X` from -1 to 1. For rainbow Secret-tier text, animate `Rotation`.

**UICorner:** CornerRadius is a UDim, and per-corner radii exist (TopLeftRadius and the others). Suggested values: 0.2–0.25 scale for buttons, 8–16 px for panels.

**9-slice:** `ScaleType = Slice`, `SliceCenter` Rect, `SliceScale`. Use it for chunky bordered panel art.

**Item icons:**
- A ViewportFrame's default Ambient is (200,200,200), LightColor (140,140,140), LightDirection (-1,-1,-1). Brighten these for a toy look.
- Move the camera, not the model. ViewportFrames get slow with many objects or with moving parts, and a June 2026 bug report describes lag spikes when CFrames change inside one.
- Resolution is capped at 1024×1024.
- Cheaper for grids: `rbxthumb://type=Asset&id=<id>&w=420&h=420` (sizes 150 or 420) on an ImageLabel, or pre-rendered PNGs.

## 7. Audio

**Licensed music:**
- The Creator Store has "100,000+ professionally-produced SFX and music tracks from top audio and music partners".
- Named partners: APM Music, Monstercat (free-use library since 2020), DistroKid (September 2024, about 180k tracks, under "DistroKid Hits"), Clippsly, BSlick, and Too Lost (added July 28, 2026).
- These tracks are licensed for use on Roblox only. YouTube and TikTok apply their own copyright rules.

**Uploading your own audio:**
- Up to 20 MB and 7 minutes per file; mp3, ogg, wav or flac; up to 48 kHz.
- 2,000 imports per 30 days if ID-verified, 100 if not.

**Example SFX:** "Cash Register (Kaching)" 7112275565.

**Sound design (my synthesis):**
- **Buy:** coin chime plus a short rising arpeggio.
- **Steal:** a whoosh when grabbing, an alarm or siren on the victim's side, and a heavier impact when the steal completes.
- **Rare drop:** risers that scale with tier, plus a choir or sparkle sting for Mythic and Secret, played in sync with `Emit`.
- **Rebirth:** a big whoosh and cymbal swell with a brief music duck.
- Vary pitch on repeated SFX with `PlaybackSpeed` 0.95–1.05.

**Mixing:**
- The Creator Docs now say Sound, SoundGroup and SoundEffect are "discouraged" in favor of the new audio objects: AudioPlayer, then a Wire, then AudioDeviceOutput, with AudioCompressor, AudioEqualizer and AudioReverb in between.
- **Ducking with the new API:** wire the SFX player into the compressor's sidechain input with `Wire.TargetName = "Sidechain"`.
- **Ducking with legacy SoundGroups:** put a CompressorSoundEffect in the Music group and set its `SideChain` to the SFX group. Defaults are Attack 0.1, Release 0.1, Ratio 40, Threshold -40 dB, GainMakeup 0.
- Suggested ducking values (mine): Threshold -30, Ratio 8, Attack 0.05, Release 0.4.
- Groups: Music ≈ 0.4, SFX ≈ 0.8, UI ≈ 0.6.

## Unverified

- Default lighting values in the current Studio baseplate template.
- Whether the stud Creator Store asset IDs are image IDs.
- The exact rarity color conventions used by Steal a Brainrot (commonly Common grey, Rare blue, Epic purple, Legendary gold, Mythic red, Brainrot God rainbow, Secret black/white).

## Sources
- https://create.roblox.com/docs/reference/engine/classes/Lighting
- https://create.roblox.com/docs/environment/lighting
- https://robloxapi.github.io/ref/class/Lighting.html
- https://devforum.roblox.com/t/let-there-be-unified-light-unified-lighting-is-fully-live/3401512
- https://devforum.roblox.com/t/compatibility-lighting-becomes-retro-tone-mapping-sunset-migration/3128560
- https://create.roblox.com/docs/environment/post-processing-effects
- https://create.roblox.com/docs/reference/engine/classes/ColorGradingEffect
- https://robloxapi.github.io/ref/class/BloomEffect.html
- https://robloxapi.github.io/ref/class/SunRaysEffect.html
- https://robloxapi.github.io/ref/class/DepthOfFieldEffect.html
- https://create.roblox.com/docs/environment/atmosphere
- https://robloxapi.github.io/ref/class/Atmosphere.html
- https://create.roblox.com/docs/environment/skybox
- https://robloxapi.github.io/ref/class/Sky.html
- https://devforum.roblox.com/t/lighting-settings-for-cartoony-style/2167959
- https://devforum.roblox.com/t/good-lighting-settings-for-simulators/468625
- https://devforum.roblox.com/t/what-lighting-is-the-best-for-a-brainrot-game/4075247
- https://devforum.roblox.com/t/how-to-change-a-parts-surface-to-studs-no-textures-or-decals-required/3497234
- https://devforum.roblox.com/t/creating-a-new-instance-with-plastic-material-from-script-adds-studs-texture/3893072
- https://devforum.roblox.com/t/how-to-get-back-the-old-stud-texture-easily-includes-meshes-unions/3157449
- https://devforum.roblox.com/t/resurface-convert-surfaces-to-studs-and-more/1226536
- https://devforum.roblox.com/t/hd-stud-materials-from-2008-2022-auto-converter-script/1911578
- https://create.roblox.com/docs/reference/engine/enums/SurfaceType
- https://create.roblox.com/docs/reference/engine/classes/SurfaceAppearance
- https://create.roblox.com/docs/reference/engine/classes/MaterialVariant
- https://devforum.roblox.com/t/emissive-masks-are-now-live-for-published-experiences/4357705
- https://create.roblox.com/docs/reference/engine/classes/Highlight
- https://devforum.roblox.com/t/lights-camera-more-highlights/4061534
- https://create.roblox.com/docs/effects/particle-emitters
- https://create.roblox.com/docs/effects/beams
- https://devforum.roblox.com/t/introduction-to-vfx-particles/2068650
- https://devforum.roblox.com/t/what-is-smoother-bindtorenderstep-or-tween/1331705/7
- https://create.roblox.com/docs/reference/engine/classes/WorldRoot#BulkMoveTo
- https://create.roblox.com/docs/reference/engine/enums/Font
- https://create.roblox.com/docs/reference/engine/classes/UIStroke
- https://devforum.roblox.com/t/full-release-uistroke-improvements-scaling-offsets-and-more/3958036
- https://create.roblox.com/docs/ui/appearance-modifiers
- https://create.roblox.com/docs/ui/9-slice
- https://create.roblox.com/docs/ui/viewport-frames
- https://devforum.roblox.com/t/viewportframe-upgrades/3953219
- https://create.roblox.com/docs/audio/assets
- https://devforum.roblox.com/t/amplify-your-experiences-with-new-music/3164792
- https://www.soundstock.com/news/2026-07-29-too-lost-partners-with-roblox-to-offer-independent-music-catalog-to-game-creators
- https://create.roblox.com/docs/audio/objects
- https://create.roblox.com/docs/reference/engine/classes/AudioCompressor
- https://create.roblox.com/docs/reference/engine/classes/CompressorSoundEffect
- https://robloxapi.github.io/ref/class/CompressorSoundEffect.html
- https://create.roblox.com/docs/reference/engine/classes/SoundGroup

---

# Research: discovery

# Discovery and monetization research for "Steal a Planet" (Sept 2026)

## 1. How Recommended For You works (official)
- **Two stages.** Retrieval picks candidates using engagement, retention and monetization. Ranking then personalizes. Only users who arrived *through Recommended For You* count in ranking. Ads, search, charts, friends, notifications and social sharing "accelerate your consideration", and "even a small number of people playing" can get a game considered (create.roblox.com/docs/discovery).
- **Signals.** Update of June 15, 2026: the windows are now D1, D2–7 and D8–28, replacing the old 7-day window. The standalone QPTR signal was split into play-through rate plus first-play bounce.
  - *Most important:* play-through rate, first-play bounce rate, play days per user, playtime per user.
    - First-play bounce is a negative signal, measured at <60 s and at 61–180 s.
    - Playtime is capped at 60 min per user per game per day.
  - *Important:* intentional co-play days (invites, parties, private servers; reserved servers count since Dec 11, 2025), qualified play sessions per user, spend days per user, Robux spent per user.
- **Other 2026 changes:**
  - Mar 26: a "Deep play-through rate" signal was added, and "Not interested" dismissals now affect ranking.
  - Jul 29: video previews autoplay in Recommended For You. Gameplay video gave up to +39% playtime in tests.
- **Things that cut exposure:**
  - Non-unique games, meaning metadata **and place files** that closely resemble existing games.
  - Metadata that doesn't match the content.
  - Titles that lead with giveaways or Robux.
  - The Creator Dashboard shows a daily banner when exposure is reduced.
- **Benchmarks** do not feed the algorithm. You need 100+ DAU to see them.

## 2. Charts: live definitions from Roblox's explore-api (fetched 26 Sep 2026)
| Sort | Official criterion |
|---|---|
| Top Trending | Largest relative DAU increase over the past week |
| **Up-and-Coming** | Published **within the last 28 days**, sorted by user growth |
| Top Playing Now | Current CCU |
| Top Revisited / Top Earning / Most Popular / Fun with Friends | Need ≥5,000 daily users, or top 10% of DAU, or top 30 most played. Then sorted by week-later return rate / Robux spent in the last 7 days / DAU / share of time played with friends |
| Top Rated | ≥5,000 daily users, with a high number and share of likes |
| Trending in <genre> | Relative DAU growth over one week, within each genre |

Current observed floors:
- **Up-and-Coming** page 1 (32 games): lowest 224 CCU, median about 7,250.
- **Top Trending** (93 games): lowest 1,418 CCU.
- **Top Playing Now** (98 games): lowest about 14,000 CCU.

At 100 CCU you get no chart placement. The **28-day Up-and-Coming window** is the one chart a new game can realistically reach, so launch timing matters.

"Steal a X" is still the top genre but crowded:
- Steal An Egg: #1 with about 2.16M CCU
- Steal a Brainrot: about 105K CCU, 73.6B visits, genre Simulation/Tycoon
- "[🌩️UPD] Steal From The Rich!": about 15K
- "Jump To Steal An Egg": in Up-and-Coming at about 6.3K

**Curation.** "Today's Picks" became **Standout Games** in March 2026. It is hand-picked through a nomination survey and looks for new mechanics, a distinctive visual style or an underrepresented genre. It says "copy or reskin of a popular Roblox game are a hard sell". It recommends having a trailer, localization and experience events.

**Events.** The Trending Events sort needs ≥1,000 RSVPs and an event that started within the last 7 days. The limit is 10 ongoing or upcoming events. `SocialService:PromptRsvpToEventAsync(eventId)` has been available since June 2025.

## 3. Thumbnails, icon and title
- **Thumbnails:**
  - 16:9, 1920×1080, <3 MB, up to 10 images or videos in total, 3 video uploads per month.
  - Personalization turns on with **≥2 active thumbnails**; keep 2–5 active. It averaged **+8.5% qualified play-through rate (qPTR)**, with some games at +50%.
  - No promotional text or claims ("50% off", "Free UGC").
  - Keep key elements away from the bottom edge, where the player count covers them.
- **Icon:** 512×512 and readable at 150×150. There is no native icon A/B test; it is still a feature request.
- **Title:** keep it stable; 1–2 emojis are fine; no keyword spam. Top games use a bracket tag that rotates with each update, for example "[🍂] Grow a Garden 🌶️", "[⏳] Ride A Pet", "[UPDATE!] BloxStrike", "[🌩️UPD]", "[X2 XP WEEKEND]".
- **qPTR benchmarks:**
  - 90th percentile for the Action genre is 3.63%, from a Creator Hub dashboard screenshot in Jan 2025 (kushaltimsina.com).
  - DevForum developers report 1–3.2%.

## 4. What "good" metrics look like
| Metric | Roblox dashboard, Action genre P90 (Jan 2025) | GameAnalytics 2026 P50 / P75 / P90 (500+ titles with 1M+ MAU) |
|---|---|---|
| D1 retention | 12.17% | 10.3 / 12.9 / 15.9% |
| D7 retention | 2.92% | 1.6 / 2.4 / 3.8% |
| D30 retention | – | 0.5 / 0.9 / 1.5% |
| Avg session | 17.1 min | 9.8 / 12.0 / 14.7 min |
| Sessions per player per day | – | 1.56 / 2.07 / 3.22 |
| Payer conversion | 1.82% | 3.8% spent anything |
| ARPPU | 455 R$ | median $0.70 per game |

Some guide sites give much higher targets, such as ROLearn's "D1 >25%, D7 >10%". Those are far above the measured distributions and are **unverified**.

**Suggested targets for Steal a Planet:** D1 ≥13%, D7 ≥3%, session ≥15 min, qPTR ≥3%.

## 5. Case studies and live ops
- **Grow a Garden.** Released Mar 26, 2025, built by 16-year-old BMWLux in 3 days. Splitting Point bought in at about 1,000 CCU and put 12 developers on it.
  - It moved to weekly updates on Saturdays at 7am PST, with gifts given out at launch.
  - Growth: 500 CCU (10–20K DAU), then about 100K CCU two weeks later, then 1M within a month, peaking at 22.3M.
  - Key mechanics: offline growth and weekly exclusive items.
- **Steal a Brainrot.** Released May 16, 2025 by SpyderSammy, owned by DoBig.
  - 5M CCU in July; 20M+ at the Aug 23 "admin war" run with Jandel; 25.4M in Oct 2025.
  - Tens of millions of TikTok and YouTube views, especially clips of kids reacting to losing a brainrot.
- **Dead Rails.** A Roblox official TikTok clip (499K likes) plus a Flamingo video (2M+ views) took it from hundreds of players to 1M CCU in March 2025 and 1.3M on Apr 12. It is about 19.6K CCU now.
- **Notifications:**
  - The game needs ≥100 visits. Recipients must be 13+ and opted in. Limit is 1 per user per experience per day.
  - Opt-in: `ExperienceNotificationService:PromptOptIn()` after a `CanPromptOptInAsync()` check. The prompt reappears at most every 30 days.
  - 99-character templates; `launchData` up to 200 bytes.
- **Communities** (formerly groups): `GroupService:PromptJoinAsync` has been available since Dec 2025. Rewarding likes or favorites is widely called a ToS violation on the DevForum, but I found no official statement (unverified), so avoid it.
- **Share links:** unlimited per game, each tracked separately in analytics. Custom `LaunchData` can grant perks on join. Referral rewards are set up under Engagement ⟩ Referral Rewards.
- **Audience Expansion Rewards:** you get 35% of a new or returning user's purchases anywhere on Roblox, up to their first $100 over 60 days.
  - The user must arrive through a share link, direct link or search, and play 10+ min that day.
  - You need ID verification and a DevEx account, and the game must average **100+ DAU** for those 60 days.
- **Short videos:** DevForum anecdotes show 500-view Shorts producing 0 joins, and one video a month does nothing. Numbers like "3 posts/day = 4× visits" come from a promotion agency (BLOXG) and are **unverified**.

## 6. Ads Manager
- **Formats:** Sponsored tiles on Home (16:9 since Mar 2025, up to 5 creatives, +40% play-through vs the old 1:1 format) and search ads.
- **Bidding:** automated, aiming for the lowest cost per play (CPP).
- **Audiences:** All, New, Recent (needs 10K players) or Lapsed (needs 20K). You can also target by age, location, gender, genre and device.
- **Payment:** 1 ad credit = $1 USD, which is about 263 R$ at the 0.0038 rate (it was 280–285 R$ before). First card charge is at least $5. You must be 13+ to advertise and 18+ to pay by card. Reporting lags up to 48h; attribution window is 30 days.
- **Real DevForum results:**
  - 15,000 R$ (about 57 credits) bought 4,000 visits (3.75 R$ per visit) and earned 2,000 R$ back.
  - $20/day for 7 days brought 60K visits on one game.
  - Suggested budgets: 10–50 credits a day for a week.
- **Unverified:** "$0.10–0.50 per click" (BLOXG).
- **What ads are for:** ad users don't count in Recommended For You ranking. Use ads to seed a game and test its retention, and only once D1 and qPTR are good.
- **Rewarded video ads** (a way to earn):
  - Requirements: 13+, ID verification, 2FA, and an average of ≥2,000 unique visitors a month.
  - The reward must be a developer product worth 3–10 R$.
  - API: `AdService:ShowRewardedVideoAdAsync`.

## 7. Monetization
- **Steal a Brainrot's live store (Roblox API):**
  - Only 3 game passes: 2x Money 299, VIP 375, Admin Commands 7,999.
  - 76 developer products on sale, including:
    - Unlock Base or Floor 39; +1/+5/+10 Speed 39/99/229
    - Cash Packs 59 / 379 / 659 / 1,249 / 2,499; StarterPack 189
    - Server Luck 2×/4×/8× at 249 / 999 / 2,999
    - Lucky Blocks 175 / 399 / 1,499, with bundles at 2,073 / 4,497 / 11,992
    - Spins ×1/×3/×10 at 99 / 199 / 499; "Craft Now" 49–299
    - Blackhole Slap 199, Flying Carpet 349, Laser Gun 499, Ban Hammer 999
    - "[GIFT]" copies of most items
- **Fee:** 30% marketplace fee, so you keep 70%.
- **Regional pricing** for passes since Apr 21, 2025. It's opt-in, prices can drop to 30% of the default, and Slap Battles reported +15% earnings. Price Optimization needs 100K transactions in 30 days.
- **Premium Payouts** ended Jul 24, 2025. The replacement, **Creator Rewards**, pays 5 R$ per Active Spender (someone who spent ≥$9.99 in 60 days) who plays ≥10 min, if the game is one of the first 3 they play that day.
- **DevEx:**
  - Requirements: age ≥13, ≥30,000 earned R$, verified email, W-9 or W-8 on file, one cash-out per month.
  - Standard rate 0.0038 $/R$ since Sep 5, 2025, so 30,000 R$ = $114.
  - **0.0054** applies to purchases by age-verified US adults (18+) since Jun 8, 2026. It **requires R15 or custom rigs; R6 disqualifies the game.** Build the classic blocky look on R15.
- **Publishing rule:** since Dec 17, 2025, publishing or updating a public game requires ID verification or a real-money purchase made since Jan 1, 2025.

## 8. What it takes to earn 15,000 Robux (estimate)
DevForum data points:
- 5K CCU obby: 120K R$/day, about 24 R$ per CCU per day (a reply called this "ideal").
- 500–1K CCU obby: about 1,250 R$/day, roughly 1.7 per CCU per day.
- 60–78 CCU physics game: 25K R$/year, about 1 per CCU per day.

For a Steal-a-style tycoon at a steady **100 CCU** (about 2,000–4,000 DAU, using Jandel's 20–40 DAU per CCU):
- 2 R$ per CCU per day: about 75 days
- 10: about 15 days
- 24: about 6 days
- Creator Rewards on top: unverified, probably a few hundred R$ a day.

By visits: about 30K at 0.5 R$ per visit (the ad-test figure), or 7.5–15K visits at 1–2 R$ per visit.

15K R$ is below the 30K DevEx minimum. It equals about 57 ad credits.

## Sources
- https://create.roblox.com/docs/discovery (+ raw GitHub creator-docs discovery.md)
- https://devforum.roblox.com/t/boost-your-discovery-with-the-improved-recommended-for-you-algorithm-and-analytics-for-creators/3587441
- https://devforum.roblox.com/t/recommended-for-you-algorithm-improvements-that-better-value-long-term-retention/4684575 (+?page=2)
- https://devforum.roblox.com/t/testing-more-recommended-for-you-algorithm-signals/4568033
- https://devforum.roblox.com/t/how-we-are-improving-home-this-year/4502571
- https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox
- https://apis.roblox.com/explore-api/v1/get-sorts and /get-sort-content (live)
- https://games.roblox.com/v1/games, https://apis.roblox.com/game-passes/v1/universes/7709344486/game-passes, https://apis.roblox.com/developer-products/v2/universes/7709344486/developerproducts (live)
- https://devforum.roblox.com/t/testing-an-enhanced-discover-page-top-charts-and-new-sorts/2954676
- https://devforum.roblox.com/t/introducing-top-playing-now-on-charts/3529809
- https://devforum.roblox.com/t/introducing-today%E2%80%99s-picks-a-new-curated-sort-on-home-pilot/2910867
- raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/creator-programs/standout-games.md
- https://create.roblox.com/docs/production/publishing/thumbnails
- raw creator-docs publish-games-and-places.md, experience-icons.md, retention.md, engagement.md, acquisition.md, share-links.md
- https://create.roblox.com/docs/production/analytics
- https://devforum.roblox.com/t/analytics-recommendations-qualified-play-through-rate-and-similar-experiences-benchmarks/3075185
- https://devforum.roblox.com/t/what-is-a-good-qualified-play-through-rate-for-a-thumbnail/3781640
- https://devforum.roblox.com/t/qualified-play-through-rate-best/3751740
- https://kushaltimsina.com/blog/2025/01/22/understanding-the-roblox-algorithm-to-grow-your-game/
- https://www.gameanalytics.com/reports/2026-roblox-report
- https://www.gameanalytics.com/blog/dead-rails-and-the-hit-makers-formula
- https://en.wikipedia.org/wiki/Grow_a_Garden
- https://en.wikipedia.org/wiki/Steal_a_Brainrot
- https://gamesbeat.com/janzen-madsen-interview/
- https://newsletter.gamediscover.co/p/what-grow-a-gardens-89-million-ccu
- https://create.roblox.com/docs/production/promotion/experience-notifications
- https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/promotion/experience-events.md
- https://devforum.roblox.com/t/introducing-the-new-experience-event-apis/3754058
- https://create.roblox.com/docs/creator-rewards
- https://create.roblox.com/docs/production/promotion/ads-manager
- https://devforum.roblox.com/t/leveling-up-ads-manager-with-new-features/3587640
- https://devforum.roblox.com/t/amount-of-robux-to-advertise-with/3917304
- https://devforum.roblox.com/t/ad-credit-to-usd-conversion-rate/3439010
- https://devforum.roblox.com/t/ads-credit-exchange-rate-incorrect-for-18-robux-earnings/4680094
- https://bloxg.com/guides/roblox-ads-guide (agency, unverified)
- https://rolearn.dev/guidance/scaling-1k-to-100k/ (unverified)
- https://rowatcher.com/news/what-the-roblox-algorithm-actually-rewards-in-2026-not-ccu (anecdotal)
- https://create.roblox.com/docs/production/promotion/rewarded-video-ads
- https://create.roblox.com/docs/production/monetization/developer-exchange
- https://create.roblox.com/docs/production/monetization/18-plus-devex-rate
- https://devforum.roblox.com/t/new-requirements-to-publish-and-update-public-experiences/4143953
- https://devforum.roblox.com/t/introducing-regional-pricing-for-passes/3621382
- https://devforum.roblox.com/t/my-game-with-a-60-78-ccu-yearly-average-generates-25k-robux-a-year/3560194
- https://devforum.roblox.com/t/5k-ccu-game-only-generates-120k-robux-per-day/2618589
- https://devforum.roblox.com/t/500-1000-ccu-making-1000-robux-day-help-monetization/4165417
- https://devforum.roblox.com/t/game-stuck-at-100-ccu/3309593
- https://devforum.roblox.com/t/my-game-is-stuck-at-20-30-ccu/4186133
- https://devforum.roblox.com/t/struggling-with-game-promotion/4085215
- https://devforum.roblox.com/t/the-issue-of-bribing-players-for-likes/4495969

---

# Research: policy-tech

# Steal a Planet: Roblox policy and technical constraints for 2026

## 1. Paid random items: loot boxes, luck boosts and odds disclosure

**Current rules.** DevForum announcement "Clarifying Requirements for Paid Random Items", posted by dinobotsnarl824 on 2026-05-26 and effective the same day.
- **What counts.** Any item bought with Robux, or with in-game currency bought with Robux, that gives a random outcome. There are four types:
  - Capsule (egg, chest, wheel)
  - Enhancement (random duration or success)
  - Combination
  - Probability modifier (luck boosts, pity systems, enhanced drops, rate-up scrolls)
- **Bundles.** "If you bundle a random item into a paid pack or single transaction, this makes the entire bundle a Paid Random Item."
- **Staff answer, post #60.** Luck gamepasses count as paid random items. You must say numerically how the odds change before purchase, and show the modified odds before the player gets the outcome.
- **Staff answers, posts #29 and #54.** A shop that shows the current item but randomly generates the next one "still falls under" the policy. The reason given: "the only way to find out (or change) what comes next is to buy". An item that reloads its contents every minute and is bought blind is also a paid random item.
- **Staff answer, post #30.** Variance from skill-based gameplay is not random.
- **No losing outcome.** "All possible outcomes of a Paid Random Item must provide some benefit." A player can never simply lose their payment.

**How odds must be shown** (create.roblox.com/docs/production/monetization/paid-random-items):
- Show numerical percentages before purchase, and they must sum to exactly 100%.
- You may round to 4 or more decimal places past the first non-zero digit, with a disclaimer that rounded values may not total 100%.
- For long lists, a pop-up is allowed, but it needs a descriptive "Details" or "Info" label. A bare (i) icon is not enough.
- Items with the same odds can be grouped as "Odds for each item listed below: X%".
- While a paid luck boost is active, the displayed odds must update to the real boosted values.
- Free random rewards need no disclosure.

**Gating by player.** Call `PolicyService:GetPolicyInfoForPlayerAsync(player)` on the server, wrapped in pcall. It errors if more than 100 calls are waiting on an HTTP response. Relevant fields:
- **`ArePaidRandomItemsRestricted`.** When true, you must do one of the following:
  - offer a free, earnable path
  - use a fixed, disclosed order of outcomes
  - sell the outcome directly (priced at its expected value, e.g. 10 Robux at 5% odds becomes 200 Robux)
  - hide the item
  - block the purchase with "Sorry, this item is unavailable for users in your region"
  - teleport the player away
- **`IsPaidItemTradingAllowed`.** When false, the player may not trade any paid item, not only random ones (staff, post #31).
- **Other fields:** `AreAdsAllowed`, `IsEligibleToPurchaseSubscription`, `IsEligibleToPurchaseCommerceProduct`, `IsContentSharingAllowed`, `IsSubjectToChinaPolicies`, `IsEndlessContentLoadAllowed`, `IsEndlessContentAutoplayAllowed`, `IsPhotoToAvatarAllowed`.

**Regulated markets** named in the announcement: Australia, Belgium, Netherlands, United Kingdom, Brazil. In Studio, Test > Player Emulator can switch these policy attributes on and off for testing. Violations lead to game removal and account suspension; appeals go through the standard moderation flow.

**What this means for a Steal-a-Brainrot-style game** (my reading, not an official Roblox ruling):
- **Definitely paid random items:**
  - Robux "Server Luck" (2x, 4x, 8x)
  - Robux lucky blocks or crates
  - luck gamepasses
  - lucky blocks bought with Robux-purchasable cash

  Each needs odds shown in its UI, boosted odds shown live, and `ArePaidRandomItemsRestricted` gating.
- **Probably not:** free conveyor spawns. Buying a visible, known unit with cash does not change what spawns next.
- **Cheap safeguard:** show a "Spawn Odds / Details" panel with the rarity table anyway.
- **Maturity questionnaire:** declare paid random items there.

## 2. Maturity labels and who can play

**Maturity labels** (create.roblox.com/docs/production/promotion/content-maturity):
- **Minimal:** occasional mild violence.
- **Mild:** repeated mild violence, heavy *unrealistic* blood, mild fear, mild crude humor. "Mild violence" means implied or unrealistic violence, e.g. bodies vanishing at 0 HP.
- **Moderate:** adds unplayable gambling depictions.
- **Restricted:** 18+ age-verified players only.
- **Playable or simulated gambling is prohibited.**
- **No questionnaire:** games without maturity info get restricted playability.

**Audiences** (create.roblox.com/docs/production/publishing/kids-and-select). Roblox Kids (ages 5–8) and Roblox Select (ages 9–15) launched on 2026-04-13 and went global on 2026-06-16.

| Audience | Allowed labels |
|---|---|
| Roblox Kids (5–8) | Minimal, Mild |
| Roblox Select (9–15) | Minimal, Mild, Moderate |
| Standard Roblox (16+) | all except Restricted |

**Reaching players under 16** requires all of:
- an age-verified creator account (facial estimation under 18, government ID for 18+)
- 2-Step Verification
- **either** a Roblox Plus or Premium subscription held for 2 months **or** a refundable publishing fee of **1,000 Robux** per game (refunded if the game keeps 25 highly engaged players for 60 days)
- an evaluation: the game starts in a 16+ trial and must reach **250 unique plays from highly engaged, age-checked players within 60 days**

An **expedited review costs a refundable 50,000 Robux** per game. You can request the refund after 90 days if the game stays in good standing and keeps 25 highly engaged players. Progress is shown in the **Audience Reach** dashboard.

This is the most important launch constraint for a brainrot-style game aimed at children. Slapping or pushing with no blood fits **Mild** or lower. A third-party site (familygamingdatabase) lists Steal a Brainrot as "Mild Violence"; I could not verify its official label.

**Community Standards:**
- In-game stealing or raiding is not prohibited.
- Relevant sections: "Repetitive and Misleading Content" (no deceptive metadata or thumbnails to drive discovery, monetization or engagement), Paid Item Trading, Paid Random Items, and Fraud (real-money trading).
- Thumbnails must show real gameplay and real graphics.

## 3. Text filtering

(create.roblox.com/docs/ui/text-filtering)
- **What must be filtered:** any displayed text you don't control. This includes player-entered planet or base names, sign text, and procedurally generated words.
- **Stored text:** text loaded from a data store must be filtered again when it is shown.
- **How:**
  1. Filter on the server with `TextService:FilterStringAsync(text, fromUserId, Enum.TextFilterContext.PublicChat)`, wrapped in pcall.
  2. For a BillboardGui or SurfaceGui seen by everyone, call `TextFilterResult:GetNonChatStringForBroadcastAsync()`. For one viewer, call `GetNonChatStringForUserAsync(userId)`.
  3. Filter after the text is submitted (e.g. on FocusLost), not on every keystroke.
  4. If filtering fails, never show the unfiltered string.
- **Easiest option:** use preset names only (a curated list of planet names), which removes the filtering requirement.

## 4. Data stores

Official limits (create.roblox.com/docs/cloud-services/data-stores/error-codes-and-limits):

**Experience-wide budgets, requests per minute.** These are shared with Open Cloud.

| Store | Read | Write | List | Remove |
|---|---|---|---|---|
| Standard | 300 + CCU×40 | 300 + CCU×20 | 300 + CCU×2 | 300 + CCU×40 |
| Ordered | same as standard | same | same | same |

`UpdateAsync` uses both the read and the write budget.

**Per-server default budgets, requests per minute.** You can change these with `DataStoreService:SetRateLimitForRequestType`. Check what is left with `GetRequestBudgetForRequestType`. Studio Run mode has separate, lower static limits.

| Store | Read | Write | List | Remove |
|---|---|---|---|---|
| Standard | 60 + players×40 | 60 + players×40 | 5 + players×2 | 60 + players×40 |
| Ordered | 60 + players×40 | 30 + players×5 | 5 + players×2 | 30 + players×5 |

**Other limits:**
- Store name, key name and scope: 50 characters each.
- Value size: 4,194,304 characters per key.
- Metadata: 300 characters.
- Per-key throughput over a rolling 60 seconds: 25 MB read, 4 MB write, each request rounded up to 1 KB.
- Each request queue holds 30 requests; beyond that, calls fail with errors 301–306.
- Storage: 500 MB + 1 MB × lifetime users, measured on the compressed latest version. Don't compress data yourself.
- I did not find a 6-second per-key write cooldown on the current page.

**Best practices** (the best-practices doc):
- Use one key per player (`User_{UserId}`) and a small, fixed set of stores.
- Keep a server-side cached copy and save periodically; the sample uses 180 s. Also save on PlayerRemoving and in `BindToClose`, which gets **30 s**.
- Use `UpdateAsync` whenever multiple servers may write the same key.
- Retry with exponential backoff plus jitter.
- DataStore2 is labelled legacy.

**Session locking:** use **ProfileStore** (MadStudioRoblox/ProfileStore, Apache-2.0; install via Wally, .rbxm or the Creator Store). Main APIs: `ProfileStore.New`, `:StartSessionAsync`, `:EndSession`, `:Reconcile`, `:AddUserId`, `:MessageAsync` (offline gifts). It uses UpdateAsync plus MessagingService for fast lock handoff between servers, and auto-saves every 300 s by default.

**Ordered data stores (global leaderboards):**
- Values must be integers; practical limit about 9.22e18 (2^63, community figure).
- `GetSortedAsync(ascending, pageSize, min, max)`: page size defaults to 50, maximum 100.
- No versioning or metadata.
- Planet-economy cash will exceed 1e18. Store a scaled logarithm, e.g. `math.floor(math.log10(cash) * 1e6)` (a community pattern).
- Refresh leaderboards every 60 s or more; write only on autosave.

**MemoryStore** (cross-server live events):
- Memory: 64 KB + 1.2 KB × users.
- Requests: 1000 + 120 × CCU units per minute.
- Item size: 32 KB. Expiration: 45 days maximum. One structure: 1M items and 100 MB.

## 5. Developer product receipts

(MarketplaceService reference)

**ProcessReceipt:**
- Set it once, in a single server Script.
- It fires on purchase, on a successful prompt, and when the player joins.
- **There is no time-based retry.** `NotProcessedYet` only comes back on the player's next purchase or rejoin.
- There is no timeout.
- The player must be in the server.
- Several pending receipts arrive in no fixed order.
- **The same receipt can run on two servers at once.**
- Returning `PurchaseGranted` can still fail to record.
- If you don't implement it at all, receipts are auto-acknowledged.

**Receipt fields:** `PurchaseId`, `PlayerId`, `ProductId`, `PlaceIdWherePurchased`, `CurrencySpent`, `CurrencyType`, `ProductPurchaseChannel`.

**Grant each purchase exactly once:**
- The official sample keys on `PurchaseId` with `UpdateAsync` and returns nil when the grant fails.
- The ProfileStore pattern (community): keep a ring buffer of processed PurchaseIds inside the profile, grant the item, save, and only then return `PurchaseGranted`.

**New API:** `MarketplaceService:BindReceiptHandler(Enum.ReceiptType.DeveloperProduct, handler, filter?)`. Handlers return `Enum.ReceiptDecision.Processed` or `NotProcessedYet`. A bound handler takes precedence; unmatched receipts fall through to ProcessReceipt.

## 6. Anti-exploit

(create.roblox.com/docs/scripting/security/*)

**What exploiters can do:** fire remotes at any rate with any arguments, and trigger **Touched and ProximityPrompt at any range or frequency**.

**Server rules for buying and stealing:**
- **Buying:** check the item's real price, the player's cash, and the character's distance to the conveyor or shop.
- **Stealing:**
  - check that the target base is unlocked and has no shield
  - check that the thief is within about the prompt's `MaxActivationDistance` plus a small tolerance
  - track only one carried item on the server
  - bank the item only when the server sees the carrier reach their own base
  - drop the item on death or disconnect
- Keep all logic and data in ServerScriptService or ServerStorage.

**Validating remotes:**
- Check `typeof`.
- Check `IsDescendantOf` for Instance arguments; exploiters send tables that imitate instances.
- Use `math.isfinite` to reject NaN and ±inf. NaN passes every comparison check.
- Rate-limit each player with a token bucket (the official sample is `TokenBucket.new(capacity, windowSeconds)`).

**Detection and response:**
- Heuristics: rate of income gain, travel speed, and unnaturally regular action timing.
- **Honeypot remotes:** any traffic on them means log and kick.
- Escalate through a ladder: log, silently limit, restrict, kick, `Players:BanAsync`.

**Server Authority:** full release **2026-07-09**.
- Setting `Workspace.AuthorityMode = Server` automatically sets `NextGenerationReplication`, `PlayerScriptsUseInputActionSystem`, `SignalBehavior = Deferred`, `UseFixedSimulation` and `StreamingEnabled`.
- It blocks speed, fly, teleport and fling exploits, which are the main stealing exploits.
- It requires `RunService:BindToSimulation` and the Input Action System.
- Limits: 8 active animation tracks per Animator, 64 attributes per instance, and remotes are not synchronized with the shared timeline.
- Roblox says it is opt-in and "not the right decision for all games".

**Other:** `UnreliableRemoteEvent` payloads over 1000 bytes are dropped.

## 7. Performance

- **Frame budget:** 16.67 ms at 60 FPS.
- **Example low-end target from the docs:** under 1,000 draw calls and under 1,000,000 triangles.
- **Instancing:** give repeated meshes the same MeshId and TextureID so they render in fewer draw calls.
- **Textures:** most minor images under 256×256. A 1024² texture uses 4× the memory of a 512².
- **Decor parts:** set `CanCollide`, `CanTouch` and `CanQuery` to false, anchor them, and use Box collision fidelity.
- **NPCs:** use AnimationController instead of Humanoid for idle aliens.
- **Tweens:** don't tween on the server.
- **Streaming:**
  - StreamingEnabled is on by default for new places.
  - `StreamingMinRadius` 64, `StreamingTargetRadius` 1024.
  - `StreamingIntegrityMode = PauseOutsideLoadedArea`.
  - `ModelStreamingMode`: Atomic for base and unit models (client code then calls WaitForChild on the model), Persistent for the conveyor and hub.
- **Memory:** Roblox analytics flag crash rates on Android devices with under 2 GB of RAM. The community aims for about 400 MB client memory (unverified, not an official figure).

## 8. Built-in Studio MCP server

(create.roblox.com/docs/studio/mcp; DevForum posts from 2026-02-21 and 2026-03-05)

**Setup and connection:**
- Enable in Assistant > Manage MCP Servers > "Enable Studio as MCP server".
- Uses stdio transport.
- Every call takes a `studio_id`, found with `list_roblox_studios`.
- Assistant can also use your own Anthropic, OpenAI or Gemini API key.

**Tools:**
- **Scripts:** `script_read`, `multi_edit`, `script_search` (up to 10 results), `script_grep` (up to 50 matches).
- **Generation and assets:**
  - `generate_mesh`, `generate_material`
  - `generate_procedural_model` (models built from primitive parts), with `wait_job_finished`
  - `search_asset` (Creator Store and Inventory)
  - `insert_asset` (by ID)
  - `upload_image`, `store_image`
- **Exploring the game:** `subagent` (explore or playtest), `search_game_tree`, `inspect_instance`.
- **Running code:** `execute_luau` with datamodel_type Edit, Client or Server.
- **Playtesting:** `get_studio_state`, `start_stop_play`, `get_console_output`, `screen_capture` (optional camera position).
- **Input:** `character_navigation` (moves the character directly, not real input), `user_keyboard_input`, `user_mouse_input`.
- **Docs:** `http_get` (allowlisted Roblox docs only), `skill`.

## Sources
- https://create.roblox.com/docs/production/monetization/paid-random-items (plus raw GitHub copy)
- https://devforum.roblox.com/t/clarifying-requirements-for-paid-random-items/4654622 (plus .json and posts.json)
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/reference/engine/classes/PolicyService.yaml
- https://create.roblox.com/docs/reference/engine/classes/PolicyService
- https://create.roblox.com/docs/production/promotion/content-maturity (plus raw)
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/production/promotion/experience-guidelines.md
- https://create.roblox.com/docs/production/publishing/kids-and-select (plus raw)
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/production/publishing/publish-games-and-places.md
- https://about.roblox.com/community-standards
- https://create.roblox.com/docs/ui/text-filtering (plus raw)
- https://create.roblox.com/docs/reference/engine/classes/TextService
- https://create.roblox.com/docs/cloud-services/data-stores/error-codes-and-limits (plus raw)
- https://create.roblox.com/docs/cloud-services/data-stores/best-practices
- https://create.roblox.com/docs/cloud-services/data-stores
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/reference/engine/classes/OrderedDataStore.yaml
- https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore
- https://create.roblox.com/docs/cloud-services/memory-stores
- https://create.roblox.com/docs/cloud-services/cross-server-messaging
- https://create.roblox.com/docs/reference/engine/classes/MessagingService
- https://github.com/MadStudioRoblox/ProfileStore
- https://madstudioroblox.github.io/ProfileStore/
- https://create.roblox.com/docs/production/monetization/developer-products
- https://create.roblox.com/docs/reference/engine/classes/MarketplaceService (plus raw MarketplaceService.yaml)
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/reference/engine/classes/DataModel.yaml
- https://create.roblox.com/docs/scripting/security/security-tactics (plus raw)
- https://create.roblox.com/docs/scripting/security/server-side-detection (plus raw)
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/scripting/security/access-control.md
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/scripting/security/client-server-boundary.md
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/scripting/security/network-ownership.md
- https://create.roblox.com/docs/scripting/events/remote
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/reference/engine/classes/UnreliableRemoteEvent.yaml
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/reference/engine/classes/ProximityPrompt.yaml
- https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/reference/engine/classes/Workspace.yaml
- https://create.roblox.com/docs/projects/server-authority
- https://devforum.roblox.com/t/full-release-ship-fair-and-competitive-games-with-server-authority/4727993
- https://create.roblox.com/docs/workspace/streaming
- https://create.roblox.com/docs/performance-optimization/improve
- https://create.roblox.com/docs/performance-optimization/design
- https://devforum.roblox.com/t/analytics-optimize-low-end-android-crash-rates-server-memory-and-cpu-performance/3145364
- https://devforum.roblox.com/t/what-client-memory-usage-should-i-shoot-for-and-how-to-reduce-it/455472
- https://create.roblox.com/docs/studio/mcp (plus raw mcp.md)
- https://devforum.roblox.com/t/assistant-updates-studio-built-in-mcp-server-and-playtest-automation/4474643
- https://devforum.roblox.com/t/studio-mcp-server-updates-and-external-llm-support-for-assistant/4415631

---

