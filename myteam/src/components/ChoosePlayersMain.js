import React, { Component } from 'react';
import '../App.css';

import DisplaySelectedLineup from './ChoosePlayers/DisplaySelectedLineup';



class SelectLineupMain extends Component {

  constructor() {
    super();

  }


  render() {
    return (

      <main className="wrapper">
        <div className="main">
          <DisplaySelectedLineup lineup={this.props.lineup}/>
        </div>
      </main>
    );
  }
}





export default SelectLineupMain;
