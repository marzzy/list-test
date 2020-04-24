import { useState, useEffect, useReducer } from 'react';
import DataReducer from '../Reducers/DataReducer';
import { setQueryParams,
  findQueryParamsWithKey,
  getQueryParamsKeies
} from '../Helpers/QueryString';

function useData(initLocation) {
  const [data, dispatch] = useReducer(DataReducer, []);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import('../../assets/data.json').then(response => {
      Promise.resolve(
        dispatch({ type: 'get', data: response.default })
      ).then(
        modifyInitDataBasedOnQP
      );
    });
  }, [initLocation]);

  function sortData(sortItem, sortType, history) {
    dispatch({ type: 'sort', sortItem, sortType });

    setQueryParams(history, { sort: [sortItem, sortType] });
  }

  function modifyInitDataBasedOnQP() {
    const initQueryParamKeies = getQueryParamsKeies(initLocation);

    if (~initQueryParamKeies) {
      initQueryParamKeies.forEach(queryParamKey => {
        if (queryParamKey === 'sort') {
          const [sortItem, sortType] = findQueryParamsWithKey(initLocation, queryParamKey).split(',');

          dispatch({ type: 'sort', sortItem, sortType });
        }
      })
    }
  }

  return [data, currentPage, setCurrentPage, sortData];
}
export default useData;
