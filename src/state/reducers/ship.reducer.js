import { constants } from "../constants";

const ShipReducer = (state, action) => {
  switch (action.type) {
    case constants.CHANGE_POSITION:
      let position = state.position;
      position[action.name] = action.value;
      return { ...state, position };
    default:
      return state;
  }
};

export default ShipReducer;
