import React, { useContext, useEffect } from "react";
import BoardContext from "../../state/contexts/board.context";
import { constants } from "../../state/constants";
import KeyPressHelper from "../../utils/KeyPressHelper";
import Word from "../../components/Word";

export default function Board() {
  const { state, dispatch } = useContext(BoardContext);
  const { words, activeWordIndex, activeWordLetterIndex, lastKeyPress, pressCounter, error } = state;

  KeyPressHelper.dispatch = value =>
    dispatch({ type: constants.CHANGE_LAST_KEY_PRESS, payload: value });

  useEffect(() =>
    dispatch({ type: constants.GET_WORD_LIST }), []);

  useEffect(() => {
    if (!words.length) return;

    const activeWord = words[activeWordIndex];
    const activeLetter = activeWord[activeWordLetterIndex];

    if (lastKeyPress === activeLetter) {
      if (activeWord.length === activeWordLetterIndex + 1)
        dispatch({ type: constants.CHANGE_ACTIVE_WORD, payload: activeWordIndex + 1 });
      else
        dispatch({ type: constants.KEY_PRESS_SUCCESS, payload: activeWordLetterIndex + 1 });
    } else {
      dispatch({ type: constants.KEY_PRESS_FAILURE });
    }
  }, [pressCounter]);

  return (
    <div {...KeyPressHelper.events} className="boardContainer" tabIndex={0}>
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
    </div>
  )
};

