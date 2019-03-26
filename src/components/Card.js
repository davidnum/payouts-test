import * as React from 'react';
import withStyles from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E5EC',
    boxSizing: 'border-box',
    borderRadius: theme.spacing.unit * 0.75,
    marginBottom: theme.spacing.unit * 2
  }
});

const Card = ({ classes, className, children }) => <div className={cn(classes.root, className)}>{children}</div>;

const wrapped = withStyles(styles)(Card);

export { wrapped as Card };
