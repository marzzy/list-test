import React from 'react';

function TableBodyRow({ data }) {
  return (
    <>
      {data.map(item => (
        <tr role="row" key={item.id}>
          <td role="cell">
            {item.name}
          </td>
          <td role="cell">
            {item.date}
          </td>
          <td role="cell">
            {item.title}
          </td>
          <td role="cell">
            {item.field}
          </td>
          <td role="cell">
            {item.old_value}
          </td>
          <td role="cell">
            {item.new_value}
          </td>
        </tr>
      ))}
    </>
  )
}

export default TableBodyRow;
