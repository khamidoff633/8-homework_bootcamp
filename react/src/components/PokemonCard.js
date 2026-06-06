import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-number">#{pokemon.num}</div>
      <div className="pokemon-image">
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <div className="pokemon-types">
          {pokemon.type.map((type, index) => (
            <span key={index} className={`type-badge type-${type.toLowerCase()}`}>
              {type}
            </span>
          ))}
        </div>
        <div className="pokemon-details">
          <p><strong>Bo'yi:</strong> {pokemon.height}</p>
          <p><strong>Vazni:</strong> {pokemon.weight}</p>
          {pokemon.candy && <p><strong>Candy:</strong> {pokemon.candy}</p>}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
