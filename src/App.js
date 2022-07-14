import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComingSoon from './pages/comingsoon';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-oldLace">
          <Navbar/>
            <Routes>
              <Route path="/" element={<ComingSoon/>} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
