import React, { createContext } from "react";

const BoardContext = createContext({
  lastKeyPress: "",
  pressCounter: 0,
  errorCounter: 0,
  activeWordIndex: 0,
  activeWordLetterIndex: 0,
  words: []
});

export default BoardContext;
