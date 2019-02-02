import React from "react";
import Toon from "../Toon";

const Board = () => {
  return (
    <div style={{
      height: "600px",
      width: "100%",
      backgroundColor: "white"
    }}>
      <Toon />
    </div>
  )
};

export default Board;
