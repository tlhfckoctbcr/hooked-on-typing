import React, { useContext } from "react";
import { ToonContext } from "../../state/contexts/toon.context";

const Controls = () => {
  const ship = useContext(ToonContext);

  return (
    <>{ship.position.positionX} {ship.position.positionY}</>
  );
};

export default Controls;
