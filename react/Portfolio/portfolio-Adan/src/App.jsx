import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import './styles.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header onNavClick={setCurrentPage} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;   