import * as React from 'react';
import withStyles from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  root: {
    marginRight: theme.spacing.unit * 2
  },
  title: {
    color: theme.color.text.secondary,
    fontSize: 13
  },
  value: {
    color: theme.color.text.primary,
    fontSize: 19,
    fontFamily: theme.font.family.secondary,
    marginTop: theme.spacing.unit
  }
});

const currencySymbols = {
  rub: '₽',
  usd: '$'
};

const Item = ({ classes, title, currency, value, className }) => (
  <div className={cn(classes.root, className)}>
    <p className={classes.title}>{title}</p>
    <p className={classes.value}>
      {value.toLocaleString()} {currencySymbols[currency]}
    </p>
  </div>
);

const wrapped = withStyles(styles)(Item);

export { wrapped as Item };
