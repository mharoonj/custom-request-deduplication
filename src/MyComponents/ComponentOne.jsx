import React, { useEffect } from 'react';
import {connect, useSelector, useDispatch} from "react-redux"

import useAPI from '../CustomHooks/useApi';
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
import "./Styles.css"


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

 const ComponentOne = (props) => {
    const url_data = useSelector((state)=>state.api)
    const [data,loading,error] = useAPI("www.google.com")
  
 
    
  return <div style={{width:"400px"}} className="inline-block">
  <h1>Component 1 </h1>
  <DotLoader color="#36D7B7" loading={loading} css={override} size={150} />
  <ul>
    {data && data.map((item)=>{
      return <li key={item.title}>{item.title}</li>
    })}
  </ul>
</div>;
};

export default ComponentOne