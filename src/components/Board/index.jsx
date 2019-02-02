import React, { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import { ToonContext } from "../../contexts/toon.context";

const Board = () => {
  const classes = {
    board: {
      height: "600px",
      width: "100%",
      backgroundColor: "white"
    }
  };

  const game = useContext(GameContext);
  const ship = useContext(ToonContext);

  return (
    <div style={classes.board}>
      {ship.position.positionY} {game.status}
    </div>
  )
};

export default Board;
