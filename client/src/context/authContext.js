import { createContext, useState, useEffect, useContext } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setToken(user)
    }
  }, [])
  console.log("Auth context state:", token)
  return (
    <AuthContext.Provider value={(token, setToken)}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    console.log("no context");
  }
  return context
}
