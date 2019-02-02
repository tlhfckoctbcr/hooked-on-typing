import React, { createContext } from "react";

const ToonContext = createContext({
  position: {
    positionX: 0,
    positionY: 0
  },
  direction: "right"
});

export default ToonContext;
