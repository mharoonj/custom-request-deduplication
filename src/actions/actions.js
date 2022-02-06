import * as ActionTpes from "./actionTypes";

export const startFetching = (url) => {
  return (dispatch) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          // Network Error

          dispatch({
            type: ActionTpes.ERROR_IN_API,
            payload: true,
            api_key: url,
          });
        }

        return response.json();
      })
      .then((response) => {
        dispatch({
          type: ActionTpes.LOAD_API_DATA,
          payload: response,
          api_key: url,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTpes.ERROR_IN_API,
          payload: true,
          api_key: url,
        });
      });
  };
};

export const startLoading = (url) => {
  return {
    type: ActionTpes.START_FETCHING,
    payload: null,
    api_key: url,
  };
};
