import React, { Component } from 'react';
import './Pokecard.css';
import { padStart } from './helper';
const POKE_IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.selectCard(this.props.id);
  }

  render() {
    const { id, name, type, exp, isSelected } = this.props;
    const pokeId = padStart(id, "0", 3);
    const imgSrc = `${POKE_IMG_API}${pokeId}.png`;

    return (
      <div 
        className={`Pokecard ${ isSelected ? 'Pokecard-selected' : ''}`}
        onClick={ this.handleClick }>
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
