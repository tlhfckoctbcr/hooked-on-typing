import React, { useContext, useEffect } from "react";
import BoardContext from "../../state/contexts/board.context";
import { constants } from "../../state/constants";
import KeyPressHelper from "../../utils/KeyPressHelper";
import Word from "../../components/Word";
import Ship from "../Ship";

const Board = () => {
  const { state, dispatch } = useContext(BoardContext);

  KeyPressHelper.dispatch = value => dispatch({ type: constants.CHANGE_LAST_KEY_PRESS, payload: value });

  useEffect(() => {
    dispatch({ type: constants.GET_WORD_LIST });
  }, []);

  // LastKeyPress watcher
  useEffect(() => {
    if (!state.words.length) return;

    const activeWord = state.words[state.activeWordIndex];
    const activeLetter = activeWord[state.activeWordLetterIndex];

    if (state.lastKeyPress === activeLetter) {
      if (activeWord.length === state.activeWordLetterIndex + 1) {
        dispatch({ type: constants.CHANGE_ACTIVE_WORD, payload: state.activeWordIndex + 1 });
      } else {
        dispatch({ type: constants.KEY_PRESS_SUCCESS, payload: state.activeWordLetterIndex + 1 });
      }
    } else {
      dispatch({ type: constants.KEY_PRESS_FAILURE });
    }
  }, [state.lastKeyPress]);

  return (
    <div {...KeyPressHelper.events} className="boardContainer" tabIndex={1}>
      {
        !!state.words.length &&
        <>
          <Word
            word={state.words[state.activeWordIndex]}
            letterIndex={state.activeWordLetterIndex}
          />
        </>
      }
    </div>
  )
};

export default Board;
