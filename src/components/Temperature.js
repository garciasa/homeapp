import React, { Component } from 'react';
import { client } from '../lib/mqtt';

class Temperature extends Component {
    state = {
        temperature: 0,
    };
    componentDidMount(){
        const self = this;
        // client.on('connect', function () {
        //     client.subscribe('/home/cave/sensors/temperature');
        // });

        // client.on('message', function (topic, message) {
        //     if (topic === '/home/cave/sensors/temperature')
        //         self.setState({ temperature: message.toString()});
        // });  
    }
    render(){
        return(
            <h2>Sensor Temperature: {this.state.temperature}&#8451;</h2>
        );
    }
}

export default Temperature;