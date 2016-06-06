import React from 'react';

import Guessbox from './Guessbox';
import GuessList from './GuessList';
import GameStatusControls from './GameStatusControls';

export default class GameMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      currrentGameWord: null
    }
  }
  
  componentDidMount() {
    let self = this;
    
    this.props.socket.on('drawer', function(word) {
      self.setState({
        currentGameWord: word
      });   
    });
  }
  
  render() {
    return (
      <div id="top-message">
        <GameStatusControls
          onDrawRequest = {this.props.onDrawRequest}
         />
        {this.state.currentGameWord}
        <Guessbox />
        <GuessList />
      </div>
    );
  }

}
