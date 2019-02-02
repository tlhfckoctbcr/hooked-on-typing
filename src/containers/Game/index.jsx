import React, { useState, useContext, useReducer } from "react";
import Board from "../../components/Board";
import Controls from "../../components/Controls";
import Menu from "../../components/Menu";
import GameContext from "../../state/contexts/game.context";
import { ToonContext } from "../../state/contexts/toon.context";
import GameReducer from "../../state/reducers/game.reducer";
import KeyPressHelper from "../../utils/KeyPressHelper";

const Game = () => {
  const [state, dispatch] = useReducer(GameReducer, useContext(GameContext));

  const [position, setPosition] = useState({ positionX: 0, positionY: 0 });
  const [direction, setDirection] = useState("right");

  function handlePositionChange(name, direction, value) {
    setPosition({ ...position, [name]: value });
    setDirection(direction);
  }

  KeyPressHelper.config({
    spacebar: () => {

    },
    left: () => {
      handlePositionChange("positionX", "left", position.positionX - 15);
    },
    up: () => {
      handlePositionChange("positionY", "up", position.positionY + 15);
    },
    down: () => {
      handlePositionChange("positionY", "down", position.positionY - 15);
    },
    right: () => {
      handlePositionChange("positionX", "right", position.positionX + 15);
    }
  });

  return (
    <div {...KeyPressHelper.events} tabIndex={1}>
      <GameContext.Provider
        value={{ state, dispatch }}
      >
        <Menu />
        <ToonContext.Provider
          value={{
            position,
            direction
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
