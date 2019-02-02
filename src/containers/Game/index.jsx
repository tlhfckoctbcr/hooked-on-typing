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

  function handlePlayerChange(name, value) {
    setPlayer({ ...player, [name]: value });
  }

  function handleGameStart() {
    setPlayer({ ...player, lives: 3 });
    setStatus("active");
  }

  function handlePositionChange(name, value) {
    setPosition({ ...position, [name]: value });
  }

  KeyPressHelper.config({
    spacebar: () => {
      console.log("Pew!");
    },
    left: () => {
      handlePositionChange("positionX", position.positionX - 1);
    },
    up: () => {
      handlePositionChange("positionY", position.positionY + 1);
    },
    down: () => {
      handlePositionChange("positionY", position.positionY - 1);
    },
    right: () => {
      handlePositionChange("positionX", position.positionX + 1);
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
            position
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
