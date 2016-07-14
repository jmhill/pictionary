import React from 'react';

import Guessbox from './Guessbox';
import GuessList from './GuessList';
import GameStatusControls from './GameStatusControls';

export default class GameInterface extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div id="top-message">
        <GameStatusControls
          onDrawRequest={this.props.onDrawRequest}
         />
         {this.props.word}
        <Guessbox 
          submitGuess={this.props.onGuessSubmit}
        />
        <GuessList
          guesses={this.props.guesses}
         />
      </div>
    );
  }

}
