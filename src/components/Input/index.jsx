import React from "react";

const Input = ({label, name, value, handleValueChange}) => (
  <>
    <label>{label}</label>
    <input name={name} value={value} onChange={e => handleValueChange(name, e.target.value)} />
  </>
);

export default Input;
