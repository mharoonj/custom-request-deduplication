import * as ActionTpes from "./actionTypes";
import {useDispatch} from "react-redux";

export const startLoading = ()=>{
    console.log("started fetching")
    

    return (dispatch)=>{
        fetch("https://gorest.co.in/public/v2/posts", {
            "method": "GET",
            
        }).then((response)=> {
    
            return response.json();
          })
        .then(response => {
            dispatch({
                type:ActionTpes.LOAD_API_DATA,
                payload:response
            })
        })
        .catch(err => {
            console.error(err);
        });
    }
    


 
}

export const startFetching = ()=>{
  

   return ({
       type:ActionTpes.START_FETCHING,
       payload:null
   })
 
}