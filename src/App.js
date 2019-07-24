import React from 'react';
import './App.css';
import Socket from './Socket';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <Socket />
      </header>
    </div>
  );
}

export default App;
