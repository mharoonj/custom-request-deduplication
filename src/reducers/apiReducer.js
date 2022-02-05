import * as ActionTpes from "../actions/actionTypes"
import {connect} from "react-redux"
export const apiReducer = (state = { url: "www.googel.com", loading:false,data:null }, action) => {
  switch (action.type) {
    case ActionTpes.START_FETCHING:
        
        return {...state,loading:true };
    case ActionTpes.LOAD_API_DATA:
        return {...state,loading:false, data:action.payload }
    default:
      return state;
  }
};



