import React from 'react';

function LoadMoreButtons({handleClick}) {
  return (
    <>
      <button type="button" onClick={handleClick}>
        بیشتر ...
      </button>
    </>
  )
}

export default LoadMoreButtons;
