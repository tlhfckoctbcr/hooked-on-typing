import React, { useContext, useEffect } from "react";
import GameContext from "../../state/game.context";
import { gameConstants } from "../../state/game.constants";
import KeyPressHelper from "../../utils/KeyPressHelper";
import Word from "../../components/Word";

export default function Board() {
  const { state, dispatch } = useContext(GameContext);
  const { active, error, activeWordIndex, activeWordLetterIndex, lastKeyPress, pressCounter, words } = state;

  KeyPressHelper.dispatch = value => {
    if (value === "enter" && !active)
      dispatch({ type: gameConstants.START_GAME });
    else
      if (active)
      dispatch({ type: gameConstants.CHANGE_LAST_KEY_PRESS, payload: value });
  };

  useEffect(() => {
    document.getElementById("board").focus();
  }, []);

  useEffect(() => {
    if (!words.length || !active)
      return;

    const activeWord = words[activeWordIndex];
    const activeLetter = activeWord[activeWordLetterIndex];

    if (lastKeyPress === activeLetter) {
      if (activeWord.length === activeWordLetterIndex + 1)
        dispatch({ type: gameConstants.CHANGE_ACTIVE_WORD, payload: activeWordIndex + 1 });
      else
        dispatch({ type: gameConstants.KEY_PRESS_SUCCESS, payload: activeWordLetterIndex + 1 });
    } else {
      dispatch({ type: gameConstants.KEY_PRESS_FAILURE });
    }
  }, [pressCounter]);

  return (
    <div {...KeyPressHelper.events} id="board" className="boardContainer" tabIndex={0}>
      {
        !!words.length &&
          <>
            {
              [...Array(3)].map((_, i) => (
                <Word
                  word={words[activeWordIndex+(i)]}
                  letterIndex={activeWordLetterIndex}
                  positionIndex={i}
                  error={error}
                  key={i}
                />
              ))
            }
          </>
      }
      {
        !words.length &&
          <div className="start">
            Press enter to begin.
          </div>
      }
    </div>
  )
};

