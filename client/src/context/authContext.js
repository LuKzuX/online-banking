import { createContext } from "react"
import { useEffect, useState } from "react"

export const AuthContext = createContext()

export const useAuthContext = createContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("")

  useEffect(() => {
    const savedToken = localStorage.getItem("user")
    setToken(savedToken)
  }, [])

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
