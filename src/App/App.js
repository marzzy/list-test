import React, { useState, useEffect, Suspense, lazy } from 'react';
import LoadMoreButtons from './LoadMoreButtons';
import './App.css';

const TableBodyRow = lazy(() => import('./TableBodyRow'));

function Loading() {
  return ( <div>صبر کنید...</div> )
}

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import('../assets/data.json').then(response => {
      setData(response.default);
    });
  });

  function handleMore() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
      <table id="UserLog" role="table">
        <thead role="rowgroup">
          <tr role="row">
            <th />
            <th role="columnheader">
              نام تغییر دهنده
            </th>
            <th role="columnheader">
              تاریخ
            </th>
            <th role="columnheader">
              نام آگهی
            </th>
            <th role="columnheader">
              فیلد
            </th>
            <th role="columnheader">مقدار قدیمی</th>
            <th role="columnheader">مقدار جدید</th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {data && (
            <Suspense fallback={null}>
              <TableBodyRow data={data.slice(0,10 * currentPage)} />
            </Suspense>
          )}
        </tbody>
      </table>
      {!data ? (
        <Loading />
      ) : (
        <LoadMoreButtons handleClick={handleMore} currentPage={currentPage} />
      )}
    </div>
  );
}

export default App;
