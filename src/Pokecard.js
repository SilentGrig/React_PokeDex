import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { name, img, type, exp } = this.props;

    return (
      <div className="Pokecard">
        <div className="Pokecard-img-div">
          <img className="Pokecard-img" src={img} alt={name} />
        </div>
        <h2 className="Pokecard-name">{name}</h2>
        <p className="Pokecard-p">Type: { type }</p>
        <p className="Pokecard-p">EXP: { exp } </p>
      </div>
    )
  }
}

export default Pokecard;
