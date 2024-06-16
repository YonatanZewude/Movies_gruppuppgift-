import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
