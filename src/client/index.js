import React from 'react';
import ReactDOM from 'react-dom';

class PictionaryApp extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <p>Hello React</p>
      </div>
    );
  }
}

ReactDOM.render(<PictionaryApp />, document.getElementById('react-app'));
