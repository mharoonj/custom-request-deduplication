import * as ActionTpes from "../actions/actionTypes"
// export const apiReducer = (state = { url: "www.googel.com", loading:false,data:null, error:false }, action) => {
//   switch (action.type) {
//     case ActionTpes.START_FETCHING:
//         const data = {loading:true, error:false}
//         state.data[payload.api_key] = data
//         return {...state,loading:true, error:false };
//     case ActionTpes.LOAD_API_DATA:
       
//         return {...state,loading:false, data:action.payload,error:false }
//     case ActionTpes.ERROR_IN_API:
       
//         return {...state, loading:false, data:null, error:true}
//     default:
//       return state;
//   }
// };

export const apiReducer = (state = { url: "www.googel.com", loading:false,data:null, error:false }, action) => {
    let data ;
    switch (action.type) {
      case ActionTpes.START_FETCHING:
           data = {loading:true, error:false}
          return {...state,data:{...state.data, [action.api_key]:data} };
      case ActionTpes.LOAD_API_DATA:
           data = {loading:false, data:action.payload,error:false}
          return {...state, data: {...state.data, [action.api_key]:data}}
      case ActionTpes.ERROR_IN_API:
           data = { loading:false, data:null, error:true}
          return {...state,  data: {...state.data, [action.api_key]:data}}
      default:
        return state;
    }
  };
  

