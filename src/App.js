// App.js
import React from 'react';
import './App.css'; // Import a CSS file for styling
import solanaLogo from './assets/solanaLogo.png';
import harmonyLogo from './assets/harmonyLogo.png';

function App() {
  return (
    <div className="app-container">
      <h1>Choose the Chain You want to create your token on</h1>
      <div className="chain-cards">
        {/* Solana Card */}
        <div className="chain-card solana">
          <img src={solanaLogo} alt="Solana Logo" className="chain-logo" />
          <h2>Solana</h2>
          <a 
            href="https://kilopi.net/forge/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="create-button"
          >
            Create Token on Solana
          </a>
        </div>

        {/* Harmony Card */}
        <div className="chain-card harmony">
          <img src={harmonyLogo} alt="Harmony Logo" className="chain-logo" />
          <h2>Harmony</h2>
          <a 
            href="https://kilopi.net/forge/harmony/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="create-button"
          >
            Create Token on Harmony
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
