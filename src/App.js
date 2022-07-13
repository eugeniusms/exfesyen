import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import NavbarMobile from './components/Navbar/NavbarMobile';

function App() {
  return (
    <div className="App">
      <div className="bg-creamy">
      <NavbarMobile />
        <div className="flex justify-center py-24 px-6 gap-4 min-h-screen items-center">
          {/* <Card>
            <div className="flex justify-center p-6 gap-4">
              <Button preset="cancel">Cancel</Button>
              <Button preset="submit">Accept</Button>
            </div>
          </Card>
          <Card>
            <div className="flex justify-center p-6 gap-4">
              <Button preset="cancel">Cancel</Button>
              <Button preset="submit">Accept</Button>
            </div>
          </Card> */}
          <ShoppingCartIcon className="w-32 h-32" />
          <Header>
            Coming Soon!
          </Header>
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
