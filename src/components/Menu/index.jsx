import React, { useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import { GameContext } from "../../contexts/game.context";

const Menu = () => {
  const game = useContext(GameContext);

  return (
    <>
      <Input
        label={"Player Name: "}
        name={"tag"}
        value={game.player.tag}
        handleValueChange={game.handlePlayerChange}
      />
      <Button
        disabled={false}
        label={"Start"}
        handleClick={game.handleGameStart}
      />
      <p>Game Status: {game.status}</p>
      <p>Lives: {game.player.lives}</p>
    </>
  )
};

export default Menu;
