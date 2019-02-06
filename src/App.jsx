import React, {useContext, useEffect, useReducer} from "react";
import Board from "./containers/Board";
import Menu from "./containers/Menu";
import GameContext from "./state/game.context";
import GameReducer from "./state/game.reducer";
import { gameConstants } from "./state/game.constants";
import KeyPressHelper from "./utils/KeyPressHelper";
import randomWords from "random-words";
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(GameReducer, useContext(GameContext));

  function simulateAsyncFetch() {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

  KeyPressHelper.dispatch = value => {
    if (value === "enter" && !state.active) {
      dispatch({
        type: gameConstants.GET_WORDS_REQUEST
      });

      simulateAsyncFetch()
        .then(() => {
          dispatch({
            type: gameConstants.GET_WORDS_SUCCESS,
            payload: randomWords(1000)
          });

          dispatch({ type: gameConstants.START_GAME });
        });
    }
    else {
      if (state.active)
        dispatch({
          type: gameConstants.CHANGE_LAST_KEY_PRESS,
          payload: value
        });
    }
  };

  useEffect(() => {
    document.getElementById("game").focus();
  }, []);

  return (
    <div {...KeyPressHelper.events} id="game" className="gameContainer" tabIndex={0}>
      <GameContext.Provider value={{ state, dispatch }}>
        <Board />
        <Menu />
      </GameContext.Provider>
    </div>
  )
};
