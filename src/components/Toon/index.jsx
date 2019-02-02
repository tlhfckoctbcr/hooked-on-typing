import React, { useContext } from "react";
import { ToonContext } from "../../contexts/toon.context";

const Toon = () => {
  const toon = useContext(ToonContext);
  return (
    <div style={{
      height: "50px",
      width: "50px",
      backgroundColor: "red",
      position: "relative",
      top: -toon.position.positionY,
      left: toon.position.positionX
    }}>
      {toon.direction}
    </div>
  );
};

export default Toon;
