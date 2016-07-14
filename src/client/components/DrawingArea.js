import React from 'react';

export default class DrawingArea extends React.Component {
  constructor() {
    super();
    this.state = {
      context: null,
      isDrawing: false
    };
  }

  render() {
    return (
      <div>
        <canvas
          width="800"
          height="600"
          ref="canvas"
          onMouseDown={this.startDrawing.bind(this)}
          onMouseUp={this.stopDrawing.bind(this)}
          onMouseMove={this.draw.bind(this)}
        ></canvas>
        <div className="control">
          <button onClick={this.clearCanvas.bind(this)}>Clear Canvas</button>
        </div>
      </div>
    );
  }
  
  // In order to interact with the canvas, we have to store a reference in the
  // React Component. For now, we get the canvas context once when the component
  // first mounts and store it in the component state; not sure if this is the 
  // best way to do it but it works for now.
  componentDidMount() {
    let context = this.refs.canvas.getContext('2d');
    this.setState({context});
  }
  
  // The parent app component has a state property that holds the last received
  // draw event coordinate (delivered via socket.io). When the state updates,
  // it passes down that coordinate as prop to the drawing area.
  componentDidUpdate(previousProps, previousState) {
    console.log("drawing area updated");
    
    // Check to see if the application state has a last coordinate.
    // If so, draw that last coordinate.
    if (previousProps.onReceivedDrawing != null) {
      this._draw(previousProps.onReceivedDrawing);
    }
  }

  draw(event) {
    if (this.props.userCanDraw) {
      let position = {
        x: event.pageX - this.refs.canvas.offsetLeft,
        y: event.pageY - this.refs.canvas.offsetTop
      };
      if (this.state.isDrawing) {
        this._draw(position);
        this.props.onDraw(position);
      }
    }
  }

  _draw(position) {
    let context = this.state.context;
    context.beginPath();
		context.arc(position.x, position.y, 6, 0, 2 * Math.PI);
		context.fill();
  }

  startDrawing() {
    this.setState({isDrawing: true});
  }

  stopDrawing() {
    this.setState({isDrawing: false});
  }

  clearCanvas() {
    this.state.context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
  }

}
