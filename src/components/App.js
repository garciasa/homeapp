import React, { Component } from 'react';
import Distance  from './Distance';
import Temperature  from './Temperature';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Distance />
          <Temperature />
        </div>
      </div>
    );
  }
}

export default App;
