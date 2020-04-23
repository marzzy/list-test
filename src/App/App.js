import React, { useState, useEffect, useReducer, Suspense, lazy } from 'react';
import LoadMoreButtons from './LoadMoreButtons';
import './App.css';

const TableBodyRows = lazy(() => import('./TableBodyRows'));

function Loading() {
  return ( <div>صبر کنید...</div> )
}

function StarReducer(state , action) {
  switch (action.type) {
    case 'add':
      return [...state, action.itemId];
    case 'remove':
      return state.filter(item => item !== action.itemId)
    default:
      return state;
  }
}

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [staredItems, dispatch] = useReducer(StarReducer, []);

  useEffect(() => {
    import('../assets/data.json').then(response => {
      setData(response.default);
    });
  });

  function handleMore() {
    setCurrentPage(currentPage + 1);
  }

  function handleToggleStar(itemId) {
    const newItemIndexInStaredList = staredItems.findIndex(staredItem => staredItem === itemId);

    if (~newItemIndexInStaredList) {
      dispatch({ type: 'remove', itemId });
    } else {
      dispatch({ type: 'add', itemId });
    }
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
              <TableBodyRows
                data={data.slice(0,10 * currentPage)}
                onToggleStar={handleToggleStar}
                staredItems={staredItems}
              />
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
