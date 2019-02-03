import React, { createContext } from "react";

const BoardContext = createContext({
  lastKeyPress: "",
  enemies: ["foo", "bar", "baz", "sit", "poo"],
  activeEnemyIndex: 0,
  activeEnemyLetterIndex: 0
});

export default BoardContext;
