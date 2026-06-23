// src/firebase.js
//
// ── SETUP STEPS (do this once) ──────────────────────────────────────────
// 1. Go to https://console.firebase.google.com → "Add project" → name it
//    anything (e.g. "locality-clone") → finish the wizard (no need for
//    Google Analytics).
// 2. In your new project: click the "</>" (web) icon to register a web app.
//    Give it a nickname → Register app. It'll show you a `firebaseConfig`
//    object — copy those values into the object below.
// 3. In the left sidebar: Build → Authentication → "Get started".
//    Under "Sign-in method", enable:
//      - Email/Password
//      - Google
//    For Google, you'll just need to set a support email — that's it.
// 4. Save this file, restart your dev server.
// ─────────────────────────────────────────────────────────────────────────

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()