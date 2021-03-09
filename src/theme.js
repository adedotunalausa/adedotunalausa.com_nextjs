import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Open Sans',
      'Inter',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#0062FF',
    },
    secondary: {
      main: '#5B6E80',
    },
    movingText: {
      main: '#00083D',
    },
    inherit: {
      main: '#0062FF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export const darkTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Open Sans',
      'Inter',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#E0E0E0',
    },
    secondary: {
      main: '#A0A0A0',
    },
    movingText: {
      main: '#01DFFC',
    },
    inherit: {
      main: '#41bbff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
    },
  },
});