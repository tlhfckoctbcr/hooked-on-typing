import React, { createContext, useState } from "react";
import Board from "../../components/Board";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Ship from "../../components/Ship";

import GameContext from "../../contexts/game.context";

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
    <GameContext.Provider value={10}>
      <Input
        label={"Player Name: "}
        name={"tag"}
        value={player.tag}
        handleValueChange={handlePlayerChange}
      />
      <Button
        disabled={false}
        label={"Start"}
        handleClick={handleGameStart}
      />
      <p>Game Status: {status}</p>
      <p>Lives: {player.lives}</p>

      <Board
        ship={<Ship />}
      />
    </GameContext.Provider>
  )
};

export default Game;
