import "./styles.css"
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Main } from "./pages/main"
import { Signin } from "./pages/signin"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
