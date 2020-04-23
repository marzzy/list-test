import React from 'react';
import TableBodyRow from './TableBodyRow';
import './TableBodyRows.css';

function TableBodyRows({ data, onToggleStar, staredItems}) {
  return (
    <>
      {data.map(item => (
        <TableBodyRow
          key={item.id}
          itemData={item}
          onToggleStar={onToggleStar}
          isStared={!!(~staredItems.findIndex(staredItem => staredItem === item.id))}
        />
      ))}
    </>
  )
}

export default TableBodyRows;

