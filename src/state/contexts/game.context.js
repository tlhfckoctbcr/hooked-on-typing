import React, { createContext } from "react";

const GameContext = createContext({
  status: "inactive",
  player: {
    tag: "",
    lives: 0
  }
});

export default GameContext;
