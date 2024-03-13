import React, { useState } from 'react';
import axios from 'axios';
import QueryResult from './QueryResult';
import AnimalPen from './AnimalPen';
import ResetButton from './ResetButton';
import LevelChecker from './LevelChecker'; // Import the LevelChecker

const SqlTextBox = ({ onLevelChange }) => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [storedQuery, setStoredQuery] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0); // Set initial level as 0

  const handleSqlQueryChange = (event) => {
    setSqlQuery(event.target.value);
  };

  const executeSqlQuery = async () => {
    try {
      const response = await axios.post('http://localhost:3001/executeSqlQuery', { sqlQuery });
      setQueryResult(response.data);
      setStoredQuery(sqlQuery); // Update storedQuery with the current sqlQuery
      checkLevelCompletion(response.data);
    } catch (error) {
      console.error('Error executing SQL query:', error);
      setQueryResult(null);
    }
  };

  const isSelectQuery = (query) => {
    return query.trim().toUpperCase().startsWith('SELECT');
  };

  const handleButtonClick = () => {
    executeSqlQuery();
  };

  const checkLevelCompletion = (result) => {
    const isMatch = LevelChecker(result, currentLevel);

    if (isMatch) {
      setCurrentLevel(currentLevel + 1);
      onLevelChange(); // Notify parent component about level change
    }
  };

  return (
    <div>
      <textarea
        value={sqlQuery}
        rows={20}
        cols={50}
        className="SQLBox"
        onChange={handleSqlQueryChange}
      />
      <br/>
      <button onClick={handleButtonClick} className='SQLButton'>Run The Code</button>
      <ResetButton/>
      {isSelectQuery(storedQuery) && queryResult && (
        <>
          <QueryResult queryResult={queryResult}/>
          <AnimalPen animals={queryResult} />
        </>
      )}
    </div>
  );
};

export default SqlTextBox;
