import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ff', // Neon blue
    },
    secondary: {
      main: '#0ff',
    },
    background: {
      default: '#f5fafd',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", Arial',
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
