import React from "react";


const Button = ({ setCount }) => {
  return (
    <>
      <button
        className="buttons"
        onClick={() => {
          setCount((count) => count + 2);
        }}
      >
        Increase Count
      </button>

      <button
        className="buttons"
        onClick={() => {
          setCount((count) => count - 2);
        }}
      >
        Decrease Count
      </button>
    </>
  );
};

export default Button;
