import React from 'react';
import { useLocation } from 'react-router-dom';
import useData from './Hooks/DataHook';
import LoadMoreButtons from './Components/LoadMoreButtons';
import Table from './Components/Table';
import Filters from './Components/Filters';

function App() {
  const initLocation = useLocation();
  const [data, currentPage, setCurrentPage, sortData, filterData] = useData(initLocation);

  return (
    <>
      <Filters
        filterData={filterData}
      />
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
