// App.js

import React from 'react';
import './App.css';
import SqlTextBox from './components/SqlTextBox';
import Farmer from './components/Farmer';

const App = () => {
  return (
    <div>
      <SqlTextBox />
      <div className='EmptyPen' />
      <Farmer></Farmer>
    </div>
  );
};

export default App;
