import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import CurrencyConverter from './components/CurrencyConverter';
import ExchangeRateComponent from './components/CurrencyConverter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
     
      <ExchangeRateComponent/>
      
    </div>
  );
};

export default App;