import * as React from 'react';
import withStyles from 'react-jss';
import Clipboard from 'clipboard';
import { Card } from '../Card';
import { Input } from '../Input';
import Copy from './copy.svg';
import { Button } from '../Button';
import { IntlText } from '../IntlText';
import { copyToClipboard } from '../../utils';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `
        "title promocode button"
        "description promocode button"`,
    gridTemplateColumns: 'auto 324px 324px',
    gridColumns: '1fr 324px 324px'
  },
  title: {
    gridArea: 'title',
    display: 'block',
    fontWeight: 300,
    fontSize: 29,
    gridRow: 1,
    gridColumn: 1
  },
  description: {
    gridArea: 'description',
    display: 'block',
    fontSize: 15,
    color: theme.color.text.secondary,
    gridRow: 2,
    gridColumn: 1
  },
  promocode: {
    gridArea: 'promocode',
    gridRow: 1,
    gridRowSpan: 2,
    gridColumn: 2
  },
  button: {
    gridArea: 'button',
    width: 300,
    alignSelf: 'flex-end',
    gridRowAlign: 'end',
    gridRow: 1,
    gridRowSpan: 2,
    gridColumn: 3
  }
});

const BonusItem = ({ classes, bonus }) => {
  const promocodeInput = React.useRef(null);
  React.useEffect(() => {
    const clipboard = new Clipboard(promocodeInput.current, {
      target: () => promocodeInput.current
    });

    return () => {
      clipboard.destroy();
    };
  }, [promocodeInput]);
  return (
    <Card className={classes.root}>
      <span className={classes.title}>{bonus.title}</span>
      <span className={classes.description}>{bonus.description}</span>
      <Input
        className={classes.promocode}
        inputRef={promocodeInput}
        label={<IntlText id="promocode" />}
        value={bonus.promocode}
        disabled
        icon={<Copy />}
      />
      <Button className={classes.button} variant="raised">
        <IntlText id="getBonus" />
      </Button>
    </Card>
  );
};

const wrapped = withStyles(styles)(BonusItem);

export { wrapped as BonusItem };
