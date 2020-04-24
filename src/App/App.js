import React from 'react';
import { useLocation } from 'react-router-dom';
import useData from './Hooks/DataHook';
import LoadMoreButtons from './Components/LoadMoreButtons';
import Table from './Components/Table';

function App() {
  const initLocation = useLocation();
  const [data, currentPage, setCurrentPage, sortData] = useData(initLocation);

  return (
    <>
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
    </>
  );
}

export default App;
