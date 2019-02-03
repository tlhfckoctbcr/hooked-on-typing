import { KeyCodes } from "./KeyCodes";

let KeyPressHelper = {
  events: {
    onKeyDown: e => KeyCodes[e.keyCode]
  }
};

export default KeyPressHelper;
