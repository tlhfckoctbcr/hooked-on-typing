import React, { useContext, useReducer } from "react";
import Board from "../Board";
import GameContext from "../../state/contexts/game.context";
import BoardContext from "../../state/contexts/board.context";
import GameReducer from "../../state/reducers/game.reducer";
import BoardReducer from "../../state/reducers/board.reducer";

const Game = () => {
  const [gameState, gameDispatch] = useReducer(GameReducer, useContext(GameContext));
  const [boardState, boardDispatch] = useReducer(BoardReducer, useContext(BoardContext));

  return (
    <div className="gameContainer">
      <GameContext.Provider
        value={{
          state: gameState,
          dispatch: gameDispatch
        }}
      >
        <BoardContext.Provider
          value={{
            state: boardState,
            dispatch: boardDispatch
          }}
        >
          <Board />
        </BoardContext.Provider>
      </GameContext.Provider>
    </div>
  )
};

export default Game;
