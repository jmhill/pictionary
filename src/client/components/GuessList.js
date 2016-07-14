import React from 'react';

export default class GuessList extends React.Component {
  constructor() {
    super();
  }
    
  render() {
    console.log(this.props.guesses);
    console.log(typeof this.props.guesses);
    let guesses = this.props.guesses.map( (guess, index) => {
      return (<span key={index}>{guess + ', '}</span>)
    });
    return (
      <div className="messages">
        <span>Guesses: </span>
        {guesses}
      </div>
    );
  }
}