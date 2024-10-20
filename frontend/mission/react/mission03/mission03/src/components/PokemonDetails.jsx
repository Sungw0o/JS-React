import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(result.data);
    }
    fetchData();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height} decimetres</p>
      <p>Weight: {pokemon.weight} hectograms</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetails;
