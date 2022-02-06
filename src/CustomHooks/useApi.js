import React, { useEffect, useState, useMemo, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetching, startLoading } from "../actions/actions";

export default function useAPI(value) {
  const url_data = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(async () => {
    //  checking local storage,
    // if url is present there then listen to store
    // else start fetch data from url  = 'X'
    let url_value = localStorage.getItem(value);
    if (!url_value) {
      //   NO url found in localStorage
      // updating saving url to localStorage
      // other component will know that fetching data for url=X
      //  is already in execution or executed(can be get from store now)
      localStorage.setItem(value, true);
      // updates the value for loading=true against url = 'X' in redux store
      await dispatch(startLoading(value));
      //   fires action to start fetching data and then send it to redux store
      await dispatch(startFetching(value));
    } else {
      if (url_value == "true") {
        // this block only runs when required data from url is already
        // in process. This hook starts listening to data from store
        // whenever there is update in store for required url data
        // this hook  will pass data from where its called
        // console.log("Waiting ....................");
      }
    }
  }, []);

  // checks in store whether data for url = 'X' is present or not
  const current_value = url_data.data && url_data.data[value];
  if (current_value) {
    //   if data is present then it return present state for that particular url = 'X'
    return [current_value.data, current_value.loading, current_value.error];
  } else {
    //  if no record is present (first time render ), it will
    // return default values
    return [null, true, false];
  }
}
