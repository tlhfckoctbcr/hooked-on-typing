import React, { useContext, useReducer } from "react";
import Board from "../Board";
import Menu from "../Menu";
import GameContext from "../../state/contexts/game.context";
import BoardContext from "../../state/contexts/board.context";
import ShipContext from "../../state/contexts/ship.context";
import GameReducer from "../../state/reducers/game.reducer";
import BoardReducer from "../../state/reducers/board.reducer";
import ShipReducer from "../../state/reducers/ship.reducer";

const Game = () => {
  const [gameState, gameDispatch] = useReducer(GameReducer, useContext(GameContext));
  const [boardState, boardDispatch] = useReducer(BoardReducer, useContext(BoardContext));
  const [shipState, shipDispatch] = useReducer(ShipReducer, useContext(ShipContext));

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
          <ShipContext.Provider
            value={{
              state: shipState,
              dispatch: shipDispatch
            }}
          >
            <Board />
          </ShipContext.Provider>
        </BoardContext.Provider>
      </GameContext.Provider>
    </div>
  )
};

export default Game;
