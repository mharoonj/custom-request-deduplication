import React,{ useEffect, useState, useMemo, useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import {startFetching, startLoading} from "../actions/actions"

export default function useAPI(value) {
  
  const [data, setData] = useState(value);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
const url_data = useSelector((state)=>state.api)
const dispatch = useDispatch()
// console.log("Executing Component : ",value)
//  console.log("url data :", url_data)
useEffect(async()=>{
    let url_value = localStorage.getItem(value)
    if(!url_value){
        console.log("pehle idhr")
        localStorage.setItem(value, true)
        await dispatch(startFetching())
        await dispatch(startLoading(value))

    }else{
        console.log("idhr aya : ", typeof url_value)
        if(url_value == "true"){
            console.log("idhr if")
            console.log("Waiting ....................")
        }else{
            console.log("idhr else")
            localStorage.setItem(value, true)
            dispatch(startFetching())
            dispatch(startLoading(value))
        }
    }

    
},[])

useEffect(()=>{
    
     setData(url_data.data)
},[url_data.data])

useEffect(()=>{
 
     setLoading(url_data.loading)
},[url_data.loading])
useEffect(()=>{
    console.log("error :", url_data.error)
    setError(url_data.error)
},[url_data.error])

  return [url_data.data, url_data.loading,error];
}

