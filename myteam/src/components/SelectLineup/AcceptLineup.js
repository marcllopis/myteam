import React, { Component } from 'react';
import '../../App.css';


class AcceptLineup extends Component {

  render() {
    return (
      <div>
        <div className="accept-button" onClick={function(){this.props.acceptLineup()}.bind(this)}>
          Accept!
        </div>
      </div>
    );
  }
}

export default AcceptLineup;
