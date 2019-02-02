import React, { useState } from "react";
import Board from "../../components/Board";
import Menu from "../../components/Menu";
import { GameContext } from "../../contexts/game.context";
import { ShipContext } from "../../contexts/ship.context";

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

  return (
    <GameContext.Provider
      value={{
        status,
        player,
        handlePlayerChange,
        handleGameStart
      }}
    >
      <Menu />
      <ShipContext.Provider
        value={{
          position,
          handlePositionChange
        }}
      >
        <Board />
      </ShipContext.Provider>
    </GameContext.Provider>
  )
};

export default Game;
