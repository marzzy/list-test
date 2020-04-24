function filterLabelReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.newItem];
    case 'clear':
      return [];
    default:
      return state;
  }
}

export default filterLabelReducer;