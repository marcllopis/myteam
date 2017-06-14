import React, { Component } from 'react';
import '../../App.css';


class ChooseLineup extends Component {

  render() {
    return (
      <div>
        <div className="lineup-row" >Choose your lineup</div>
        <div className="lineup-row highlight" onClick={function(){this.props.changeLineup("3-5-2")}.bind(this)} >3-5-2</div>
        <div className="lineup-row highlight" onClick={function(){this.props.changeLineup("4-3-3")}.bind(this)} >4-3-3</div>
        <div className="lineup-row highlight" onClick={function(){this.props.changeLineup("4-4-2")}.bind(this)} >4-4-2</div>
        <div className="lineup-row highlight" onClick={function(){this.props.changeLineup("5-4-1")}.bind(this)} >5-4-1</div>
      </div>

    );
  }
}

export default ChooseLineup;
