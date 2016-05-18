import React from 'react';
import ReactDOM from 'react-dom';

import GameMessages from './components/GameMessages';
import DrawingArea from './components/DrawingArea';

const socket = io();

class PictionaryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      canDraw: false
    }
  }

  render() {
    return (
      <div>
        <GameMessages onDrawRequest={this.handleDrawRequest.bind(this)} />
        <DrawingArea
          userCanDraw={this.state.canDraw}
          socket={socket} />
      </div>
    );
  }

  handleDrawRequest() {
    this.setState({canDraw: true})
  }
}

ReactDOM.render(<PictionaryApp />, document.getElementById('react-app'));
