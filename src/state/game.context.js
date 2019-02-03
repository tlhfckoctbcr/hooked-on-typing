import React, { createContext } from "react";
import { initialState } from "./initialState";

const GameContext = createContext(initialState);

export default GameContext;
