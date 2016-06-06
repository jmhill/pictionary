import React from 'react';
import ReactDOM from 'react-dom';

import GameInterface from './components/GameInterface';
import DrawingArea from './components/DrawingArea';

const socket = io();

class PictionaryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      canDraw: false
    };
  }

  render() {
    return (
      <div>
        <GameInterface onDrawRequest={this.handleDrawRequest.bind(this)} />
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
