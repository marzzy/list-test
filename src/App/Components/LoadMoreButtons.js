import React from 'react';

function LoadMoreButtons({ setCurrentPage, currentPage}) {
  function handleMore() {
    setCurrentPage(currentPage + 1);
  }
  
  return (
    <>
      <button type="button" onClick={handleMore}>
        بیشتر ...
      </button>
    </>
  )
}

export default LoadMoreButtons;
