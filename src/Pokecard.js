import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { name, img, type, exp } = this.props;

    return (
      <div className="Pokecard">
        <h2 className="Pokecard-name">{ name }</h2>
        <img src={ img } />
        <p>Type: { type }</p>
        <p>EXP: { exp } </p>
      </div>
    )
  }
}

export default Pokecard;
