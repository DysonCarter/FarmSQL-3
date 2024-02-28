// InstructionText.js
import React from 'react';

const InstructionText = ({ level, onLevelChange }) => {
  const getInstructionForLevel = (level) => {
    switch (level) {
      case 1:
        return 'Welcome to Level 1! In this level, you will learn basic SQL queries. Try to select all records from a table using the SELECT statement.';
      case 2:
        return 'Welcome to Level 2! In this level, you will learn about filtering data using the WHERE clause. Try to select records that meet specific conditions.';
      default:
        return 'Welcome to Farming With SQL! You\'re gonna be helping me sort out my new Farm using SQL! Let\'s start by taking a look at all my animals: type "SELECT * FROM farm" and click the green button when you\'re finished!';
    }
  };

  const handleButtonClick = () => {
    // Call the onLevelChange function to move to the next level
    onLevelChange();
  };

  return (
    <div className="instruction-text">
      <p>{getInstructionForLevel(level)}</p>
      {level < 2 && <button onClick={handleButtonClick}>Next Level</button>}
    </div>
  );
};

export default InstructionText;
