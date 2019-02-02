import React, { useContext } from "react";
import GameContext from "../../contexts/game.context";

const Board = ({ ship }) => {
  const classes = {
    board: {
      height: "600px",
      width: "100%",
      backgroundColor: "white"
    }
  };

  const value = useContext(GameContext);

  return (
    <div style={classes.board}>
      {value}
    </div>
  )
};

export default Board;
