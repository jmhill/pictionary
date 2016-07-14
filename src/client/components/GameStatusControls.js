import React from 'react';

export default class GameStatusControls extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="control">
        <button onClick={this.props.onDrawRequest}>I want to draw!</button>
      </div>
    );
  }
}