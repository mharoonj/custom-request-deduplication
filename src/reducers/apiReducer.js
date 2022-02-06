import * as ActionTpes from "../actions/actionTypes"
import {connect} from "react-redux"
export const apiReducer = (state = { url: "www.googel.com", loading:false,data:null, error:false }, action) => {
  switch (action.type) {
    case ActionTpes.START_FETCHING:
        
        return {...state,loading:true, error:false };
    case ActionTpes.LOAD_API_DATA:
       
        return {...state,loading:false, data:action.payload,error:false }
    case ActionTpes.ERROR_IN_API:
       
        return {...state, loading:false, data:null, error:true}
    default:
      return state;
  }
};



