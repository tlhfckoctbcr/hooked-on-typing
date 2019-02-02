import { createContext, useContext } from "react";

const Context = createContext(null);

export const createStore = reducer => {
  return { state: {}, reducer };
};

export const useStore = () => useContext(Context);
