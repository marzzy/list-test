function sortByType(mainState, sortType, sortItem) {
  let newState = [...mainState];
  switch (sortType) {
    case 'asc':
      return newState.sort((itamA, itemB) => {
        if (itamA[sortItem] > itemB[sortItem]) return 1;
        if (itamA[sortItem] === itemB[sortItem]) return 0;
        if (itamA[sortItem] < itemB[sortItem]) return -1;
        return null;
      });
    case 'desc':
      return newState.sort((itamA, itemB) => {
        if (itamA[sortItem] < itemB[sortItem]) return 1;
        if (itamA[sortItem] === itemB[sortItem]) return 0;
        if (itamA[sortItem] > itemB[sortItem]) return -1;
        return null;
      });
    case 'unsort':
    default:
      return mainState
  }
}

export default sortByType;
