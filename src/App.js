import './App.css';
import Airline from './Pages/Airline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './Pages/Details';

function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <Routes>
        <Route exact path="/" element={<Airline/>} />
        <Route  path="/airline" element={<Airline/>} />
        <Route  path="/details" element={<Details/>} />

        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
