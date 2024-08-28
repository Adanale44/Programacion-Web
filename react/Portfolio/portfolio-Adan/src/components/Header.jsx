import React from 'react';

const Header = ({ onNavClick }) => {
  return (
    <header className='header' >
      <nav>
        <ul>
          <div className='button'>
          <li ><button onClick={() => onNavClick('home')}>Home</button></li>
          <li><button onClick={() => onNavClick('projects')}>Projects</button></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;