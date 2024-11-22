import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Main } from "./pages/main";
import { Signin } from "./pages/signin";
import { Home } from "./pages/home";
import Navbar from "./components/Navbar";
import { CardDetails } from "./pages/cardPages/cardDetails";
import Transactions from "./pages/transactionPages/transactions";
import { Contacts } from "./pages/contactPages/contacts";
import { PayContact } from "./pages/contactPages/payContact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards/:id" element={<CardDetails/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/bank/pay-contact/:phone" element={<PayContact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
