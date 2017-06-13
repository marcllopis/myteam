import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChooseLineup from './components/ChooseLineup';
import AcceptLineup from './components/AcceptLineup';
import LineupDisplay from './components/LineupDisplay';




class App extends Component {

  constructor() {
    super();
    this.state = {lineup: undefined}

    this.changeLineup = this.changeLineup.bind(this)
  }

  changeLineup(lineup){
    this.setState({lineup:lineup})
  }

  render() {
    return (

      <main className="wrapper">
        <div className="main">
          <div className="choose-lineup">
            <ChooseLineup changeLineup={this.changeLineup} />
            <AcceptLineup finalLineup={this.state.lineup}/>
          </div>
          <div className="lineup-display">
            <LineupDisplay selectedLineup={this.state.lineup}/>
          </div>
        </div>
      </main>
    );
  }
}





export default App;
