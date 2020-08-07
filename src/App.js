import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button>Button</Button>
      <Button size="large">Button</Button>
      <Button color="blue">Button</Button>
      <Button color="green">Button</Button>
      <Button color="red">Button</Button>
    </div>
  );
}

export default App;
