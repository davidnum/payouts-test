import * as React from 'react';
import withStyles from 'react-jss';
import cn from 'classnames';
import IntlContext from '../../IntlContext';
import locales from '../../locales';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    padding: theme.spacing.unit,
    borderRadius: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    }
  },
  active: {
    backgroundColor: theme.color.primary,
    color: '#FFFFFF'
  }
});

const LocaleSwitcher = ({ classes, onChange }) => {
  const currentLocale = React.useContext(IntlContext);
  return (
    <div className={classes.root}>
      {Object.keys(locales).map(locale => (
        <button
          key={locale}
          className={cn(classes.button, { [classes.active]: currentLocale === locale })}
          onClick={() => onChange(locale)}
        >
          {locale}
        </button>
      ))}
    </div>
  );
};

const wrapped = withStyles(styles)(LocaleSwitcher);

export { wrapped as LocaleSwitcher };
