import React, { createContext } from "react";

const BoardContext = createContext({
  lastKeyPress: "",
  words: [],
  errorCounter: 0,
  activeWordIndex: 0,
  activeWordLetterIndex: 0
});

export default BoardContext;
