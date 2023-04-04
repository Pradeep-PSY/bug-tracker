import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
