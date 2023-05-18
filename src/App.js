import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUpPage";
import Pricing from "./pages/PricingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'

function App() {
  return (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/signup' exact element={<Home />} />
      <Route path='/pricing' exact element={<Home />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
