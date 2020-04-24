import React, { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import FilterLabelBox from './FilterLabelBox';
import './Filters.css';

function filterLabelReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.newItem];
    case 'clear':
      return [];
    default:
      return state;
  }
}

const options = [
  ['name', 'نام تغییر دهنده'],
  ['date', 'تاریخ'],
  ['title', 'نام آگهی'],
  ['field', 'فیلد'],
  ['old_value', 'مقدار قدیمی'],
  ['new_value', 'مقدار جدید'],
];

function Filters({ filterData, resetData }) {
  const [filterLabel, dispatch] = useReducer(filterLabelReducer, []);
  const [filterType, setFilterType] = useState('name');
  const [filterValue, setFilterValue] = useState('');
  let history = useHistory();
  

  function handleSubmit(e) {
    e.preventDefault();
    filterData(filterValue, filterType, history);
    dispatch({ type: 'add', newItem: [filterValue, filterType]});
  }

  function changeFilterType(e) {
    setFilterType(e.target.value);
  }

  function modifyFilterValue(e) {
    setFilterValue(e.target.value);
  }

  function handleResetData() {
    resetData();
    setFilterType('name');
    setFilterValue('');
    dispatch({ type: 'clear' });
  }

  return (
    <>
      <form id="filterBox" onSubmit={handleSubmit}>
        <label>
          فیلتر بر اساس :
          <select value={filterType} onChange={changeFilterType}>
            {options.map(([value , persianVal]) => (
              <option key={value} value={value}>{persianVal}</option>
            ))}
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
        <div className="action-box">
          <input type="submit" value="جستجو" />
          <button className="newFiltersButton" type="button" onClick={handleResetData} >
            جستجوی جدید
          </button>
        </div>
      </form>
      <FilterLabelBox filterLabel={filterLabel}/>
    </>
  );
}

export default Filters;
