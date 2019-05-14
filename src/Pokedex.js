import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
import pokemon from './pokemon';

const pokemonTeamOne = [];
const pokemonTeamTwo = [];

for (let i = 0; i < 4; i++) {
  const poke = pokemon[i];
  const pokemon_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`

  pokemonTeamOne.push(<Pokecard
    name={poke.name}
    img={pokemon_url}
    type={poke.type}
    exp={poke.base_experience}
  />);
};

for (let i = 4; i < 8; i++) {
  const poke = pokemon[i];
  const pokemon_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`

  pokemonTeamTwo.push(<Pokecard
    name={poke.name}
    img={pokemon_url}
    type={poke.type}
    exp={poke.base_experience}
  />);
};

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">Pokedex</h1>
        <div className="Pokedex-row">
          {pokemonTeamOne}
        </div>
        <div className="Pokedex-row">
          {pokemonTeamTwo}
        </div>
      </div>
    )
  }
}

export default Pokedex;
