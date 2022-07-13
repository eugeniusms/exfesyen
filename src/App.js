import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import React from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="bg-creamy">
      <Navbar />
        <div className="flex justify-center p-6 gap-4">
          <Card>
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
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
