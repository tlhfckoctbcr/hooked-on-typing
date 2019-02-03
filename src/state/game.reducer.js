import { gameConstants } from "./game.constants";
import { initialState } from "./initialState";
import randomWords from "random-words";

const GameReducer = (state, action) => {
  switch (action.type) {
    case gameConstants.START_GAME:
      return {
        ...state,
        active: true,
        words: randomWords(100)
      };
    case gameConstants.RESET_GAME:
      return {
        ...initialState,
        active: false
      };
    case gameConstants.CHANGE_LAST_KEY_PRESS:
      return {
        ...state,
        lastKeyPress: action.payload,
        pressCounter: state.pressCounter + 1
      };
    case gameConstants.CHANGE_ACTIVE_WORD:
      return {
        ...state,
        activeWordIndex: action.payload,
        activeWordLetterIndex: 0
      };
    case gameConstants.KEY_PRESS_SUCCESS:
      return {
        ...state,
        error: false,
        activeWordLetterIndex: action.payload
      };
    case gameConstants.KEY_PRESS_FAILURE:
      return {
        ...state,
        error: true,
        errorCounter: state.errorCounter + 1
      };
    default:
      return state;
  }
};

export default GameReducer;
