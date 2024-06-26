import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <CharacterList />
    </div>
  );
};

export default App;