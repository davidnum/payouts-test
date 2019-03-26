import * as React from 'react';
import withStyles from 'react-jss';
import { Item } from './Item';
import { IntlText } from '../IntlText';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inner: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const Header = ({ classes, balance, children }) => (
  <header className={classes.root}>
    <div className={classes.inner}>
      <Item title={<IntlText id="balance" />} value={balance.balance} currency={balance.currency} />
      <Item title={<IntlText id="nextPay" />} value={balance.next_payout} currency={balance.currency} />
    </div>
    {children}
  </header>
);

const wrapped = withStyles(styles)(Header);

export { wrapped as Header };
