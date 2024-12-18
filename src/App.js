// App.js
import React from 'react';
import './App.css'; // Import a CSS file for styling
import solanaLogo from './assets/solanaLogo.png';
import harmonyLogo from './assets/harmonyLogo.png';
import binanceLogo from './assets/binanceLogo.png';

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


        <div className="chain-card binance">
          <img src={binanceLogo} alt="Binance Logo" className="chain-logo" />
          <h2>Binance Smart</h2>
          <a 
            href="https://kilopi.net/forge/binancesmart/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="create-button"
          >
            Create Token on BSC
          </a>
        </div>



      </div>
    </div>
  );
}

export default App;
