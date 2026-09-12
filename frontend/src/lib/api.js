// Auth helpers — Firebase Auth (email/password). Replaces the old server-backed passkey flow;
// the shape callers use (`{id, name}` on success, throwing Error otherwise) is kept the same
// so useStore.js/Login.jsx/Settings.jsx barely had to change around it.
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as fbSignOut
} from 'firebase/auth'
import { auth } from './firebase.js'

export const IS_APPLE = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)
export const IS_ANDROID = /Android/.test(navigator.userAgent)

const asUser = u => ({ id: u.uid, name: u.email })

function friendlyError(e) {
  const map = {
    'auth/email-already-in-use': 'An account with that email already exists — sign in instead.',
    'auth/invalid-email': 'Enter a valid email address.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/invalid-credential': 'Wrong email or password.',
    'auth/wrong-password': 'Wrong email or password.',
    'auth/user-not-found': 'No account with that email — create one first.',
    'auth/too-many-requests': 'Too many attempts — try again in a moment.'
  }
  return new Error(map[e.code] || e.message || 'Something went wrong')
}

export async function emailRegister(email, password) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), password)
    return asUser(cred.user)
  } catch (e) { throw friendlyError(e) }
}

export async function emailLogin(email, password) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email.trim(), password)
    return asUser(cred.user)
  } catch (e) { throw friendlyError(e) }
}

export const emailSignOut = () => fbSignOut(auth)
