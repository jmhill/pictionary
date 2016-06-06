import React from 'react';

export default class Guessbox extends React.Component {
  constructor() {
    super();
  }
    
  render() {
    return (
      <div>
        Make a guess: <input id="guess" type="text" />
      </div>
    );
  }
    
}
