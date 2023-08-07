import "./App.css";

import Airline from "./Pages/Airline";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Details from "./Pages/Details";

import HomePage from "./Pages/HomePage";

import Nav from "./Components/Nav";

import Footer from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";

import SignupPage from "./Pages/SignupPage";
import Airport from "./Pages/Airport.js";

function App() {
  return (
    <>
      <div className="flex-custom1">
        <Nav />
        <Router>
          <div className="flex-custom">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/home" element={<HomePage />} />

              <Route path="/airline" element={<Airline />} />

              <Route path="/details" element={<Details />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/airport" element={<Airport />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
