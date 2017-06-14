import React, { Component } from 'react';
import './App.css';

import styled, { css } from 'styled-components';

import SelectLineupMain from './components/SelectLineupMain';
import ChoosePlayersMain from './components/ChoosePlayersMain';


class App extends Component {

  constructor() {
    super();
    this.state = {lineup: undefined, showLineup: false}

    this.changeLineup = this.changeLineup.bind(this)
    this.acceptLineup = this.acceptLineup.bind(this)

  }

  changeLineup(lineup){
    this.setState({lineup:lineup})
  }

  acceptLineup(){
    this.setState({showLineup: true})
  }

  render() {
    return (
      <div>
        <SelectLineupWrapper showLineup={this.state.showLineup}>
          <SelectLineupMain changeLineup={this.changeLineup}
                            acceptLineup={this.acceptLineup}
                            lineup={this.state.lineup}
          />
        </SelectLineupWrapper>

        <ChoosePlayersWrapper showLineup={this.state.showLineup}>
          <ChoosePlayersMain lineup={this.state.lineup} />
        </ChoosePlayersWrapper>

      </div>
    );
  }
}

const SelectLineupWrapper = styled.div`
  width:100%;
  heigth:100%;
  display: ${props => props.showLineup ? 'none' : 'inline-block'};
}`

const ChoosePlayersWrapper = styled.div`
  width:100%;
  heigth:100%;
  display: ${props => props.showLineup ? 'inline-block' : 'none'};
}`


export default App;
