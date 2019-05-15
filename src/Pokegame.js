import React, { Component } from 'react';
import { shuffle, sumExp } from './helper';
import './Pokegame.css';
import Pokedex from './Pokedex';
import pokemon from './pokemon';

shuffle(pokemon);

const teamOne = pokemon.slice(0,4);
const teamTwo = pokemon.slice(4,);

const teamOneScore = sumExp(teamOne);
const teamTwoScore = sumExp(teamTwo);

class Pokegame extends Component {
  render() {
    return (
      <div className="Pokegame">
        <div className="Pokegame-row">
          <Pokedex 
            pokemon={teamOne}
            totalExp = {teamOneScore}
            isWinner={teamOneScore > teamTwoScore}
          />
        </div>
        <div className="Pokegame-row">
          <Pokedex 
            pokemon={teamTwo}
            totalExp = {teamTwoScore}
            isWinner={teamTwoScore > teamOneScore}
          />
        </div>
      </div>
    )
  }
}


export default Pokegame;
