// InstructionText.js
import React from 'react';

const InstructionText = ({ level, onLevelChange }) => {
  const textGreen = "rgb(60, 186, 51)";

  const getInstructionForLevel = (level) => {
    switch (level) {
      case 1:
        return (
          <div>
            Welcome to <span style={{ color: 'green' }}>Level 1!</span><br />
            In this level, you will learn basic SQL queries. Try to select all records from a table using the SELECT statement.
          </div>
        );
      case 2:
        return (
          <div>
            Welcome to <span style={{ color: 'green' }}>Level 2!</span><br />
            In this level, you will learn about filtering data using the WHERE clause. Try to select records that meet specific conditions.
          </div>
        );
      default:
        return (
          <div>
            Welcome to <span style={{ color: textGreen }}>Farming With SQL!</span><br /><br />
            You're gonna be helping me sort out my new Farm using SQL! Let's start by taking a look at all my animals:<br/><br/>
            type "<span style={{ color: textGreen }}>SELECT * FROM farm</span>" in the textbox to the left and click the green button when you're finished!<br/><br/>
            If you ever mess up real bad you can click the <span style={{ color: 'red' }}>red</span> button to reset the whole farm.
          </div>
        );
    }
  };

  const handleButtonClick = () => {
    onLevelChange();
  };

  return (
    <div className="instruction-text">
      <div>{getInstructionForLevel(level)}</div>
    </div>
  );
};

export default InstructionText;
