import { useState, useEffect, useReducer } from 'react';
import DataReducer from '../Reducers/DataReducer';

function useData() {
  const [data, dispatch] = useReducer(DataReducer, []);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import('../../assets/data.json').then(response => {
      dispatch({ type: 'get', data: response.default})
    });
  }, []);

  function sortData(sortItem, sortType) {
    dispatch({ type: 'sort', sortItem, sortType });
  }

  return [data, currentPage, setCurrentPage, sortData];
}
export default useData;
