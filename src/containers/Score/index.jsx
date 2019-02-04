import React, { useContext } from "react";
import GameContext from "../../state/game.context";
import {gameConstants} from "../../state/game.constants";

export default function Score() {
  const { state, dispatch } = useContext(GameContext);

  const calcErrorRate = (errorCounter, pressCounter) => {
    const rate = Math.round(100 - errorCounter/pressCounter * 100);
    return rate ? `${rate}%` : "---";
  }

  const reset = () => {
    dispatch({ type: gameConstants.RESET_GAME });
    document.getElementById("game").focus();
  };

  return (
    <div className="scoreContainer">
      <ul>
        <li>words: {state.activeWordIndex}</li>
        <li>errors: {state.errorCounter}</li>
        <li>rate: {calcErrorRate(state.errorCounter, state.pressCounter)}</li>
        {
          !!state.words.length &&
          <li>
            <button className="resetButton" onClick={reset}>reset</button>
          </li>
        }
      </ul>
    </div>
  );
};
