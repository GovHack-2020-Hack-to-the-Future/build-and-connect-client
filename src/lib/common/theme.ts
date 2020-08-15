import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002366',
    },
    secondary: {
      main: '#FFDF00',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F1F1F1',
    },
  },
});
