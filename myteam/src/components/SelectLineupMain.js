import React, { Component } from 'react';
import '../App.css';

import ChooseLineup from './SelectLineup/ChooseLineup';
import AcceptLineup from './SelectLineup/AcceptLineup';
import LineupDisplay from './SelectLineup/LineupDisplay';




class SelectLineupMain extends Component {

  constructor() {
    super();

  }


  render() {
    return (

      <main className="wrapper">
        <div className="main">
          <div className="choose-lineup">
            <ChooseLineup changeLineup={this.props.changeLineup} />
            <AcceptLineup acceptLineup={this.props.acceptLineup}/>
          </div>
          <div className="lineup-display">
            <LineupDisplay selectedLineup={this.props.lineup}/>
          </div>
        </div>
      </main>
    );
  }
}





export default SelectLineupMain;
