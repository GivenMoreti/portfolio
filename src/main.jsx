import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d02492',
    },
    secondary: {
      main: '#0095ed',
    },
    background: {
      default: '#f5d6e6',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Noto Sans JP", "Comic Neue", cursive, sans-serif',
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
