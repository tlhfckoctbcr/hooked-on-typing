import React, { createContext } from "react";

const BoardContext = createContext({
  lastKeyPress: "",
  enemies: ["fot", "bar", "baz", "sit", "pot"],
  errorCounter: 0,
  activeEnemyIndex: 0,
  activeEnemyLetterIndex: 0
});

export default BoardContext;
