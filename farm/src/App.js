// App.js

import React, { useState } from 'react';
import './App.css';
import SqlTextBox from './components/SqlTextBox';
import Farmer from './components/Farmer';
import InstructionText from './components/InstructionText';

const App = () => {
  const [level, setLevel] = useState(0); // Start level from 0

  const handleLevelChange = () => {
    // Increment the level when called
    setLevel(level + 1);
  };

  return (
    <div className='gameContainer'>
      <SqlTextBox onLevelChange={handleLevelChange} /> {/* Pass onLevelChange function to SqlTextBox */}
      <div className='EmptyPen'></div>
      <Farmer />
      <InstructionText level={level} onLevelChange={handleLevelChange} />
    </div>
  );
};

export default App;
