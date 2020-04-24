import React from 'react';
import './LoadMoreButtons.css';

function LoadMoreButtons({ setCurrentPage, currentPage}) {
  function handleMore() {
    setCurrentPage(currentPage + 1);
  }
  
  return (
    <>
      <button className="loadMoreButtons" type="button" onClick={handleMore}>
        بیشتر ...
      </button>
    </>
  )
}

export default LoadMoreButtons;
