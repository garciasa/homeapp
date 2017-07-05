import React, { Component } from 'react';
import { client } from '../lib/mqtt';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
    };
  }
  componentDidMount() {
    const self = this;

    client.on('connect', function () {
      client.subscribe('/home/cave/sensors/distance');
    })

    client.on('message', function (topic, message) {
      // message is Buffer
      // console.log(message.toString());
      self.setState({ distance: message.toString()});
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sensor Distance: {this.state.distance}</h2>
        </div>
      </div>
    );
  }
}

export default App;
