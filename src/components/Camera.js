import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('Camera', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
  headline: {
    component: 'h3',
    marginBottom: 20,
    textAlign: "center",
  },
  body: {
    marginBottom: 16,
    fontSize: 25,
    color: theme.palette.text.secondary,
  },
}));

function Camera(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" className={classes.headline}>
          Camera
        </Typography>
        <video width={props.videoW} height={props.videoH}>
          <source src="movie.mp4" type="video/mp4" />
        </video>
      </Paper>
    </div>
  );
}

Camera.propTypes = {
  classes: PropTypes.object.isRequired,
  videoW: PropTypes.number,
  videoH: PropTypes.number,
};

export default withStyles(styleSheet)(Camera);
