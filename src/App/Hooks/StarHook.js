import { useEffect, useReducer} from 'react';

function StarReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.itemId];
    case 'remove':
      return state.filter(item => item !== action.itemId)
    case 'update_local_storage':
      localStorage.setItem('staredItemIds', state);
      return state
    default:
      return state;
  }
}

function setStarItemsIdFromLocalStorage() {
  if (localStorage.getItem('staredItemIds')) {
    return (
      localStorage.getItem('staredItemIds')
        .split(',')
        .map(stgingId => +stgingId)
    );
  }
}

function useStar() {
  const [staredItems, dispatch] = useReducer(StarReducer, []);

  useEffect(() => {
    const initialStaredItemIds = setStarItemsIdFromLocalStorage() || [];

    initialStaredItemIds.forEach(staredItemId => {
      dispatch({ type: 'add', itemId: staredItemId });
    })
  }, [])

  function handleToggleStar(itemId) {
    const newItemIndexInStaredList = staredItems.findIndex(staredItem => staredItem === itemId);

    if (~newItemIndexInStaredList) {
      dispatch({ type: 'remove', itemId });
    } else {
      dispatch({ type: 'add', itemId });
    }
    dispatch({ type: 'update_local_storage' });
  }

  return [staredItems, handleToggleStar];
}

export default useStar;
