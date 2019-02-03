import React, { useContext } from "react";
import BoardContext from "../../state/contexts/board.context";

const Controls = () => {
  const { state } = useContext(BoardContext);

  return (
    <>{state.position.positionX} {state.position.positionY}</>
  );
};

export default Controls;
