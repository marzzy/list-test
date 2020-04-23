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

export default StarReducer;
