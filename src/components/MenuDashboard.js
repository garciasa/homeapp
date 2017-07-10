import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class MenuDashboard extends React.Component {
  state = {
    open: false,
    anchorEl: undefined,
  };

  handleClick = event => {
    console.log(event);
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <IconButton color="contrast" aria-label="Menu" onClick={this.handleClick}>
        <MenuIcon />
        <Menu
          id="menuDashboard"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Cave</MenuItem>
          <MenuItem onClick={this.handleClose}>Girls Room</MenuItem>
          <MenuItem onClick={this.handleClose}>Main Room</MenuItem>
        </Menu>
      </IconButton>
    );
  }
}

export default MenuDashboard;
