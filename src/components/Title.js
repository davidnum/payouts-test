import * as React from 'react';
import withStyles from 'react-jss';

const styles = theme => ({
  root: {
    display: 'block',
    color: theme.color.text.primary,
    fontSize: 39,
    fontFamily: theme.font.family.secondary,
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3
  }
});

const Title = ({ classes, children }) => <h1 className={classes.root}>{children}</h1>;

const wrapped = withStyles(styles)(Title);

export { wrapped as Title };
