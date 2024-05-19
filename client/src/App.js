import "./styles.css"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Main } from "./pages/main"
import { Signin } from "./pages/signin"
import { Protected } from "./pages/protected"
import { AuthContext } from "./context/authContext"

function App() {
  const [token, setToken] = useState("")

  useEffect(() => {
    const savedToken = localStorage.getItem("user")
    setToken(savedToken)
  }, [])
  return (
    <div>
      <AuthContext.Provider value={{ token, setToken }}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/protected' element={<Protected />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
