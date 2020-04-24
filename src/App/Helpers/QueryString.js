function setQueryParams(history, paramsObject) {
  const queryArr = Object.entries(paramsObject)
    .map(([paramKey, paramVal]) => (`${paramKey}=${paramVal}`));

  history.push(`?${queryArr.join('&')}`);
}

function findQueryParamsWithKey(location, key) {
  
  if (location.search.length > 0) {
    const foundValue = location.search
      .slice(1)
      .split('&').find(stringItem => {
        const [QPKey] = stringItem.split('=');
        return (QPKey === key)
      })
      ?.split('=')[1];

    return foundValue || -1;
  }
  return -1;
}

function getQueryParamsKeies(location) {
  
  if (location.search.length > 0) {
    const keies = location.search
      .slice(1)
      .split('&').map(stringItem => {
        const [QPKey] = stringItem.split('=');
        return QPKey
      });

    return keies || -1;
  }
  return -1;
}

export {
  setQueryParams,
  findQueryParamsWithKey,
  getQueryParamsKeies
}
