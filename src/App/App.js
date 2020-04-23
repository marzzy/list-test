import React from 'react';
import useData from './Hooks/LoadDataHook';
import LoadMoreButtons from './Components/LoadMoreButtons';
import Table from './Components/Table';

function App() {
  const [data, currentPage, setCurrentPage] = useData();

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
