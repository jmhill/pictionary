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
      <div>
        { !isGameInProgress &&
          <GameStatusControls
            onDrawRequest={this.props.onDrawRequest}
          />
        }
        <div className="messages">
          {this.props.word ? "Draw a " + this.props.word : null}
        </div>
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
