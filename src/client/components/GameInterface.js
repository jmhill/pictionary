import React from 'react';

import Guessbox from './Guessbox';
import GuessList from './GuessList';
import GameStatusControls from './GameStatusControls';

export default class GameInterface extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    let isDrawer = this.props.isDrawer;
    let isGameInProgress = this.props.isGameInProgress;
    return (
      <div id="top-message">
        { !isGameInProgress &&
          <GameStatusControls
            onDrawRequest={this.props.onDrawRequest}
          />
        }
        {this.props.word}
        { isGameInProgress && !isDrawer &&
          <Guessbox 
            submitGuess={this.props.onGuessSubmit}
          />
        }
        { isGameInProgress &&
          <GuessList
            guesses={this.props.guesses}
          />
        }
      </div>
    );
  }

}
