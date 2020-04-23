import React from 'react';

function TableBodyRow({ itemData, onToggleStar, isStared }) {
  return (
    <tr role="row" key={itemData.id} className={isStared ? 'full' : ''}>
      <td role="cell" onClick={onToggleStar.bind(null, itemData.id)}>
        <i className={`icon-star-${isStared ? 'full' : 'empty'}`} />
      </td>
      <td role="cell">
        {itemData.name}
      </td>
      <td role="cell">
        {itemData.date}
      </td>
      <td role="cell">
        {itemData.title}
      </td>
      <td role="cell">
        {itemData.field}
      </td>
      <td role="cell">
        {itemData.old_value}
      </td>
      <td role="cell">
        {itemData.new_value}
      </td>
    </tr>
  )
}

export default TableBodyRow;
