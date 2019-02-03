import React, { useContext } from "react";
import ShipContext from "../../state/contexts/ship.context";

const Ship = () => {
  const { state } = useContext(ShipContext);

  return (
    <div style={{
      position: "absolute",
      top: -state.position.y,
      left: state.position.x
    }}>
      🛸
    </div>
  )
};

export default Ship;
