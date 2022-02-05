import React,{useEffect} from 'react';
import {DotLoader} from "react-spinners";
import { startFetching } from '../actions/actions';
import useAPI from '../CustomHooks/useApi';
import { useSelector, useDispatch} from "react-redux"
import "./Styles.css"
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

 const ComponentTwo = (props) => {
     const [data,loading,error] = useAPI("www.google.com")
    //  const url_data = useSelector((state)=>state.api)

    
  return <div style={{width:"400px"}} className="inline-block">
    <h1>Component 2</h1>
  <DotLoader  color="#36D7B7" loading={loading} css={override} size={150} />

    <ul>
      {data && data.map((item)=>{
        return <li key={item.title}>{item.title}</li>
      })}
    </ul>
  </div>;
};



export default ComponentTwo