import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuDashboard from './MenuDashboard';
import Place from './Place';


const styleSheet = createStyleSheet('App', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

function Dashboard(props) {
  const { classes } = props; 
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <MenuDashboard />
            <Typography type="title" color="inherit" className={classes.flex}>
              Home Automation
            </Typography>
          </Toolbar>
        </AppBar>
        <Place id="cave" />
      </div>
    );
}

export default withStyles(styleSheet)(Dashboard);
