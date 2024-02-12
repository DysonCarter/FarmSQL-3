// QueryResult.js

const QueryResult = ({ queryResult }) => {
    const renderTableRows = () => {
      if (!queryResult || !queryResult.length) return null;
  
      return queryResult.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ));
    };
  
    return (
      <>
        {queryResult && (
          <div className="resultTable">
            <table>
              <thead>
                <tr>
                  {queryResult.length > 0 &&
                    Object.keys(queryResult[0]).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        )}
      </>
    );
  };
  
  export default QueryResult;
  