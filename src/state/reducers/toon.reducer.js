import { constants } from "../constants";

const ToonReducer = (state, action) => {
  switch (action.type) {
    case constants.CHANGE_POSITION:
      console.log("Change Position");
      return {...state, position: action.payload};
    case constants.CHANGE_DIRECTION:
      console.log("Change Direction");
      return {...state, direction: action.payload};
    default:
      return state;
  }
};

export default ToonReducer;
