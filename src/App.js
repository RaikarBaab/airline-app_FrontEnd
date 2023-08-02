import './App.css';
import Airline from './Pages/Airline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './Pages/Details';
import HomePage from './Pages/HomePage'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Nav />
    <Router>
      <div className='App'>
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/home" element={<HomePage/>} />
        <Route  path="/airline" element={<Airline/>} />
        <Route  path="/details" element={<Details/>} />
        <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  );
}

export default App;
