import * as React from 'react';
import locales from '../locales';
import IntlContext from '../IntlContext';

export const IntlText = ({ id }) => {
  const locale = React.useContext(IntlContext);
  return locales[locale][id];
};
