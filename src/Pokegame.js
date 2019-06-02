import React, { Component } from 'react';
import { shuffle, sumExp } from './helper';
import './Pokegame.css';
import Pokedex from './Pokedex';
import pokemon from './pokemon';

shuffle(pokemon);

const teamOne = pokemon.slice(0,4);
const teamTwo = pokemon.slice(4,);

function buildTeam(team) {
  return team.map((pokemon) => {
    return {
      ...pokemon,
      "isSelected": false
    }
  })
}

class Pokegame extends Component {
  constructor() {
    super();
    this.state = {
      "teamOne": buildTeam(teamOne),
      "teamTwo": buildTeam(teamTwo),
      "teamOneScore": 0,
      "teamTwoScore": 0
    }
    this.updateTeam = this.updateTeam.bind(this);
  }

  updateTeam(teamId, pokemonId) {
    let team = this.state[teamId];
    const teamScore = teamId + "Score";
    const newTeam = team.map((pokemon) => {
      return {
        ...pokemon,
        isSelected: ( pokemon.id === pokemonId ? !pokemon.isSelected : pokemon.isSelected )
      }
    });

    const newScore = sumExp(newTeam);

    this.setState({ [teamId]: newTeam, [teamScore]: newScore });
  }

  render() {
    let { teamOne, teamTwo, teamOneScore, teamTwoScore } = this.state;
    return (
      <div className="Pokegame">
        <div className="Pokegame-row">
          <Pokedex
            key="teamOne"
            team="teamOne"
            pokemon={teamOne}
            totalExp={ teamOneScore }
            isWinner={ teamOneScore > teamTwoScore}
            updateCard={this.updateTeam}
          />
        </div>
        <div className="Pokegame-row">
          <Pokedex
            key="teamTwo"
            team="teamTwo"
            pokemon={teamTwo}
            totalExp={teamTwoScore}
            isWinner={teamTwoScore > teamOneScore}
            updateCard={this.updateTeam}
          />
        </div>
      </div>
    );
  }
}


export default Pokegame;
