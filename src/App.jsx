import React, {useContext, useEffect, useReducer} from "react";
import Board from "./containers/Board";
import Score from "./containers/Score";
import GameContext from "./state/game.context";
import GameReducer from "./state/game.reducer";
import KeyPressHelper from "./utils/KeyPressHelper";
import "./App.css";
import {gameConstants} from "./state/game.constants";

export default function App() {
  const [state, dispatch] = useReducer(GameReducer, useContext(GameContext));

  KeyPressHelper.dispatch = value => {
    if (value === "enter" && !state.active)
      dispatch({ type: gameConstants.START_GAME });
    else
    if (state.active)
      dispatch({ type: gameConstants.CHANGE_LAST_KEY_PRESS, payload: value });
  };

  useEffect(() => {
    document.getElementById("game").focus();
  }, []);

  return (
    <div {...KeyPressHelper.events} id="game" className="gameContainer" tabIndex={0}>
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
