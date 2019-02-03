import React, { useContext } from "react";
import BoardContext from "../../state/contexts/board.context";
import { constants } from "../../state/constants";
import KeyPressHelper from "../../utils/KeyPressHelper";
import Enemy from "../../components/Enemy";
import Ship from "../Ship";

const Board = () => {
  const { state, dispatch } = useContext(BoardContext);

  KeyPressHelper.dispatch = value => dispatch({ type: constants.CHANGE_LAST_KEY_PRESS, payload: value });

  return (
    <div {...KeyPressHelper.events} className="boardContainer" tabIndex={1}>
      <Ship />
      <div className="enemyContainer">
        <Enemy
          enemy={state.enemies[state.activeEnemyIndex]}
          letterIndex={state.activeEnemyLetterIndex}
        />
      </div>
    </div>
  )
};

export default Board;
