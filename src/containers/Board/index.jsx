import React, { useContext, useEffect } from "react";
import BoardContext from "../../state/contexts/board.context";
import { constants } from "../../state/constants";
import KeyPressHelper from "../../utils/KeyPressHelper";
import Enemy from "../../components/Enemy";
import Ship from "../Ship";

const Board = () => {
  const { state, dispatch } = useContext(BoardContext);

  const activeEnemy = state.enemies[state.activeEnemyIndex];
  const activeLetter = activeEnemy[state.activeEnemyLetterIndex];

  KeyPressHelper.dispatch = value => dispatch({ type: constants.CHANGE_LAST_KEY_PRESS, payload: value });

  useEffect(() => {
    if (state.lastKeyPress === activeLetter) {
      if (activeEnemy.length === state.activeEnemyLetterIndex + 1) {
        dispatch({ type: constants.CHANGE_ACTIVE_ENEMY, payload: state.activeEnemyIndex + 1 });
      } else {
        dispatch({ type: constants.KEY_PRESS_SUCCESS, payload: state.activeEnemyLetterIndex + 1 });
      }
    } else {
      dispatch({ type: constants.KEY_PRESS_FAILURE });
    }
  }, [state.lastKeyPress]);

  return (
    <div {...KeyPressHelper.events} className="boardContainer" tabIndex={1}>
      <Ship />
      {state.lastKeyPress}
      <Enemy
        enemy={activeEnemy}
        letterIndex={state.activeEnemyLetterIndex}
      />
    </div>
  )
};

export default Board;
