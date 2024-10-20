import axios from 'axios';

export const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

export const getAllPokemon = async (limit = 100) => {
  const promises = [];
  for (let i = 1; i <= limit; i++) {
    promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }
  const results = await Promise.all(promises);
  return results.map(result => result.data);
};
