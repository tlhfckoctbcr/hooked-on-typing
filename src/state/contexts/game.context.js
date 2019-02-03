import React, { createContext } from "react";

const GameContext = createContext({
  status: "ready",
  difficulty: {
    game: "easy",
    word: "easy"
  },
  type: "endless"
});

export default GameContext;
