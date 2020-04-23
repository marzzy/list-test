import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';

const TableBodyRow = lazy(() => import('./TableBodyRow'));

function Loading() {
  return ( <div>صبر کنید...</div> )
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    import('../assets/data.json').then(response => {
      console.log('response', response)
      setData(response.default);
    });
  });

  return (
    <div>
      <table id="UserLog" role="table">
        <thead role="rowgroup">
          <tr role="row">
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
          {!data ? (
            <Loading />
          ) : (
            <Suspense fallback={<Loading />}>
              <TableBodyRow data={data.length > 15 ? data.splice(15) : data} />
            </Suspense>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
