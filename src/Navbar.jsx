import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" className="navbar-link">
          <h1>Coding Solutions Website</h1>
        </Link>
      </div>
      <div className='navbar-links'>
        <Link to="/" className="navbar-link"><button>Home</button></Link>
        <Link to="/solutions" className="navbar-link"><button>Solutions</button></Link>
        <Link to="/about" className="navbar-link"><button>About</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;