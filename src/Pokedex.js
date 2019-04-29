import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

const pokemonTeamOne = [];
const pokemonTeamTwo = [];

for (let i = 0; i < 4; i++) {
  pokemonTeamOne.push(<Pokecard
    name="Charmander"
    img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    type="fire"
    exp={62}
  />);
};

for (let i = 0; i < 4; i++) {
  pokemonTeamTwo.push(<Pokecard
    name="Charmander"
    img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    type="fire"
    exp={62}
  />);
};

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
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
