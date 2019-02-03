import { KeyCodes } from "./KeyCodes";

let KeyPressHelper = {};

KeyPressHelper.config = config => {
  KeyPressHelper.dispatch = config.dispatch;
};

KeyPressHelper.events = {
  onKeyDown: e => {
    KeyPressHelper.dispatch(KeyCodes[e.keyCode]);
  }
};

export default KeyPressHelper;
