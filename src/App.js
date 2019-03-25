import * as React from 'react';
import withStyles from 'react-jss';

const styles = theme => ({
  root: {
    color: theme.color.primary
  }
});

const App = ({ classes }) => <div className={classes.root}>Payouts</div>;

export default withStyles(styles)(App);
