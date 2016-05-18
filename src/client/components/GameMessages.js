import React from 'react';

export default class GameMessages extends React.Component {
  render() {
    return (
      <div id="top-message">
        <div>
          <button onClick={this.requestDrawingPriveleges.bind(this)}>I want to draw!</button>
        </div>
        <div>
          Make a guess: <input id="guess" type="text" />
        </div>
        <div id="word"></div>
        <div id="guess-list">Guesses: </div>
      </div>
    );
  }

  requestDrawingPriveleges() {
    this.props.onDrawRequest();
  }
}
