<div align="center">

<img src="assets/banner.png" alt="openGym" width="720">

<br>

**A gym, body-weight & calorie tracker you actually own — on your own Firebase project.**

Plan your week, run guided workouts, track every set, your body weight and your calories
over time — on your phone, synced across devices, behind your own email/password login.
No account on someone else's server, no subscription, no ads. Just your own free Firebase
project.

<br>

[![License: AGPL v3](https://img.shields.io/badge/license-AGPL--3.0-a3e635?style=flat-square)](LICENSE)
![PWA](https://img.shields.io/badge/PWA-installable-a78bfa?style=flat-square)
![React](https://img.shields.io/badge/React-19-38bdf8?style=flat-square&logo=react&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%2B%20Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=white)
![No tracking](https://img.shields.io/badge/telemetry-none-f472b6?style=flat-square)
<br>
![GitHub last commit](https://img.shields.io/github/last-commit/DuarteSantos8/openGym?style=flat-square)
[![GitHub stars](https://img.shields.io/github/stars/DuarteSantos8/openGym?style=flat-square)](https://github.com/DuarteSantos8/openGym/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DuarteSantos8/openGym?style=flat-square)](https://github.com/DuarteSantos8/openGym/issues)

</div>

<br>

<div align="center">
<table>
<tr>
<td align="center"><img src="assets/screenshots/home.png" alt="Home" width="230"><br><sub><b>Home</b> — today's workout & weight</sub></td>
<td align="center"><img src="assets/screenshots/workout.png" alt="Workout" width="230"><br><sub><b>Guided workout</b> — animated demos & sets</sub></td>
<td align="center"><img src="assets/screenshots/stats.png" alt="Stats" width="230"><br><sub><b>Stats</b> — heatmap, charts & PRs</sub></td>
</tr>
</table>
</div>

<div align="center">

### [🌐 opengym.duarte-santos.ch](https://opengym.duarte-santos.ch) · [▶ Try the live demo](https://duartesantos8.github.io/openGym/)

No signup, nothing to install — it runs entirely in your browser on example data.<br>
<sub>There's no backend behind the demo, so account sign-in and sync across devices only
exist once it's pointed at your own Firebase project.</sub>

</div>

## Why

Most workout apps lock your data behind a login on their servers, nag you to upgrade, or
disappear when the startup does. openGym is the opposite: **your data lives in your own
Firebase project, not someone else's server, and it's yours to fork.** It still feels
modern — installable as a home-screen app, email sign-in, offline support, sync across your
phone and laptop.

## Features

- ⚖️ **Body-weight tracking** — interactive chart with a goal line you set, gains/losses colored by whether they move toward it
- 🍎 **Calorie & macro tracking** — log food manually or search a free food database to autofill kcal/protein/carbs/fat, with a daily target and progress against it
- 🏋️ **Weekly plan** — a routine per weekday, over a library of **1,324 exercises** (searchable, with animated demos)
- 🗓️ **Reschedule any day** — sick, missed a session, or fewer gym days this week? Move a workout to another day without touching your weekly plan
- ▶️ **Guided workouts** — it knows what day it is and starts today's session; asks your body weight first, pre-fills your weights from last time, rest timer, PR detection, per-exercise weight tracking
- ☀️ **The screen stays awake while you train** — no unlocking the phone and finding your place again between every set. On for as long as a workout is running, released the moment you finish it, and switchable off in Settings
- 🔗 **Supersets** — build them, and log them back-to-back with a rest only after the pair
- ⏱️ **Timed exercises** — planks, hangs, wall sits and loaded carries are logged by time, not reps, with a work timer that counts the set itself (separate from the rest timer) and logs the time you actually held. They can carry weight too
- 📈 **Progression that follows a rule** — pick one per routine, override it per exercise: linear, **Greyskull LP** (AMRAP top set, double jumps, 10 % resets), double progression through a rep range, or adding time. Your weights are already right when the session opens, and every target says *why* it's that number. Missed reps never advance the load, stalls trigger a deload, and bodyweight exercises progress in reps instead
- 💪 **Estimated 1RM** — per exercise, from your best eligible set (it names which one), with its own progress curve and a calculator for sets you haven't done. Won't guess above 12 reps
- 🎯 **Effort per set, in your scale** — an optional third column rating how hard a set was, as **RIR** (reps left in the tank) or **RPE** (the same judgement on a 10-point scale). Off by default; each set keeps the scale it was logged with, and nothing else reads the value — your progression and 1RM are unaffected
- 💪 **Bodyweight exercises, logged as bodyweight** — push-ups, pull-ups, dips and 300-odd others arrive knowing they carry no load, so there's no weight column and no working-weight prompt: one stepper, log the reps. Add a dip belt and it reads as an addition, and progression goes back to following the weight. Without one, reps climb — and past a ceiling you set, a set is added instead of a rep, up to the point where the honest advice is load or a harder variation
- ↔️ **Reps per side** — for lunges, single-arm rows and the rest. You log the total, the app shows the split ("8 per side"), and the target steps in twos so it never lands on a number one side can't have
- 🏃 **Cardio** — log time + speed, not just weight × reps
- 📤 **Share a plan** — send someone your routines and week schedule as a small file (no workouts, no weigh-ins), or print it as a clean PDF. Importing merges, so their plan is never overwritten
- 🔧 **Filter by equipment** — narrow the library to what you actually own; the options adapt to what you've picked, so every combination on screen has results behind it
- ✨ **Your own exercises** — a name and a body part is enough; they behave like built-in ones everywhere, with an optional description instead of an animation
- 🟩 **Activity heatmap** — a GitHub-style year view, shaded by time spent training
- 💪 **Muscle map** — a front-and-back body diagram shaded by how much work each muscle got, over a week, a month or all time. It names the muscles you *haven't* trained in that period, previews what a routine hits while you build it, and shows what you just trained when you finish. Male or female figure, your pick
- 🔑 **Email sign-in** — each account keeps its own data, synced across devices via your own Firebase project
- 🎨 **Designed, not assembled** — light/dark themes and 8 accent colors saved to your profile, over a hand-drawn icon set instead of emoji, so it looks the same on every phone
- 🌍 **12 languages** — full UI translation (EN, DE, ES, FR, IT, PT, PL, TR, RU, ZH, KO, HI); exercise instructions localized in 10 of them, loaded on demand so the app stays fast
- 📥 **Bring your history with you** — import from **FitNotes** (Android and iOS), **Strong** and **Hevy**, or body weight straight out of an **Apple Health** export. Exercise names are matched against the library and anything unrecognised becomes one of your own exercises, so nothing in the file is dropped
- 📦 **Yours to keep** — one-tap JSON export/import, guest mode, **no telemetry**
- 📱 **Standalone Android app** — the whole tracker as a sideloadable APK: no account, no server, data on the phone, native workout reminders ([download](https://opengym.duarte-santos.ch))

## Quick start

You need a free [Firebase](https://firebase.google.com/) project and Node.

1. In the Firebase console, create a project, then enable **Authentication → Email/Password**
   and **Firestore Database** (production mode).
2. Add a **Web app** to the project (Project settings → General → Your apps) and copy its
   config values.

```bash
git clone https://github.com/DuarteSantos8/openGym
cd openGym
cp .env.example .env    # paste your Firebase web-app config values in
cd frontend && npm install && npm run dev
```

Open the printed local URL, create an account, and you're in. First launch downloads the
exercise media (~140 MB) once.

Deploy the built app to Firebase Hosting (or any static host):

```bash
npm run build
npx firebase-tools deploy --only hosting,firestore:rules   # from the repo root
```

Full walkthrough (Firestore rules, friends & family, scaling later): **[docs/FIREBASE_SETUP.md](docs/FIREBASE_SETUP.md)**.

## Mobile app (no server at all)

The same codebase also builds a **standalone mobile app** (Capacitor): no account, no sync,
no backend — everything stays on the phone, with native workout-day reminders and share-sheet
backups. The web app (pointed at your Firebase project) gets you multi-device sync and
accounts for friends & family; the mobile app is the install-and-done flavor.

- **Android:** [**download the APK**](https://opengym.duarte-santos.ch) and sideload it —
  openGym is deliberately not on the Play Store. Or build it yourself: **[docs/MOBILE.md](docs/MOBILE.md)**.
- **iPhone:** Apple doesn't allow installing apps outside the App Store, so there is no iOS
  download. Deploy the web app and add it to your home screen from Safari (it's a full PWA),
  or build the native app onto your own device from Xcode — see **[docs/MOBILE.md](docs/MOBILE.md)**.

## How it works

```
┌─────────────┐                  ┌──────────────────────────────┐
│  Your phone │──── HTTPS ──────▶│  Firebase Hosting              │
│  / laptop   │                  │   └─ serves the built SPA      │
└─────────────┘                  └──────────────────────────────┘
       │
       │  Firebase client SDK
       ▼
┌─────────────────────────────┬───────────────────────────────┐
│  Firebase Auth               │  Firestore                    │
│   (email/password accounts)  │   users/{uid} — one JSON doc  │
│                               │   per account: plan, workouts,│
│                               │   body weight, food log       │
└─────────────────────────────┴───────────────────────────────┘
```

- **frontend/** — React + Vite (React Router + Zustand), talking to Firebase directly from
  the client — there is no backend of openGym's own left to run or deploy
- **firestore.rules** — the only access control: a user can read/write only their own document

## Your data

Lives in **your own Firebase project** — one Firestore document per account holding your
plan, workouts, body weight, food log and settings, plus whatever Authentication stores for
the account itself. Export a JSON backup anytime from Settings. Nothing is sent to openGym's
maintainers or any third party — the app talks only to the Firebase project you configured.

## Configuration

All via `.env` at the repo root (see `.env.example`) — your Firebase web-app config, which
Vite exposes to the client as `VITE_FIREBASE_*`. These values aren't secret; real access
control is `firestore.rules` plus Firebase Auth.

## Roadmap

Rough, community-driven — ideas and PRs welcome:

- [x] Standalone mobile app — Android APK to sideload ([download](https://opengym.duarte-santos.ch)); on iOS as a self-hosted PWA (no store listings planned)
- [x] Automatic progression programs (linear, Greyskull LP, double progression) with stalls and deloads
- [x] Estimated 1RM per exercise
- [ ] Percentage / training-max programming (5/3/1-style) on top of the progression engine
- [ ] More starter plans (upper/lower, full-body, 5×5)
- [x] Importers from FitNotes / Strong / Hevy (including the RPE they record), and body weight from Apple Health
- [x] Effort per set — RIR or RPE, whichever scale you think in
- [x] Calorie & macro tracking — manual entry plus food-database search, with daily targets
- [ ] Body measurements (waist, arms…) alongside weight
- [ ] Per-exercise notes & plate calculator
- [ ] Exercise instructions in German & Portuguese (UI is translated; upstream dataset doesn't ship these yet)

## Tech

React 19 + Vite (React Router, Zustand) · Firebase (Auth + Firestore) · exercise data from
[hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset) · food data
from [Open Food Facts](https://world.openfoodfacts.org/). No backend of openGym's own to run —
the app talks straight to the Firebase project you configure.

The training logic — progression rules, 1RM estimation, how a logged session is read back —
lives in pure functions under `frontend/src/lib/` with tests next to them: `npm test` in
`frontend/`. Vitest is a dev dependency; the app itself ships no runtime dependencies beyond
React, the router and Zustand.

## Community

- **[Q&A](https://github.com/DuarteSantos8/openGym/discussions/categories/q-a)** — self-hosting
  help, passkey/login trouble, "how do I…". Most login problems turn out to be an `RP_ID`/`ORIGIN`
  mismatch.
- **[Ideas](https://github.com/DuarteSantos8/openGym/discussions/categories/ideas)** — features
  worth talking through before anyone writes code.
- **[Show and tell](https://github.com/DuarteSantos8/openGym/discussions/categories/show-and-tell)**
  — your setup, your plan templates, whatever you built on top.
- **[Issues](https://github.com/DuarteSantos8/openGym/issues)** — bugs, and work that's already
  been agreed on.

## Contributing

Issues and PRs welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). Good first issues: more starter
plans, exercise-data languages, import from other trackers. **A ⭐ helps more people find it.**

openGym is free and stays free: AGPL, no subscription, no paid tier, nothing held back for
sponsors. If it replaced a paid tracker for you and you want to chip in, the Sponsor button at the
top of the page is there — a star, a bug report or a PR is worth just as much.

## License

[GNU AGPL v3.0](LICENSE) — free and open source. You can self-host, use, modify and share it;
if you run a modified version as a network service, you must offer that version's source under
the same license. Nobody can turn openGym into a closed, proprietary product.

Exercise images/GIFs are fetched from the upstream dataset and keep their own terms — see [NOTICE.md](NOTICE.md).
