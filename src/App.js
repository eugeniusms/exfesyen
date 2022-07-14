import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComingSoon from './pages/comingsoon';
import NavbarMobileNew from './components/Navbar/NavbarMobileNew';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-oldLace">
          <NavbarMobileNew/>
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
