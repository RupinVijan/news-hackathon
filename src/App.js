import './App.css';
import Navbar from './components/Navbar';
import Newscomp from './pages/Newscomp';
import Weather from './pages/Weather';

function App() {
  return (
    <>
    <Navbar/>

    <Router>
      <Routes>
        <Route path="/" element={<Newscomp />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
    <Newscomp/>
    </>
  );
}

export default App;
