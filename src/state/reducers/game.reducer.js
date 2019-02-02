import { constants } from "../constants";

const GameReducer = (state, action) => {
  switch (action.type) {
    case constants.START_GAME:
      console.log("Start Game");
      return {...state, status: "active"};
    default:
      return state;
  }
};

export default GameReducer;
