import React from "react";

const Button = ({ disabled, label, handleClick }) => (
  <>
    <button
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  </>
);

export default Button;
