import React from 'react';

import Guessbox from './Guessbox';
import GuessList from './GuessList';
import GameStatusControls from './GameStatusControls';

export default class GameMessages extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div id="top-message">
        <GameStatusControls
          onDrawRequest = {this.props.onDrawRequest}
         />
        <Guessbox />
        <GuessList />
      </div>
    );
  }

}
