import React, { useState } from 'react';
import axios from 'axios';
import QueryResult from './QueryResult';
import AnimalPen from './AnimalPen';

const SqlTextBox = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [storedQuery, setStoredQuery] = useState('');
  const [queryResult, setQueryResult] = useState(null);

  const handleSqlQueryChange = (event) => {
    setSqlQuery(event.target.value);
  };

  const executeSqlQuery = async () => {
    try {
      const response = await axios.post('http://localhost:3001/executeSqlQuery', { sqlQuery });
      setQueryResult(response.data);
      setStoredQuery(sqlQuery); // Update storedQuery with the current sqlQuery
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
