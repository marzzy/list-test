import { useState, useEffect, useReducer } from 'react';
import DataReducer from '../Reducers/DataReducer';
import { setQueryParams,
  findQueryParamsWithKey,
  getQueryParamsKeies
} from '../Helpers/QueryString';

function useData(initLocation) {
  const [data, dispatch] = useReducer(DataReducer, []);

  useEffect(() => {
    import('../../assets/data.json').then(response => {
      Promise.resolve(
        dispatch({ type: 'get', data: response.default })
      ).then(
        modifyInitDataBasedOnQP
      );
    });
  }, []);

  function sortData(sortItem, sortType, history) {
    dispatch({ type: 'sort', sortItem, sortType });

    setQueryParams(history, { sort: [sortItem, sortType] });
  }

  function filterData(filterValue, filterType, history) {
    dispatch({ type: 'filter', filterValue, filterType });

    setQueryParams(history, { filter: [filterValue, filterType] });
  }

  function resetData() {
    import('../../assets/data.json').then(response => {
      dispatch({ type: 'get', data: response.default })
    });
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

  return [data, sortData, filterData, resetData];
}
export default useData;
