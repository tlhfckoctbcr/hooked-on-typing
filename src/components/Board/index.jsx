import React, { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import { ShipContext } from "../../contexts/ship.context";

const Board = () => {
  const classes = {
    board: {
      height: "600px",
      width: "100%",
      backgroundColor: "white"
    }
  };

  const game = useContext(GameContext);
  const ship = useContext(ShipContext);

  return (
    <div style={classes.board}>
      {ship.position.positionY} {game.status}
    </div>
  )
};

export default Board;
