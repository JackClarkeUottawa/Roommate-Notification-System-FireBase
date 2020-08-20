import React from 'react';
import logo from './logo.svg';
import './App.css';
import "/__/firebase/7.19.0/firebase-app.js";
import "/__/firebase/7.19.0/firebase-analytics.js";
import "/__/firebase/init.js";
import "react-bootstrap";
import "./navBar/NavBar"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
