import { constants } from "../constants";

const BoardReducer = (state, action) => {
  switch (action.type) {
    case constants.CHANGE_LAST_KEY_PRESS:
      return {
        ...state,
        lastKeyPress: action.payload
      };
    case constants.CHANGE_ACTIVE_ENEMY:
      return {
        ...state,
        activeEnemyIndex: action.payload,
        activeEnemyLetterIndex: 0
      };
    case constants.KEY_PRESS_SUCCESS:
      return {
        ...state,
        activeEnemyLetterIndex: action.payload
      };
    case constants.KEY_PRESS_FAILURE:
    default:
      return state;
  }
};

export default BoardReducer;
