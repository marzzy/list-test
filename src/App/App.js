import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useData from './Hooks/DataHook';
import LoadMoreButtons from './Components/LoadMoreButtons';
import Table from './Components/Table';
import Filters from './Components/Filters';

function App() {
  const initLocation = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, sortData, filterData, resetData] = useData(initLocation);

  return (
    <>
      <Filters
        filterData={filterData}
        resetData={resetData}
      />
      <Table 
        data={data}
        currentPage={currentPage}
        sortData={sortData}
      />
      {data.length === 0 && (
        <div>صبر کنید...</div>
      )}
      {data.length >= 10 && data && (
        <LoadMoreButtons
          setCurrentPage={setCurrentPage} currentPage={currentPage}
        />
      )}
      {!data &&
        <p>
          برای این جستجو داده ای پیدا نشد!
        </p>
      }
    </>
  );
}

export default App;
