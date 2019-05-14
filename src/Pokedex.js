import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    const { pokemon, totalExp, isWinner } = this.props;
    const pokemonTeam = [];
    const winnerClassName = `Pokedex-${ isWinner ? 'Winning' : 'Losing' }`;

    for (let poke of pokemon) {
      const pokeId = poke.id.toString().padStart(3, "0")
      const pokemon_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId}.png`

      pokemonTeam.push(<Pokecard
        name={poke.name}
        img={pokemon_url}
        type={poke.type}
        exp={poke.base_experience}
      />);
    };
    return (
      <div className="Pokedex">
        <h2 className={winnerClassName}>{ isWinner ? 'Winning' : 'Losing' } Hand</h2>
        <p>Total Experience: { totalExp }</p>
        <div>
          {pokemonTeam}
        </div>
      </div>
    )
  }
}

export default Pokedex;
