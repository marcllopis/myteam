import React, { Component } from 'react';
import '../../App.css';

import { Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, Player11 } from '../../helpers/playerPositions';

let players=[Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, Player11];

class PlayerCard extends Component {

  constructor(props){
    super(props)

    this.state = {lineup:this.props.lineup, playerPosition: "undefined", playerIndex:this.props.playerIndex}
  }

  componentWillReceiveProps() {
    this.setState({lineup:this.props.lineup})

  }

  render() {
    let component = players[this.state.playerIndex]
    console.log(this.state.playerIndex)
        return (
          <div>
            {React.createElement(component, {selectedLineup: this.state.lineup})}
          </div>
    )
  }
}

export default PlayerCard;
