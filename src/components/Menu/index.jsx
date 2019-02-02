import React, { useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import GameContext from "../../state/contexts/game.context";
import { constants } from "../../state/constants";

const Menu = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <>
      <Input
        label={"Player Name: "}
        name={"tag"}
        value={state.player.tag}
        handleValueChange={() => dispatch({ type: constants.PLAYER_VALUE_CHANGE })}
      />
      <Button
        disabled={false}
        label={"Start"}
        handleClick={() => dispatch({ type: constants.START_GAME })}
      />
      <p>Game Status: {state.status}</p>
      <p>Lives: {state.player.lives}</p>
    </>
  )
};

export default Menu;
