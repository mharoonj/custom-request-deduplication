import React, { useEffect, useState, useMemo, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetching, startLoading } from "../actions/actions";

export default function useAPI(value) {
  const [data, setData] = useState(value);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url_data = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(async () => {
  

    let url_value = localStorage.getItem(value);
    if (!url_value) {
      
      localStorage.setItem(value, true);
      await dispatch(startLoading(value));
      await dispatch(startFetching(value));
    } else {
    
      if (url_value == "true") {
      
        // console.log("Waiting ....................");
      } else {
  
        localStorage.setItem(value, true);
        dispatch(startLoading(value));
        dispatch(startFetching(value));
      }
    }
  }, []);

  useEffect(() => {
    setData(url_data.data);
  }, [url_data.data]);

  useEffect(() => {
    setLoading(url_data.loading);
  }, [url_data.loading]);
  useEffect(() => {
   
    setError(url_data.error);
  }, [url_data.error]);

  return [data, loading, error];
}
