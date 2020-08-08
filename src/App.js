import React from 'react';
import './App.css';
import Button from './Button';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <Box css={{ display: 'flex', mb: 6 }}>
        <Button css={{ mr: 6 }}>Button</Button>
        <Button size="large" css={{ mr: 6 }}>Button</Button>
      </Box>
      <Box css={{ display: 'flex' }}>
        <Button css={{ mr: 6 }}>Button</Button>
        <Button color="blue" css={{ mr: 6 }}>Button</Button>
        <Button color="green" css={{ mr: 6 }}>Button</Button>
        <Button color="red" css={{ mr: 6 }}>Button</Button>
      </Box>
    </div>
  );
}

export default App;
