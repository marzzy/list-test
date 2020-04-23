import React, { Suspense, lazy } from 'react';
import useStar from '../Hooks/StarHook';
import './Table.css';

const TableBodyRows = lazy(() => import('./TableComponents/TableBodyRows'));

function Table({ data, currentPage }) {
  const [staredItems, handleToggleStar] = useStar();
  
  return (
    <table id="UserLog" role="table">
      <thead>
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
      <tbody>
        {data && (
          <Suspense fallback={null}>
            <TableBodyRows
              data={data.slice(0, 10 * currentPage)}
              onToggleStar={handleToggleStar}
              staredItems={staredItems}
            />
          </Suspense>
        )}
      </tbody>
    </table>
  );
}

export default Table;
