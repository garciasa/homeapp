import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';
import Distance  from './Distance';
import Temperature  from './Temperature';
import Camera from './Camera';


const styleSheet = createStyleSheet('App', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  grid: {
    flexGrow: 1,
    marginTop: 30,
  },
});

function Dashboard(props) {
  const { classes } = props; 
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Home Automation
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" gutter={24} className={classes.grid}>
          <Grid item xs={12} sm={5}>
            <Distance />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Temperature />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Camera videoW={640} videoH={480} />
          </Grid>
        </Grid>
      </div>
    );
}

export default withStyles(styleSheet)(Dashboard);
