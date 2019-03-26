import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, JssProvider } from 'react-jss';

import 'babel-polyfill';
import 'typeface-roboto';
import 'typeface-rubik';

import App from './App';
import theme from './theme';
import globalSheet from './globalSheet';

ReactDOM.render(
  <JssProvider registry={globalSheet}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </JssProvider>,
  document.getElementById('app')
);
