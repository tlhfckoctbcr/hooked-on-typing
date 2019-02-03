import { KeyCodes } from "./KeyCodes";

let KeyPressHelper = {};

KeyPressHelper.config = config => {
  KeyPressHelper.dispatch = config.dispatch;
};

// Events will be tied to <div> by using a spread
// operator, so we will suppress this warning.
// noinspection JSUnusedGlobalSymbols
KeyPressHelper.events = {
  onKeyDown: e => {
    KeyPressHelper.dispatch(KeyCodes[e.keyCode]);
  }
};

export default KeyPressHelper;
