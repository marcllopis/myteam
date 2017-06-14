
import React, { Component } from 'react';
import '../../App.css';

import styled, { css } from 'styled-components';
import { Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, Player11 } from '../../helpers/playerPositions';


class LineupDisplay extends Component {

  constructor(props){
    super(props)
  }


  render() {

    return (
      <div>

        <Player1 selectedLineup={this.props.selectedLineup}/>
        <Player2 selectedLineup={this.props.selectedLineup}/>
        <Player3 selectedLineup={this.props.selectedLineup}/>
        <Player4 selectedLineup={this.props.selectedLineup}/>
        <Player5 selectedLineup={this.props.selectedLineup}/>
        <Player6 selectedLineup={this.props.selectedLineup}/>
        <Player7 selectedLineup={this.props.selectedLineup}/>
        <Player8 selectedLineup={this.props.selectedLineup}/>
        <Player9 selectedLineup={this.props.selectedLineup}/>
        <Player10 selectedLineup={this.props.selectedLineup}/>
        <Player11 selectedLineup={this.props.selectedLineup}/>

      </div>
    );
  }
}



export default LineupDisplay;
