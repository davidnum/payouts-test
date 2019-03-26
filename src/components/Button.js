import * as React from 'react';
import withStyles from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  root: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    minWidth: 150,
    height: 50,
    borderRadius: theme.spacing.unit / 2,
    fontSize: 19,
    '&:focus': {
      outline: 'none'
    }
  },
  transparent: {
    border: '1px solid #CFD2D9',
    backgroundColor: 'transparent'
  },
  raised: {
    color: '#FFFFFF',
    backgroundColor: theme.color.primary
  }
});

const Button = ({ classes, className, children, variant = 'transparent', ...rest }) => (
  <button className={cn(classes.root, className, { [classes[variant]]: true })} {...rest}>
    {children}
  </button>
);

const wrapped = withStyles(styles)(Button);

export { wrapped as Button };
