import * as React from 'react';
import withStyles from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const Item = ({ classes, children, className }) => <div className={cn(classes.root, className)}>{children}</div>;

const wrapped = withStyles(styles)(Item);

export { wrapped as Item };
