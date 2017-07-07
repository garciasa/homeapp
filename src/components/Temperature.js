import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { client } from '../lib/mqtt';

const styleSheet = createStyleSheet('Temperature', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
  headline: {
    component: "h3",
    marginBottom: 20,
    textAlign: "center",
  },
  body: {
    marginBottom: 16,
    fontSize: 25,
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));

class Temperature extends Component {
    constructor(props){
        super(props);
        this.classes = props.classes;
        this.state = {
            temperature: 0,
        };
    }
  componentDidMount() {
    const self = this;
    // client.on('connect', function () {
    //     client.subscribe('/home/cave/sensors/temperature');
    // });

    // client.on('message', function (topic, message) {
    //     if (topic === '/home/cave/sensors/temperature')
    //         self.setState({ temperature: message.toString()});
    // });
  }
  render() {
    return (
      <div> 
        <Paper className={this.classes.root} elevation={4}>
            <Typography type="headline" className={this.classes.headline}>
              Temperature
            </Typography>
            <Typography type="body1" className={this.classes.body}>
              {this.state.temperature}&#8451;
            </Typography>
          </Paper>
      </div>
    );
  }
}

Temperature.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Temperature);
