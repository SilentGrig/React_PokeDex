import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Pokecard 
          name="Charmander"
          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          type="fire"
          exp={62}
        />
      </div>
    )
  }
}

export default Pokedex;
