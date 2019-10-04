/**
 * theme.ts
 *
 * @description Material UI theme for INDOT React projects.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0c2440',
      light: '#08192c',
      dark: '#3c4f66',
    },
    secondary: {
      main: '#cfa926',
      light: '#d8ba51',
      dark: '#90761a',
      contrastText: '#ffffff',
    },
    error: {
      main: pink[600],
    },
    background: {
      paper: '#fff',
      default: '#e1e2e1',
    },
  },
  typography: {
    h1: {
      color: '#fff',
    },
    h2: {
      color: '#fff',
    },
    h3: {
      color: '#fff',
    },
    h4: {
      color: '#fff',
    },
    h5: {
      color: '#fff',
    },
    h6: {
      color: '#fff',
    },
  },
});
