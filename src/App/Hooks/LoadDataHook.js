import { useState, useEffect } from 'react';

function useData() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import('../../assets/data.json').then(response => {
      setData(response.default);
    });
  });

  return [data, currentPage, setCurrentPage];
}
export default useData;
