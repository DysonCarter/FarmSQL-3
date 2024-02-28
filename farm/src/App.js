// App.js

import React, { useState } from 'react';
import './App.css';
import SqlTextBox from './components/SqlTextBox';
import Farmer from './components/Farmer';
import InstructionText from './components/InstructionText';

const App = () => {
  const [level, setLevel] = useState(1);

  const handleLevelChange = () => {
    // Increment the level when called
    setLevel(level + 1);
  };

  return (
    <div className='gameContainer'>
      <SqlTextBox />
      <div className='EmptyPen'></div>
      <Farmer/>
      <InstructionText level={level} onLevelChange={handleLevelChange} />
    </div>
  );
};

export default App;
