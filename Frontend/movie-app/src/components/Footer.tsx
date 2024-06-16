import React from 'react';
import '../style/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Movie App</p>
    </footer>
  );
};

export default Footer;
