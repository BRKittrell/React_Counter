import React from "react";
import Button from "./Button";

const Counter = ({count, setCount}) => {
  return (
    <div className="container">
    <h1 className="header">React Counter</h1>
      {count}
      <br></br>
      <Button setCount={setCount}/>
    </div>
  );
};

export default Counter;
