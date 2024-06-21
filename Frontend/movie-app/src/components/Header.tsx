import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { useAuth } from '../context/AuthContext';
import Logout from './Logout';

const Header: React.FC = () => {
  const { session } = useAuth()
  return (
    <header className="header">
      <nav>
        
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {!session ? (
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            </>

          ) : (
            <li><Logout/></li>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default Header;
