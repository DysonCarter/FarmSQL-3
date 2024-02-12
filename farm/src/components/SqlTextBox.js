// src/components/SqlTextBox.js

import React, { useState } from 'react';
import axios from 'axios';
import QueryResult from './QueryResult';
import AnimalPen from './AnimalPen';

const SqlTextBox = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSqlQueryChange = (event) => {
    setSqlQuery(event.target.value);
  };

  const executeSqlQuery = async () => {
    try {
      const response = await axios.post('http://localhost:3001/executeSqlQuery', { sqlQuery });
      setQueryResult(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setQueryResult(null);
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
      <button onClick={executeSqlQuery} className='SQLButton'>Run The Code</button>
      {error && <p>Error: {error}</p>}
      {queryResult && (
        <QueryResult queryResult={queryResult}/>
      )}
      {queryResult && (
        <AnimalPen animals={queryResult} />
      )}
    </div>
  );
};

export default SqlTextBox;
