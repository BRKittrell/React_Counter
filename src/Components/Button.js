import React from "react";

const Button = ({ setCount }) => {
  return (
    <>
      <button
        id="increase"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase Count
      </button>
      <button
        id="decrease"
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease Count
      </button>
    </>
  );
};

export default Button;
