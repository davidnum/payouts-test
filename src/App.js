import * as React from 'react';
import withStyles from 'react-jss';
import { Sidebar, Header, Title, BonusItem, FilterInput, IntlText, LocaleSwitcher } from './components';
import IntlContext from './IntlContext';
import data from './data';

const styles = theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row'
  },
  main: {
    overflow: 'auto',
    width: `calc(100% - ${theme.sidebarWidth}px)`
  },
  content: {
    padding: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 6
  },
  footer: {
    color: theme.color.text.secondary,
    fontSize: 13,
    paddingTop: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 8,
    borderTop: '1px solid #E9E9E9',
    textAlign: 'right'
  }
});

const App = ({ classes }) => {
  const [filter, setFilter] = React.useState('');
  const [locale, setLocale] = React.useState('ru');
  const filteredBonuses = React.useMemo(
    () => data.bonuses.filter(bonus => bonus.title.toLowerCase().includes(filter.toLocaleLowerCase())),
    [filter]
  );
  return (
    <IntlContext.Provider value={locale}>
      <div className={classes.root}>
        <Sidebar />
        <div className={classes.main}>
          <Header balance={data.header}>
            <LocaleSwitcher onChange={setLocale} />
          </Header>
          <div className={classes.content}>
            <Title>
              <IntlText id="services" />
            </Title>
            <FilterInput value={filter} onChange={setFilter} onReset={() => setFilter('')} />
            {filteredBonuses.map(bonus => (
              <BonusItem key={bonus.title} bonus={bonus} />
            ))}
            <footer className={classes.footer}>© Travelpayouts, 2011–2018</footer>
          </div>
        </div>
      </div>
    </IntlContext.Provider>
  );
};

export default withStyles(styles)(App);
