import React, { useContext } from "react";
import { GameContext } from "../../contexts/game.context";

const Board = () => {
  const classes = {
    board: {
      height: "600px",
      width: "100%",
      backgroundColor: "white"
    }
  };

  const game = useContext(GameContext);

  console.log(game);

  return (
    <div style={classes.board}>

    </div>
  )
};

export default Board;
