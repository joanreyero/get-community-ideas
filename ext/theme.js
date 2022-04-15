import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e94f2e',
    },
    secondary: {
      main: '#e94f2e',
    },
    background: {
      default: '#140505',
      paper: '#140505',
    },
    text: {
      primary: '#f8f8f8',
    },
    divider: 'rgba(89,158,69,0)',
  },
  typography: {
    h1: {
      fontFamily: 'Space Grotesk',
    },
    body1: {
      fontFamily: 'Inter',
    },
    body2: {
      fontFamily: 'Inter',
    },
    h2: {
      fontFamily: 'Space Grotesk',
    },
    h3: {
      fontFamily: 'Space Grotesk',
    },
    h4: {
      fontFamily: 'Space Grotesk',
    },
    h5: {
      fontFamily: 'Space Grotesk',
    },
    h6: {
      fontFamily: 'Space Grotesk',
    },
    subtitle1: {
      fontFamily: 'Space Grotesk',
    },
    button: {
      fontFamily: 'Space Grotesk',
    },
    caption: {
      fontFamily: 'Inter',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
})

export default theme;