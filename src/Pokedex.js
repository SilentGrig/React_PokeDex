import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);
  }

  updateCard(pokemonId) {
    this.props.updateCard(this.props.team, pokemonId);
  }

  render() {
    const { pokemon, totalExp, isWinner } = this.props;
    const winnerClassName = `Pokedex-${ isWinner ? 'Winning' : 'Losing' }`;

    return (
      <div className="Pokedex">
        <h2 className={winnerClassName}>{ isWinner ? 'Winning' : 'Losing' } Hand</h2>
        <p>Total Experience: { totalExp }</p>
        <div className="Pokedex-cards">
          { pokemon.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id} 
              name={p.name} 
              type={p.type} 
              exp={p.base_experience}
              isSelected={p.isSelected}
              selectCard={ this.updateCard }
            />
          )) }
        </div>
      </div>
    )
  }
}

export default Pokedex;
