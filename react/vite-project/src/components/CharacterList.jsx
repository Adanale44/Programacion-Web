import React, { useEffect, useState } from 'react';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setCharacters(data.results);
      })
      .catch(error => console.error('Error fetching the data: ', error));
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} className="character-image" />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;