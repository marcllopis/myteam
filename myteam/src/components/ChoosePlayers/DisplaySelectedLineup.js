
import React, { Component } from 'react';
import '../../App.css';
import PlayerCard from './PlayerCard'
import styled, { css } from 'styled-components';
import { Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, Player11 } from '../../helpers/playerPositions';

let arrPlayers=[Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, Player11];

class DisplaySelectedLineup extends Component {

  constructor(props){
    super(props)
  }


  render() {

    return (
      <div className="lineup-display">

        {
          arrPlayers.map((Player, index) =>{
            return (
                <PlayerCard
                        lineup={this.props.lineup}
                        key={index}
                        playerIndex={index}
                />
            )
          })
        }

      </div>
    );
  }
}


export default DisplaySelectedLineup;
