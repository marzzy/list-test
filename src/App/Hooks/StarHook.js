import { useEffect, useReducer} from 'react';
import StarReducer from '../Reducers/StarReducer';

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
