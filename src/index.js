// index.js (или App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/system';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
