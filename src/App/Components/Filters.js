import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Filters({ filterData }) {
  const [filterType, setFilterType] = useState('name');
  const [filterValue, setFilterValue] = useState('');
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    filterData(filterValue, filterType, history)
  }

  function changeFilterType(e) {
    setFilterType(e.target.value);
  }

  function modifyFilterValue(e) {
    setFilterValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        فیلتر بر اساس :
        <select value={filterType} onChange={changeFilterType}>
          <option value="name">نام تغییر دهنده </option>
          <option value="date">تاریخ </option>
          <option value="title">نام آگهی </option>
          <option value="field">فیلد </option>
          <option value="old_value">مقدار قدیمی </option>
          <option value="new_value">مقدار جدید </option>
        </select>
      </label>
      <label>
        مقدار مورد جستجو
        <input
          type="text"
          name="search-input"
          value={filterValue}
          onChange={modifyFilterValue}
        />
      </label>
      <input type="submit" value="جستجو" />
    </form>
  );
}

export default Filters;
