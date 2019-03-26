import * as React from 'react';
import withStyles from 'react-jss';
import Logo from './logo.svg';
import Circle from './circle.svg';
import { Item } from './Item';

const styles = theme => ({
  root: {
    width: theme.sidebarWidth,
    backgroundColor: '#1B1D29',
    height: '100%'
  },
  logo: {
    marginBottom: theme.spacing.unit * 2
  }
});

const menuItems = Array.from(Array(8).keys());

const Sidebar = ({ classes }) => (
  <nav className={classes.root}>
    <Item className={classes.logo}>
      <Logo />
    </Item>
    {menuItems.map(key => (
      <Item key={key}>
        <Circle />
      </Item>
    ))}
  </nav>
);

const wrapped = withStyles(styles)(Sidebar);

export { wrapped as Sidebar };
