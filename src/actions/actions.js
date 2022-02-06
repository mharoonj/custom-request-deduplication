import * as ActionTpes from "./actionTypes";
import {useDispatch} from "react-redux";

export const startLoading = (url)=>{
    console.log("started fetching")
    

    return (dispatch)=>{
      
            fetch(url, {
                "method": "GET",
               
            }).then((response)=> {
                console.log(">>>>>>>>>>> response not ok <<<<<<<<<<")

                if(!response.ok){
                    // Network Error 
                    console.log(">>>>>>>>>>> response not ok")
                    dispatch({
                        type:ActionTpes.ERROR_IN_API,
                        payload:true
                    })
                }
        
                return response.json();
              })
            .then(response => {
            
                dispatch({
                    type:ActionTpes.LOAD_API_DATA,
                    payload:response
                })
            }).catch(err=>{
                console.log(">>>>>>>>>>> response not ok <<<<<<<<<<")
                console.error("parsing error : ",err);
                dispatch({
                    type:ActionTpes.ERROR_IN_API,
                    payload:true
                })
            })
           ;
      
     
    }
    


 
}

export const startFetching = ()=>{
  

   return ({
       type:ActionTpes.START_FETCHING,
       payload:null
   })
 
}