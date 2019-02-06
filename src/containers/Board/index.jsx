import React, { useContext, useEffect } from "react";
import GameContext from "../../state/game.context";
import { gameConstants } from "../../state/game.constants";
import Word from "../../components/Word";

export default function Board() {
  const { state, dispatch } = useContext(GameContext);
  const {
    active,
    pressError,
    activeWordIndex,
    activeWordLetterIndex,
    lastKeyPress,
    pressCounter,
    timer,
    words,
    loading
  } = state;

  useEffect(() => {
    if (!words.length || !active)
      return;

    const activeWord = words[activeWordIndex];
    const activeLetter = activeWord[activeWordLetterIndex];

    if (lastKeyPress === activeLetter) {
      if (activeWord.length === activeWordLetterIndex + 1)
        dispatch({
          type: gameConstants.CHANGE_ACTIVE_WORD,
          payload: activeWordIndex + 1
        });
      else
        dispatch({
          type: gameConstants.KEY_PRESS_SUCCESS,
          payload: activeWordLetterIndex + 1
        });
    } else {
      dispatch({ type: gameConstants.KEY_PRESS_FAILURE });
    }
  }, [pressCounter]);

  return (
    <div id="board" className="boardContainer">
      {
        !!active &&
        <>
          {
            !!timer &&
            <>
              {
                [...Array(4)].map((_, i) => (
                  <Word
                    word={words[activeWordIndex+(i)]}
                    letterIndex={activeWordLetterIndex}
                    positionIndex={i}
                    pressError={pressError}
                    key={i}
                  />
                ))
              }
            </>
          }
          {
            !timer &&
            <div className="start">
              { "GAME OVER" }
            </div>
          }
        </>
      }
      {
        !active &&
        <div className="start">
          { loading ? "READY" : "press enter to begin." }
        </div>
      }
    </div>
  )
};

