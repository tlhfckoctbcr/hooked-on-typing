import { gameConstants } from "./game.constants";
import { initialState } from "./initialState";

const GameReducer = (state, action) => {
  switch (action.type) {
    case gameConstants.START_GAME:
      return {
        ...state,
        active: true
      };
    case gameConstants.RESET_GAME:
      return {
        ...initialState
      };
    case gameConstants.GET_WORDS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case gameConstants.GET_WORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        words: action.payload
      };
    case gameConstants.GET_WORDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    case gameConstants.CHANGE_LAST_KEY_PRESS:
      return {
        ...state,
        lastKeyPress: action.payload,
        pressCounter: state.pressCounter + 1
      };
    case gameConstants.KEY_PRESS_SUCCESS:
      return {
        ...state,
        pressError: false,
        activeWordLetterIndex: action.payload
      };
    case gameConstants.KEY_PRESS_FAILURE:
      return {
        ...state,
        pressError: true,
        errorCounter: state.errorCounter + 1
      };
    case gameConstants.CHANGE_ACTIVE_WORD:
      return {
        ...state,
        pressError: false,
        activeWordIndex: action.payload,
        activeWordLetterIndex: 0
      };
    case gameConstants.TICK:
      const value = state.timerDirection === "desc"
        ? state.timer - 1
        : state.timer + 1;
      return {
        ...state,
        timer: value
      };
    default:
      return state;
  }
};

export default GameReducer;
