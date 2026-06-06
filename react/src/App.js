import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { pokemons } from './data/pokemons';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setPokemonData(pokemons);
    setFilteredPokemons(pokemons);
  }, []);

  const handleSearch = (searchTerm) => {
    const searchRegex = new RegExp(searchTerm, 'gi');
    const filtered = pokemons.filter(pokemon => 
      pokemon.name.match(searchRegex)
    );
    setFilteredPokemons(filtered);
    setIsSearched(true);
  };

  const handleReset = () => {
    setFilteredPokemons(pokemonData);
    setIsSearched(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Pokémon Dunyosi</h1>
        <p className="app-subtitle">Sevimli Pokémonlaringizni toping</p>
      </header>
      
      <SearchBar onSearch={handleSearch} />
      
      {isSearched && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button 
            onClick={handleReset}
            style={{
              padding: '10px 20px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Barchasini ko'rsatish
          </button>
          <p style={{ color: 'white', marginTop: '10px' }}>
            {filteredPokemons.length} ta Pokémon topildi
          </p>
        </div>
      )}
      
      <main>
        {filteredPokemons.length > 0 ? (
          <PokemonList pokemons={filteredPokemons} />
        ) : (
          <div style={{ 
            textAlign: 'center', 
            color: 'white', 
            fontSize: '1.2rem',
            marginTop: '50px'
          }}>
            Pokémon topilmadi! Boshqa so'z bilan urinib ko'ring.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
