import React from 'react';

const Header = ({ onNavClick }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><button onClick={() => onNavClick('home')}>Home</button></li>
          <li><button onClick={() => onNavClick('projects')}>Projects</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;