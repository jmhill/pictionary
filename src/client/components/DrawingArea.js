import React from 'react';

export default class DrawingArea extends React.Component {
  constructor() {
    super();
    this.state = {
      isDrawing: false,
      context: null
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

        <button onClick={this.clearCanvas.bind(this)}>Clear Canvas</button>
      </div>
    );
  }

  componentDidMount() {
    let context = this.refs.canvas.getContext('2d');
    this.setState({context});

    this.props.socket.on('draw', function(position) {
      this._draw(position).bind(this);
    });
  }

  draw(event) {
    if (this.props.userCanDraw) {
      let position = {
        x: event.pageX - this.refs.canvas.offsetLeft,
        y: event.pageY - this.refs.canvas.offsetTop
      };
      if (this.state.isDrawing) {
        this._draw(position);
        this.props.socket.emit('draw', position);
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
    context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
  }

}
