import React from "react";
import Message from "react-message-block";
import useAPI from "../CustomHooks/useApi";
import { DotLoader } from "react-spinners";
import "./Styles.css";
import { override } from "../utils/loader";
import Header from "./Header";

const ComponentOne = ({ url }) => {
  const [data, loading, error] = useAPI(url); // custom hook

  // this function checks values of error, loading and data
  // renders only one at a time
  const renderSequence = () => {
    if (error) {
      return <Message type={"error"} text={"Network Error"} />;
    } else if (loading) {
      return (
        <DotLoader
          color="#36D7B7"
          loading={loading}
          css={override}
          size={150}
        />
      );
    } else {
      return (
        <ul>
          {data &&
            data.map((item) => {
              return item.title && <li key={item.title}>{item.title}</li>;
            })}
        </ul>
      );
    }
  };
  return (
    <div  className="inline-block w-40">
      <Header headerNo="1" />
      {renderSequence()}
    </div>
  );
};

export default ComponentOne;
