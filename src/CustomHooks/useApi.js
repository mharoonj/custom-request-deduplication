import React,{ useEffect, useState, useMemo, useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import {startFetching, startLoading} from "../actions/actions"

export default function useAPI(value) {
  
  const [data, setData] = useState(value);
  const [loading, setLoading] = useState(true);
const url_data = useSelector((state)=>state.api)
const dispatch = useDispatch()
// console.log("Executing Component : ",value)
 console.log("url data :", url_data)
useEffect(async()=>{
    let url_value = localStorage.getItem("flag")
    if(!url_value){
        localStorage.setItem("flag", value)
        await dispatch(startFetching())
        await dispatch(startLoading())

    }else{
        if(url_value == value){
            console.log("Waiting ....................")
        }else{
            localStorage.setItem("flag2", value)
            dispatch(startFetching())
            dispatch(startLoading())
        }
    }

    
},[])

useEffect(()=>{
    
     setData(url_data.data)
},[url_data.data])

useEffect(()=>{
 
     setLoading(url_data.loading)
},[url_data.loading])

  return [url_data.data, url_data.loading,null];
}

