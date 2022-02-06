import React from "react";
import { DotLoader } from "react-spinners";
import Message from "react-message-block";
import useAPI from "../CustomHooks/useApi";
import "./Styles.css";
import Header from "./Header";
import { override } from "../utils/loader";

const ComponentTwo = ({ url, name }) => {
  const [data, loading, error] = useAPI(url); // Custom hook

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
              return item[name] && <li key={item[name]}>{item[name]}</li>;
            })}
        </ul>
      );
    }
  };
  return (
    <div className="inline-block w-40">
      <Header headerNo="2" />
      {renderSequence()}
    </div>
  );
};

export default ComponentTwo;
