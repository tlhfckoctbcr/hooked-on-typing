import React, { useState } from "react";
import Board from "../../components/Board";
import Menu from "../../components/Menu";
import { GameContext } from "../../contexts/game.context";

const Game = () => {
  const [status, setStatus] = useState("inactive");
  const [player, setPlayer] = useState({ tag: "", lives: 0 });

  function handlePlayerChange(name, value) {
    setPlayer({ ...player, [name]: value });
  }

  function handleGameStart() {
    setPlayer({ ...player, lives: 3 });
    setStatus("active");
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
      <Board />
    </GameContext.Provider>
  )
};

export default Game;
