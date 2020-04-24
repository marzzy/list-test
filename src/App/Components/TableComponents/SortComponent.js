import React from 'react';
import { useHistory } from 'react-router-dom';
import './SortComponent.css';

function SortComponent({ sortData, sortItem }) {
  let history = useHistory();

  return (
    <div className="sortBox">
      <i
        onClick={sortData.bind(null, sortItem, 'desc', history)}
        className={`icon-sort-amount-desc`}
      />
      <i
        onClick={sortData.bind(null, sortItem, 'asc', history)}
        className={`icon-sort-amount-asc`}
      />
      <i
        onClick={sortData.bind(null, 'id', 'asc', history)}
        className={`icon-paragraph-center`}
      />
    </div>
  );
}

export default SortComponent;
