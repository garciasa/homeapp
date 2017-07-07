import React, { Component } from 'react';
import { client } from '../lib/mqtt';

class Distance extends Component {
    state = {
        distance: 0,
    };
    componentDidMount(){
        const self = this;
        // client.on('connect', function () {
        //     client.subscribe('/home/cave/sensors/distance');
        // });

        // client.on('message', function (topic, message) {
        //     if (topic === '/home/cave/sensors/distance')
        //         self.setState({ distance: message.toString()});
        // });  
    }
    render(){
        return(
            <h2>Sensor Distance: {this.state.distance}</h2>
        );
    }
}

export default Distance;