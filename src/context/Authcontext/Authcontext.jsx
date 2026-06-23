import { createContext, useContext, useEffect, useState } from 'react'

// ── MOCK AUTH ──────────────────────────────────────────────────────────
// No Firebase, no validation. Anything typed in is accepted.
// User is just stored in localStorage so it survives page reloads.
// Swap this out for real auth later — useAuth()'s shape (user,
// isLoggedIn, registerWithEmail, etc.) is kept the same so call sites
// elsewhere in the app won't need to change.
// ──────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'mockUser'
const AuthContext = createContext(null)

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function makeUid(seed) {
  return `mock-${seed}-${Date.now().toString(36)}`
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    setUser(readStoredUser())
    setAuthLoading(false)
  }, [])

  const persist = (nextUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
    return nextUser
  }

  // Same function name/signature as before — accepts anything, no checks.
  const registerWithEmail = async (name, email, password) => {
    const nextUser = {
      uid: makeUid(email || 'user'),
      displayName: name || email || 'User',
      email: email || '',
      photoURL: null,
    }
    return persist(nextUser)
  }

  const loginWithEmail = async (email, password) => {
    // No password check at all — logs in as long as something was typed,
    // and even works if fields are empty.
    const existing = readStoredUser()
    if (existing && existing.email === email) {
      return persist(existing)
    }
    const nextUser = {
      uid: makeUid(email || 'user'),
      displayName: email || 'User',
      email: email || '',
      photoURL: null,
    }
    return persist(nextUser)
  }

  const loginWithGoogle = async () => {
    // No real OAuth popup — just creates a fake "Google" user instantly.
    const nextUser = {
      uid: makeUid('google'),
      displayName: 'Google User',
      email: 'googleuser@example.com',
      photoURL: null,
    }
    return persist(nextUser)
  }

  const logout = async () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  const updateUserProfile = async (updates) => {
    if (!user) return
    const nextUser = { ...user, ...updates }
    persist(nextUser)
  }

  const value = {
    user,
    isLoggedIn: !!user,
    authLoading,
    registerWithEmail,
    loginWithEmail,
    loginWithGoogle,
    logout,
    updateUserProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}