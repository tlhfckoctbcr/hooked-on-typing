let KeyPressHelper = {};
KeyPressHelper._config = {};
KeyPressHelper.config = config => {
  const keyPresses = ["spacebar", "left", "up", "right", "down"];
  for (let keyPress of keyPresses) {
    KeyPressHelper._config[keyPress] = config[keyPress];
  }
};

KeyPressHelper.events = {
  onKeyDown: e => {
    switch (e.keyCode) {
      case 32:
        console.log("spacebar");
        KeyPressHelper._config.spacebar();
        return;
      case 37:
        console.log("left");
        KeyPressHelper._config.left();
        return;
      case 38:
        console.log("up");
        KeyPressHelper._config.up();
        return;
      case 39:
        console.log("right");
        KeyPressHelper._config.right();
        return;
      case 40:
        console.log("down");
        KeyPressHelper._config.down();
        return;
      default:
        return;
    }
  }
};

export default KeyPressHelper;
