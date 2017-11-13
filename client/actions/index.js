export function updateSearchTitle(title) {
  return {
    type: 'UPDATE_SEARCH_TITLE',
    payload: {
      title,
    },
  };
}

export function updateSearchLimit(limit) {
  return {
    type: 'UPDATE_SEARCH_LIMIT',
    payload: {
      limit,
    },
  };
}

export function searchAction(searchFields) {
  const { title, limit } = searchFields;
  let params = `limit=${limit}`;
  if (title.length) {
    params += `&title=${title}`;
  }

  return dispatch => {
    dispatch(searchStartAction(searchFields));
    return fetch(`/api/product_listings.json?${params}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(({ product_listings }) => {
        return dispatch(searchCompleteAction(product_listings));
      })
      .catch(error => {
        dispatch(searchErrorAction(error));
      });
  };
}

function searchCompleteAction(products) {
  return {
    type: 'SEARCH_COMPLETE',
    payload: {
      products,
    },
  };
}

function searchStartAction(searchFields) {
  return {
    type: 'SEARCH_START',
    payload: {
      searchFields,
    },
  };
}

function searchErrorAction(searchError) {
  return {
    type: 'SEARCH_ERROR',
    payload: {
      searchError,
    },
  };
}

export function filterAction(filterQuery) {
  return {
    type: 'FILTER',
    payload: { filterQuery },
  };
}
