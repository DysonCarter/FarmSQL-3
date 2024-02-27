// App.js

import React from 'react';
import './App.css';
import SqlTextBox from './components/SqlTextBox';
import Farmer from './components/Farmer';

const App = () => {
  return (
    <div>
      <Farmer></Farmer>
      <SqlTextBox />
      <div className='EmptyPen' />
    </div>
  );
};

export default App;
