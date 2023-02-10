import React from "react";

const Button = ({ setCount }) => {
  return (
    <>
      <button
        className="buttons"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase Count
      </button>

      <button
        className="buttons"
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
