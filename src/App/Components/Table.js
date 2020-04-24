import React, { Suspense, lazy } from 'react';
import SortComponent from './TableComponents/sortComponent';
import useStar from '../Hooks/StarHook';
import './Table.css';

const TableBodyRows = lazy(() => import('./TableComponents/TableBodyRows'));

function Table({ data, currentPage, sortData }) {
  const [staredItems, handleToggleStar] = useStar();

  return (
    <div className="tableWrapper">
      <table id="UserLog" role="table">
        <thead>
          <tr role="row">
            <th>
              <i className='icon-star-full' />
            </th>
            <th role="columnheader">
              <span>نام تغییر دهنده</span>
              <SortComponent sortData={sortData} sortItem="name"/>
            </th>
            <th role="columnheader">
              <span>تاریخ</span>
              <SortComponent sortData={sortData} sortItem="date"/>
            </th>
            <th role="columnheader">
              <span>نام آگهی</span>
              <SortComponent sortData={sortData} sortItem="title"/>
            </th>
            <th role="columnheader">
              <span>فیلد</span>
              <SortComponent sortData={sortData} sortItem="field"/>
            </th>
            <th role="columnheader">
              <span>مقدار قدیمی</span>
              </th>
            <th role="columnheader">
              <span>مقدار جدید</span>
            </th>
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
    </div>
  );
}

export default Table;
