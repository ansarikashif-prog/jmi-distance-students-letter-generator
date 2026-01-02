import React from 'react';

/**
 * Header Component
 * Displays the main application title
 * Fully responsive & semantic
 */
const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <h1 className="app-title">Student Academic Support Letter Generator</h1>
        <p className="app-subtitle">
          Generate letters to Demand Classes in Offline mode.
        </p>
      </div>
    </header>
  );
};

export default Header;
