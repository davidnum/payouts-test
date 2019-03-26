import * as React from 'react';
import withStyles from 'react-jss';
import cn from 'classnames';

const styles = theme => ({
  root: {
    width: 300
  },
  inner: {
    position: 'relative'
  },
  label: {
    display: 'block',
    textTransform: 'uppercase',
    marginBottom: theme.spacing.unit,
    color: theme.color.text.secondary,
    fontSize: 11
  },
  input: {
    boxSizing: 'border-box',
    fontSize: 15,
    border: '1px solid #CFD2D9',
    color: theme.color.text.primary,
    borderRadius: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    minWidth: 300,
    height: 50,
    '&:focus': {
      outline: 'none',
      border: '1px solid #2F80ED',
      boxShadow: '0 0 5px #2F80ED'
    },
    '&:disabled': {
      backgroundColor: 'initial'
    },
    '&:read-only': {
      backgroundColor: 'initial',
      outline: 'none',
      border: '1px solid #CFD2D9',
      boxShadow: 'none'
    }
  },
  disabled: {
    cursor: 'default',
    userSelect: 'none',
    '&:focus': {
      backgroundColor: 'initial',
      outline: 'none',
      border: '1px solid #CFD2D9',
      boxShadow: 'none'
    }
  },
  icon: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: theme.spacing.unit * 2
  }
});

const Input = ({
  classes,
  className,
  placeholder,
  value = '',
  onChange = () => {},
  label,
  disabled = false,
  name,
  icon,
  inputRef
}) => (
  <div className={cn(classes.root, className)}>
    <label className={classes.label} htmlFor={name}>
      {label}
    </label>
    <div className={classes.inner}>
      <input
        ref={inputRef}
        className={cn(classes.input, { [classes.disabled]: disabled })}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        readOnly={disabled}
        name={name}
      />
      {icon && <div className={classes.icon}>{icon}</div>}
    </div>
  </div>
);

const wrapped = withStyles(styles)(Input);

export { wrapped as Input };
