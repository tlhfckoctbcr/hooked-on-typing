import React, { useContext, useReducer } from "react";
import Board from "../../components/Board";
import Controls from "../../components/Controls";
import Menu from "../Menu";
import GameContext from "../../state/contexts/game.context";
import ToonContext from "../../state/contexts/toon.context";
import GameReducer from "../../state/reducers/game.reducer";
import ToonReducer from "../../state/reducers/toon.reducer";
import KeyPressHelper from "../../utils/KeyPressHelper";

const Game = () => {
  const [gameState, gameDispatch] = useReducer(GameReducer, useContext(GameContext));
  const [toonState, toonDispatch] = useReducer(ToonReducer, useContext(ToonContext));

  return (
    <div {...KeyPressHelper.events} tabIndex={1}>
      <GameContext.Provider
        value={{
          state: gameState,
          dispatch: gameDispatch
        }}
      >
        <Menu />
        <ToonContext.Provider
          value={{
            state: toonState,
            dispatch: toonDispatch
          }}
        >
          <Controls />
          <Board />
        </ToonContext.Provider>
      </GameContext.Provider>
    </div>
  )
};

export default Game;
