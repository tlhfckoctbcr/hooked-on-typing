import { constants } from "../constants";
import randomWords from "random-words";

const BoardReducer = (state, action) => {
  switch (action.type) {
    case constants.GET_WORD_LIST:
      return {
        ...state,
        words: randomWords(100)
      };
    case constants.CHANGE_LAST_KEY_PRESS:
      return {
        ...state,
        lastKeyPress: action.payload,
        pressCounter: state.pressCounter + 1
      };
    case constants.CHANGE_ACTIVE_WORD:
      return {
        ...state,
        activeWordIndex: action.payload,
        activeWordLetterIndex: 0
      };
    case constants.KEY_PRESS_SUCCESS:
      return {
        ...state,
        error: false,
        activeWordLetterIndex: action.payload
      };
    case constants.KEY_PRESS_FAILURE:
      return {
        ...state,
        error: true,
        errorCounter: state.errorCounter + 1
      };
    default:
      return state;
  }
};

export default BoardReducer;
