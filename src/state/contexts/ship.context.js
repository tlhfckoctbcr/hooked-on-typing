import React, { createContext } from "react";

const ShipContext = createContext({
  position: {
    x: 20,
    y: -40
  }
});

export default ShipContext;
