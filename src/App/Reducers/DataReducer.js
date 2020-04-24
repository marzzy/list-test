import sortByType from '../Helpers/Sort';

function DataReducer(state, action) {
  switch (action.type) {
    case 'get':
      return [
        ...action.data
      ]
    case 'sort':
      return sortByType(state, action.sortType, action.sortItem);
    case 'filter':
      return filterBasedOnValue(state, action.filterType, action.filterValue);
    default:
      return state;
  }
}

export default DataReducer;


function filterBasedOnValue(mainState, filterType, filterValue) {
  let newState = [...mainState];
  let arrResult = newState.filter(item => item[filterType] === filterValue);
  return arrResult.length > 0 ? arrResult : false;
}