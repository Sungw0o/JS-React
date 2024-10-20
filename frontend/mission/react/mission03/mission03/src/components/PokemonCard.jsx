import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: white;
`;

function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <Card>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </Card>
    </Link>
  );
}

export default PokemonCard;
