import React, { useState } from "react";
import Board from "../../components/Board";
import Controls from "../../components/Controls";
import Menu from "../../components/Menu";
import { GameContext } from "../../contexts/game.context";
import { ToonContext } from "../../contexts/toon.context";
import KeyPressHelper from "../../utils/KeyPressHelper";

const Game = () => {
  const [status, setStatus] = useState("inactive");
  const [player, setPlayer] = useState({ tag: "", lives: 0 });
  const [position, setPosition] = useState({ positionX: 0, positionY: 0 });
  const [direction, setDirection] = useState("right");

  function handlePlayerChange(name, value) {
    setPlayer({ ...player, [name]: value });
  }

  function handleGameStart() {
    setPlayer({ ...player, lives: 3 });
    setStatus("active");
  }

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
        value={{
          status,
          player,
          handlePlayerChange,
          handleGameStart
        }}
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
