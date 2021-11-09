import React from 'react';
import { ThemeProvider } from '@creditas-ui/system';
import { standard } from '@creditas-ui/themes';
import { Spotlight } from './Spotlight';

const App = (props) => {
  return (
    <ThemeProvider theme={standard}>
      <Spotlight />
    </ThemeProvider>
  );
};

export { App };
