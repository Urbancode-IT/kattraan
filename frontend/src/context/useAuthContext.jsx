import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next'

const AuthContext = createContext(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

const authSessionKey = '_KATTRAAN_AUTH_KEY_'

export function AuthProvider({ children }) {
  const navigate = useNavigate()

  const getSession = () => {
    const fetchedCookie = getCookie(authSessionKey)?.toString()
    return fetchedCookie ? JSON.parse(fetchedCookie) : null
  }

  const [user, setUser] = useState(getSession())

  const saveSession = (user) => {
    setCookie(authSessionKey, JSON.stringify(user))
    setUser(user)
  }

  const removeSession = () => {
    deleteCookie(authSessionKey)
    setUser(null)
    navigate('/auth/sign-in')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: hasCookie(authSessionKey), saveSession, removeSession }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
