import * as ActionTpes from "../actions/actionTypes"
import {connect} from "react-redux"
export const apiReducer = (state = { url: "www.googel.com", loading:false,data:null, error:false }, action) => {
  switch (action.type) {
    case ActionTpes.START_FETCHING:
        console.log("start fetching")
        return {...state,loading:true, error:false };
    case ActionTpes.LOAD_API_DATA:
        console.log("load data")
        return {...state,loading:false, data:action.payload,error:false }
    case ActionTpes.ERROR_IN_API:
        console.log("api error")
        return {...state, loading:false, data:null, error:true}
    default:
      return state;
  }
};



