// apiHelper.ts

const apiUrl = 'https://pokeapi.co/api/v2';

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

interface PokemonDetailsResponse {
  // Define the structure for detailed Pokemon information
  // For example, you might include fields like abilities, types, stats, etc.
  name: string;
  // Include other relevant fields
}

export const getPokemonList = async (): Promise<PokemonListResponse> => {
  const response = await fetch(`${apiUrl}/pokemon?limit=10`);
  const data: PokemonListResponse = await response.json();
  return data;
};

export const getPokemonDetails = async (pokemonName: string): Promise<PokemonDetailsResponse> => {
  const response = await fetch(`${apiUrl}/pokemon/${pokemonName}`);
  const data: PokemonDetailsResponse = await response.json();
  return data;
};
