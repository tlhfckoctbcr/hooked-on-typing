import React, { useContext, useReducer } from "react";
import Board from "./containers/Board";
import Score from "./containers/Score";
import GameContext from "./state/game.context";
import GameReducer from "./state/game.reducer";
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(GameReducer, useContext(GameContext));

  return (
    <div className="gameContainer">
      <GameContext.Provider
        value={{
          state: state,
          dispatch: dispatch
        }}
      >
        <Board />
        <Score />
      </GameContext.Provider>
    </div>
  )
};
