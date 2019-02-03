import React, { createContext } from "react";

const GameContext = createContext({
  status: "inactive"
});

export default GameContext;
