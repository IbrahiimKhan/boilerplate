import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { Text } from 'react-native';
import theme from './theme';

const App = () => {
  return (
   <ThemeProvider theme={theme}><Text>app</Text></ThemeProvider>
  );
};

export default App;

