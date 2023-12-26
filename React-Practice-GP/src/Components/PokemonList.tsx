// src/components/PokemonList.tsx

import React, { useState, useEffect } from 'react';
import { getPokemonList } from '../services/apiHelper';

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await getPokemonList();
      setPokemonList(response.results);
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
