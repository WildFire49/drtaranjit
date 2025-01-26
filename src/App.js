import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vision from './components/Vision';
import Services from './components/Services';
import Contact from './components/Contact';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        <Home />
        <Vision />
        <Services />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
