import { constants } from "../constants";

const BoardReducer = (state, action) => {
  switch (action.type) {
    case constants.CHANGE_LAST_KEY_PRESS:
      return { ...state, lastKeyPress: action.payload };
    default:
      return state;
  }
};

export default BoardReducer;
