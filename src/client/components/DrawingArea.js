import React from 'react';

export default class DrawingArea extends React.Component {
  render() {
    return (
      <div>
        <canvas id="canvas"></canvas>
        <button id="clear">Clear Canvas</button>
      </div>
    )
  }
}
