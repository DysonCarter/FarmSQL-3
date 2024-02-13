// App.js

import React from 'react';
import './App.css';
import SqlTextBox from './components/SqlTextBox';
import Farmer from './components/Farmer';
import AnimalPen from './components/AnimalPen';

const App = () => {
  return (
    <div>
      <SqlTextBox />
      <div className='EmptyPen' />
      <Farmer />
    </div>
  );
};

export default App;
