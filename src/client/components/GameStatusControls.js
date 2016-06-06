import React from 'react';

export default class GameStatusControls extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <button onClick={this.requestDrawingPriveleges.bind(this)}>I want to draw!</button>
      </div>
    );
  }
  
  requestDrawingPriveleges() {
    this.props.onDrawRequest();
  }
}