import "./styles.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Main } from "./pages/main";
import { Signin } from "./pages/signin";
import { Home } from "./pages/home";
import { AuthContextProvider } from "./context/authContext";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./context/authContext";

function App() {
  const { token } = useAuthContext();
  console.log(token);
  return (
    <div>
      <Router>
        {token && <Navbar />}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
