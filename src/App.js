import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center p-6 gap-6">
        <Button preset="cancel">Cancel</Button>
        <Button preset="submit">Accept</Button>
      </div>
    </div>
  );
}

export default App;
