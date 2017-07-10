import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Distance  from './sensors/Distance';
import Temperature  from './sensors/Temperature';
import Camera from './sensors/Camera';

const styleSheet = createStyleSheet('Place', {
  grid: {
    flexGrow: 1,
    marginTop: 30,
  },
});

function Place(props) {
const { classes, id } = props; 
  return (
    <Grid container justify="center" gutter={24} className={classes.grid}>
      <Grid item xs={12} sm={5}>
        <Distance id={id} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Temperature id={id}/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Camera id={id} videoW={640} videoH={480} />
      </Grid>
    </Grid>
  );
}
Place.protoTypes = {
    id: PropTypes.string,
}

export default withStyles(styleSheet)(Place);
