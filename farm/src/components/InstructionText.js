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
            The keyword <span style={{ color: textGreen }}>SELECT</span> is what you use to pick out data from your database, and <span style={{ color: textGreen }}>FROM farm</span> specifies you're choosing data from the database "<span style={{ color: textGreen }}>farm</span>" <br/><br/>
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
            <span style={{ color: textGreen }}>Well Done!</span> You can also select multiple attributes by seperating each attribute with a comma <br/><br/>
            Try this out, show me the color, size, and animal type (animal) of each animal in the farm <br/><br/>
            <span style={{ color: 'red' }}>DO NOT</span> show me the id or name!
          </div>
        );
      case 4:
        return (
          <div>
            <span style={{ color: textGreen }}>I think you've got it!</span> That's the basics of selecting attributes, now let's narrow down our selection. <br/><br/>
            After writing out your selection you can add a condition. Just write <span style={{ color: textGreen }}>WHERE</span> and then your condition after your query. <br/><br/>
            If you only want the pigs from the farm you could say (QUERY)<span style={{ color: textGreen }}> WHERE animal = "Pig"</span> <br/><br/>
            <span style={{ color: 'red' }}>Try it out</span>: Show me all the attributes of the Brown animals.
          </div>
        );
      case 5:
        return (
          <div>
            Well Done 5
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
