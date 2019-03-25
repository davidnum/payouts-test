import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);
