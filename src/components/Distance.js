import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { client } from '../lib/mqtt';

const styleSheet = createStyleSheet('Distance', theme => ({
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

class Distance extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      distance: 0,
    };
  }
  componentDidMount() {
    const self = this;
    // client.on('connect', function () {
    //     client.subscribe('/home/cave/sensors/distance');
    // });

    // client.on('message', function (topic, message) {
    //     if (topic === '/home/cave/sensors/distance')
    //         self.setState({ distance: message.toString()});
    // });
  }
  render() {
    return (
      <div>
        <Paper className={this.classes.root} elevation={4}>
          <Typography type="headline" className={this.classes.headline}>
            Distance
          </Typography>
          <Typography type="body1" className={this.classes.body}>
            {this.state.distance}
          </Typography>
        </Paper>
      </div>
    );
  }
}

Distance.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Distance);
