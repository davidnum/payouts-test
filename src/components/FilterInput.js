import * as React from 'react';
import withStyles from 'react-jss';
import { Button } from './Button';
import { Input } from './Input';
import { IntlText } from './IntlText';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 3
  },
  button: {
    alignSelf: 'flex-end',
    marginLeft: theme.spacing.unit
  }
});

const FilterInput = ({ classes, value, onChange, onReset }) => (
  <div className={classes.root}>
    <Input label={<IntlText id="filter" />} value={value} onChange={onChange} />
    <Button className={classes.button} onClick={onReset}>
      <IntlText id="reset" />
    </Button>
  </div>
);

const wrapped = withStyles(styles)(FilterInput);

export { wrapped as FilterInput };
