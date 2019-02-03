import React, { createContext } from "react";

const BoardContext = createContext({
  position: {
    positionX: 0,
    positionY: 0
  },
  direction: "right"
});

export default BoardContext;
