import React from 'react';
import useData from './Hooks/LoadDataHook';
import LoadMoreButtons from './Components/LoadMoreButtons';
import Table from './Components/Table';

function App() {
  const [data, currentPage, setCurrentPage, sortData] = useData();

  return (
    <div>
      <Table 
        data={data}
        currentPage={currentPage}
        sortData={sortData}
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
