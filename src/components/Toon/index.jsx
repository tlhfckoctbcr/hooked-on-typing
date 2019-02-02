import React, { useContext } from "react";
import ToonContext from "../../state/contexts/toon.context";

const Toon = () => {
  const { state, dispatch } = useContext(ToonContext);

  return (
    <div style={{
      height: "50px",
      width: "50px",
      backgroundColor: "red",
      position: "relative",
      top: -state.position.positionY,
      left: state.position.positionX
    }}>
      {state.direction}
    </div>
  );
};

export default Toon;
