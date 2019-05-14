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
const [teamOneWinner, teamTwoWinner] = teamOneScore > teamTwoScore? [true, false] : [false, true];

class Pokegame extends Component {
  render() {
    return (
      <div className="Pokegame">
        <div className="Pokegame-row">
          <Pokedex 
            pokemon={teamOne}
            totalExp = {teamOneScore}
            isWinner={teamOneWinner}
          />
        </div>
        <div className="Pokegame-row">
          <Pokedex 
            pokemon={teamTwo}
            totalExp = {teamTwoScore}
            isWinner={teamTwoWinner}
          />
        </div>
      </div>
    )
  }
}


export default Pokegame;
