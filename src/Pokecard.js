import React, { Component } from 'react';
import './Pokecard.css';
const POKE_IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    const pokeId = id.toString().padStart(3, "0");
    const imgSrc = `${POKE_IMG_API}${pokeId}.png`;

    return (
      <div className="Pokecard">
        <div className="Pokecard-img">
          <img src={ imgSrc } alt={name} />
        </div>
        <h2 className="Pokecard-name">{name}</h2>
        <div className="Pokecard-data">Type: { type }</div>
        <div className="Pokecard-data">EXP: { exp } </div>
      </div>
    )
  }
}

export default Pokecard;
