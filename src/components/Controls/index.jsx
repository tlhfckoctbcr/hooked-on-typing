import React, { useContext } from "react";
import ToonContext from "../../state/contexts/toon.context";

const Controls = () => {
  const { state } = useContext(ToonContext);

  return (
    <>{state.position.positionX} {state.position.positionY}</>
  );
};

export default Controls;
