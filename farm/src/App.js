// App.js

import React from 'react';
import './App.css';
import SqlTextBox from './components/SqlTextBox';
import Farmer from './components/Farmer';

const App = () => {
  return (
    <div className='gameContainer'>
      <SqlTextBox />
      <div className='EmptyPen'></div>
    </div>
  );
};

export default App;
