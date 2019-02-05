import React from "react";

export default function Button({ label, handleClickEvent }) {
  return (
    <div>
      <button className={"resetButton"} onClick={handleClickEvent}>
        {label}
      </button>
    </div>
  )
};
