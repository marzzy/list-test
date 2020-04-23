import React, { useState, useEffect } from 'react';
import LoadMoreButtons from './Components/LoadMoreButtons';
import Table from './Components/Table';

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import('../assets/data.json').then(response => {
      setData(response.default);
    });
  });

  return (
    <div>
      <Table 
        data={data}
        currentPage={currentPage}
      />
      {!data ? (
        <div>صبر کنید...</div>
      ) : (
        <LoadMoreButtons 
          setCurrentPage={setCurrentPage} currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
