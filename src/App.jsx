import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Green from "./components/Green";
import Purple from "./components/Purple";
import Home from "./components/Home";


function App() {
  return (
    <>
      <div>
          <Navbar />
      </div>
      <div id="container">
        <div id="main-section">
          <Routes>
            
            < Route path="/blue" element={<Blue />}/>
            < Route path="/red" element={<Red />}/>
            < Route path="/green" element={<Green />}/>
            < Route path="/purple" element={<Purple />}/>
            < Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </div>
      <div>
          <Footer />
      </div>
    </>
  )
}

export default App
