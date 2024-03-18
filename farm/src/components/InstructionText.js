// InstructionText.js

import React from 'react';

const InstructionText = ({ level, onLevelChange }) => {
  const textGreen = "rgb(60, 186, 51)";

  const getInstructionForLevel = (level) => {
    switch (level) {
      case 1:
        return (
          <div>
            <span style={{ color: textGreen }}>Well Done!</span><br/><br/>
            The keyword <span style={{ color: textGreen }}>SELECT</span> is what you use to pick out data from your database, and <span style={{ color: textGreen }}>FROM farm</span> specificies you're choosing data from the database "<span style={{ color: textGreen }}>farm</span>" <br/><br/>
            In SQL the star "<span style={{ color: textGreen }}>*</span>" represents all attributes,<br/><br/>
            You can also pick specific attributes. Show me all of the names in my farm, and <span style={{ color: 'red' }}>ONLY</span> the names! <br/><br/>
            <span style={{ color: "rgb(50,50,50)"}}>SELECT (Which Attribute?) FROM farm</span>
          </div>
        );
      case 2:
        return (
          <div>
            OH NO<span style={{ color: 'red' }}>!!!</span> They're all ugly<span style={{ color: 'red' }}>!!!</span> <br/><br/>
            Pick me out the colors instead of the names.
          </div>
        );
      case 3:
        return (
          <div>
            3
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
