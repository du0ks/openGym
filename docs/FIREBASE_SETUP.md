# Firebase setup

openGym has no backend of its own — it's a static React app that talks straight to a Firebase
project you configure. This walks through setting that project up.

## 1. Create the project

1. Go to the [Firebase console](https://console.firebase.google.com/) and create a project
   (the free **Spark** plan is enough — no credit card, and it never pauses from inactivity).
2. **Build → Authentication** → Get started → enable the **Email/Password** provider.
3. **Build → Firestore Database** → Create database → start in **production mode** (the repo's
   `firestore.rules` locks each account to its own document — you don't need "test mode").
4. **Project settings → General → Your apps** → add a **Web app**. Copy the `firebaseConfig`
   values it gives you.

## 2. Configure the app

```bash
cp .env.example .env
```

Paste the values from step 1.4 into `.env` as `VITE_FIREBASE_API_KEY`,
`VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`,
`VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`. These aren't secrets — they ship
in the client bundle either way — access control comes from `firestore.rules` and Firebase
Auth, not from hiding this config.

## 3. Run it

```bash
cd frontend
npm install
npm run dev
```

Open the printed local URL, create an account, and you're in.

## 4. Deploy the security rules

From the repo root, once (and again any time `firestore.rules` changes):

```bash
npx firebase-tools login
npx firebase-tools use --add     # pick the project you created
npx firebase-tools deploy --only firestore:rules
```

Without this step Firestore's default rules apply, which — depending on the mode you picked in
step 1.3 — may be more permissive than intended. Deploying `firestore.rules` is what actually
restricts each account to its own document.

## 5. Deploy the app

Any static host works (Firebase Hosting, Vercel, Netlify, GitHub Pages, ...). To use Firebase
Hosting, from the repo root:

```bash
cd frontend && npm run build && cd ..
npx firebase-tools deploy --only hosting
```

`firebase.json` already points Hosting at `frontend/dist`. `.firebaserc` needs your actual
project id in place of the placeholder — `npx firebase-tools use --add` writes it for you.

## Friends & family

Email/password accounts are self-serve — anyone with the URL can create one from the login
screen (`Login.jsx`). There's no invite gate or admin dashboard in this build; if you want to
restrict signups later, that's a rule/UI change worth making once you actually need it rather
than something to build ahead of time.

## Scaling later

Everything above runs free on Spark for a personal instance and a handful of friends. If usage
grows, flipping to the **Blaze** (pay-as-you-go) plan is a billing change, not a rewrite — same
Auth, same Firestore, same code — and it's what unlocks Cloud Functions if you later want
server-side features like push notifications.
