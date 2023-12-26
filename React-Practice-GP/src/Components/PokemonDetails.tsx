// src/components/PokemonDetails.tsx

import React, { useState, useEffect } from 'react';
import { getPokemonDetails } from '../services/apiHelper';

interface PokemonDetailsProps {
  pokemonName: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonName }) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await getPokemonDetails(pokemonName);
        setPokemonDetails(response);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      {/* Display other details as needed */}
    </div>
  );
};

export default PokemonDetails;
