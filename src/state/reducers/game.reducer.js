import { constants } from "../constants";

const GameReducer = (state, action) => {
  switch (action.type) {
    case constants.START_GAME:
      console.log("Start Game");
      return {
        ...state,
        player: {
          tag: state.player.tag,
          lives: 3
        },
        status: "active"};
    case constants.PLAYER_VALUE_CHANGE:
      console.log("Player Value Change", action);
      let player = state.player;
      player[action.name] = action.value;
      console.log(player);
      return {
        ...state,
        player
      };
    default:
      return state;
  }
};

export default GameReducer;
