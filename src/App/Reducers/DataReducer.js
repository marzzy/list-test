function SortReducer(state, action) {
  switch (action.type) {
    case 'get':
      return [
        ...state,
        ...action.data
      ]
    case 'sort':
      console.log('state, action', state, action);
      return AlphabetlySortedState(state, action.sortType, action.sortItem);
    case 'filter':
    default:
      return state;
  }
}

export default SortReducer;

function AlphabetlySortedState(mainState, sortType, sortItem) {
  let newState = [...mainState];
  switch (sortType) {
    case 'asc':
      return newState.sort((itamA, itemB) => {
        if (itamA[sortItem] > itemB[sortItem]) return 1;
        if (itamA[sortItem] === itemB[sortItem]) return 0;
        if (itamA[sortItem] < itemB[sortItem]) return -1;
      });
    case 'desc':
      return newState.sort((itamA, itemB) => {
        if (itamA[sortItem] < itemB[sortItem]) return 1;
        if (itamA[sortItem] === itemB[sortItem]) return 0;
        if (itamA[sortItem] > itemB[sortItem]) return -1;
      });
    case 'unsort':
    default:
      return mainState
  }
}
