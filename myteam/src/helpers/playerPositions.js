import React, { Component } from 'react';

import styled, { css } from 'styled-components';


const BasicPlayer = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  position: absolute;
}`



// PLAYER 1

const lineupPositionTop1 = {
  '3-5-2': '1%',
  '4-3-3': '1%',
  '4-4-2': '1%',
  '5-4-1': '1%',
}

const lineupPositionLeft1 = {
  '3-5-2': '35%',
  '4-3-3': '45%',
  '4-4-2': '35%',
  '5-4-1': '45%',
}

const Player1 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop1[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft1[props.selectedLineup] : '0'};

}`

// PLAYER 2

const lineupPositionTop2 = {
  '3-5-2': '1%',
  '4-3-3': '5%',
  '4-4-2': '1%',
  '5-4-1': '20%',
}

const lineupPositionLeft2 = {
  '3-5-2': '55%',
  '4-3-3': '5%',
  '4-4-2': '55%',
  '5-4-1': '5%',
}

const Player2 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop2[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft2[props.selectedLineup] : '0'};

}`

// PLAYER 3

const lineupPositionTop3 = {
  '3-5-2': '20%',
  '4-3-3': '5%',
  '4-4-2': '20%',
  '5-4-1': '35%',
}

const lineupPositionLeft3 = {
  '3-5-2': '5%',
  '4-3-3': '85%',
  '4-4-2': '5%',
  '5-4-1': '30%',
}

const Player3 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop3[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft3[props.selectedLineup] : '0'};

}`

// PLAYER 4

const lineupPositionTop4 = {
  '3-5-2': '30%',
  '4-3-3': '30%',
  '4-4-2': '35%',
  '5-4-1': '35%',
}

const lineupPositionLeft4 = {
  '3-5-2': '25%',
  '4-3-3': '15%',
  '4-4-2': '30%',
  '5-4-1': '60%',
}

const Player4 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop4[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft4[props.selectedLineup] : '0'};

}`

// PLAYER 5

const lineupPositionTop5 = {
  '3-5-2': '35%',
  '4-3-3': '30%',
  '4-4-2': '35%',
  '5-4-1': '20%',
}

const lineupPositionLeft5 = {
  '3-5-2': '45%',
  '4-3-3': '75%',
  '4-4-2': '60%',
  '5-4-1': '85%',
}

const Player5 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop5[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft5[props.selectedLineup] : '0'};

}`


// PLAYER 6

const lineupPositionTop6 = {
  '3-5-2': '30%',
  '4-3-3': '40%',
  '4-4-2': '20%',
  '5-4-1': '60%',
}

const lineupPositionLeft6 = {
  '3-5-2': '65%',
  '4-3-3': '45%',
  '4-4-2': '85%',
  '5-4-1': '5%',
}

const Player6 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop6[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft6[props.selectedLineup] : '0'};

}`

// PLAYER 7

const lineupPositionTop7 = {
  '3-5-2': '20%',
  '4-3-3': '60%',
  '4-4-2': '60%',
  '5-4-1': '65%',
}

const lineupPositionLeft7 = {
  '3-5-2': '85%',
  '4-3-3': '5%',
  '4-4-2': '5%',
  '5-4-1': '25%',
}

const Player7 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop7[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft7[props.selectedLineup] : '0'};

}`

// PLAYER 8

const lineupPositionTop8 = {
  '3-5-2': '60%',
  '4-3-3': '65%',
  '4-4-2': '65%',
  '5-4-1': '65%',
}

const lineupPositionLeft8 = {
  '3-5-2': '15%',
  '4-3-3': '35%',
  '4-4-2': '35%',
  '5-4-1': '45%',
}

const Player8 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop8[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft8[props.selectedLineup] : '0'};

}`

// PLAYER 9

const lineupPositionTop9 = {
  '3-5-2': '60%',
  '4-3-3': '65%',
  '4-4-2': '65%',
  '5-4-1': '65%',
}

const lineupPositionLeft9 = {
  '3-5-2': '45%',
  '4-3-3': '55%',
  '4-4-2': '55%',
  '5-4-1': '65%',
}

const Player9 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop9[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft9[props.selectedLineup] : '0'};

}`

// PLAYER 10

const lineupPositionTop10 = {
  '3-5-2': '60%',
  '4-3-3': '60%',
  '4-4-2': '60%',
  '5-4-1': '60%',
}

const lineupPositionLeft10 = {
  '3-5-2': '75%',
  '4-3-3': '85%',
  '4-4-2': '85%',
  '5-4-1': '85%',
}

const Player10 = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: ${props => props.selectedLineup ? lineupPositionTop10[props.selectedLineup] : '0'};
  left: ${props => props.selectedLineup ? lineupPositionLeft10[props.selectedLineup] : '0'};

}`

// GOALKEEPER

const GoalKeeper = BasicPlayer.extend`
  display: ${props => props.selectedLineup ? 'inline-block' : 'none'};
  top: 85%;
  left: 45%;

}`



export {Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, GoalKeeper };
