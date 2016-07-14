import React from 'react';

export default class Guessbox extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: ''
    };
  }
  
  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.submitGuess(this.state.guess);
      event.target.value = "";
      this.setState({guess: ''});
    } else {
      this.setState({
        guess: event.target.value
      });
    }
  } 
    
  render() {
    return (
      <div>
        Make a guess: <input 
          onKeyUp={this.handleKeyUp.bind(this)}
          type="text" 
        />
      </div>
    );
  }
    
}
