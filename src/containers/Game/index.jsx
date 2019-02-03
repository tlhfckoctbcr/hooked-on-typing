import React, { useContext, useReducer } from "react";
import Board from "../../components/Board";
import Controls from "../../components/Controls";
import Menu from "../Menu";
import GameContext from "../../state/contexts/game.context";
import BoardContext from "../../state/contexts/board.context";
import GameReducer from "../../state/reducers/game.reducer";
import BoardReducer from "../../state/reducers/board.reducer";
import { constants } from "../../state/constants";
import KeyPressHelper from "../../utils/KeyPressHelper";

const Game = () => {
  const [gameState, gameDispatch] = useReducer(GameReducer, useContext(GameContext));
  const [boardState, boardDispatch] = useReducer(BoardReducer, useContext(BoardContext));

  KeyPressHelper.config({
    dispatch: value => gameDispatch({ type: constants.INPUT_VALUE_CHANGE, payload: value })
  });

  return (
    <div className="gameContainer" {...KeyPressHelper.events} tabIndex={1}>
      <GameContext.Provider
        value={{
          state: gameState,
          dispatch: gameDispatch
        }}
      >
        <Menu />
        <BoardContext.Provider
          value={{
            state: boardState,
            dispatch: boardDispatch
          }}
        >
          <Controls />
          <Board />
        </BoardContext.Provider>
      </GameContext.Provider>
    </div>
  )
};

export default Game;
