import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Link to the CSS file


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>SwapBuddy</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
