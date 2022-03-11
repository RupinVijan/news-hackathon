import './App.css';
import Navbar from './components/Navbar';
import Newscomp from './pages/Newscomp';
import Weather from './pages/Weather';
import {useState} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [genre, setgenre] = useState("business");
  return (
    <>
    <Navbar  />

    <Router>
      <Routes>
        <Route path="/" element={<Newscomp />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
    {/* <Newscomp/> */}
    </>
  );
}

export default App;
