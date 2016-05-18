import React from 'react';
import ReactDOM from 'react-dom';

import GameMessages from './components/GameMessages';
import DrawingArea from './components/DrawingArea';

class PictionaryApp extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <GameMessages />
        <DrawingArea />
      </div>
    );
  }
}

ReactDOM.render(<PictionaryApp />, document.getElementById('react-app'));
