import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Message from 'react-message-block';
import useAPI from "../CustomHooks/useApi";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";
import "./Styles.css";
import Header from "./Header";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ComponentOne = ({ url }) => {
  const url_data = useSelector((state) => state.api);
  const [data, loading, error] = useAPI(url);
  console.log("render useApi : ", data,loading, error)
  const renderSequence = ()=>{
    if(error){
      
      return <Message type={"error"} text = {'Network Error'} />
    }else if(loading){
      console.log("LOADING TRUE")
      return <DotLoader color="#36D7B7" loading={loading} css={override} size={150} />
    }else{
      return <ul>
      {data &&
        data.map((item) => {
          return item.title && <li key={item.title}>{item.title}</li>;
        })}
    </ul>
    }
  }
  return (
    <div style={{ width: "40vw" }} className="inline-block">
      <Header headerNo="1" />
      {renderSequence()}


      
    </div>
  );
};

export default ComponentOne;
