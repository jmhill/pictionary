import React from 'react';
import ReactDOM from 'react-dom';

import GameInterface from './components/GameInterface';
import DrawingArea from './components/DrawingArea';

const socket = io();

class PictionaryApp extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      guesses: [],
      gameInProgress: false,
      isDrawer: false,
      lastDrawingCoordinate: null
    };
  }
  
  componentDidMount() {
    console.log("App mounted with gameId: " + this.props.gameId);
    socket.emit('app:init', this.props.gameId);
    // All of our socket listeners go here.
    socket.on('game:start', this._beginGame.bind(this));
    socket.on('game:guess', this._receiveGuess.bind(this));
    socket.on('game:draw', this._receiveDrawing.bind(this));
  }
  
  _beginGame(word, isDrawer) {
    this.setState({word, gameInProgress: true, isDrawer});
  }
  
  _receiveGuess(guess) {
    let {guesses} = this.state;
    guesses.push(guess);
    this.setState({guesses});
  }
  
  _receiveDrawing(position) {
    console.log("received a draw event at coords ", position);
    this.setState({
      lastDrawingCoordinate: position
    })
  }

  handleDrawRequest() {
    socket.emit('game:start');
  }
  
  handleDrawing(position) {
    socket.emit('game:draw', position);
  }
  
  handleGuessSubmit() {
    socket.emit('game:guess');
  }

  render() {
    return (
      <div>
        <GameInterface 
          onDrawRequest={this.handleDrawRequest.bind(this)}
          onGuessSubmit={this.handleGuessSubmit.bind(this)}
          word={this.state.word}
        />
        <DrawingArea
          userCanDraw={this.state.isDrawer}
          onDraw={this.handleDrawing.bind(this)}
          onReceivedDrawing={this.state.lastDrawingCoordinate}
        />
      </div>
    );
  }
}

ReactDOM.render(<PictionaryApp gameId={window.gameId} />, document.getElementById('react-app'));
