import React, { useContext, useEffect } from "react";
import Button from "../../components/Button";
import GameContext from "../../state/game.context";
import { gameConstants } from "../../state/game.constants";
import Metrics from "../../components/Metrics";

export default function Score() {
  const { state, dispatch } = useContext(GameContext);
  let activeTimer;

  const reset = () => {
    dispatch({ type: gameConstants.RESET_GAME });
    document.getElementById("game").focus();
  };

  const startTimer = () =>
    activeTimer = setInterval(dispatch({ type: gameConstants.DECREMENT_TIMER }) , 1000);

  const calcErrorRate = (errorCounter, pressCounter) => {
    const rate = Math.round(100 - errorCounter/pressCounter * 100);
    return rate ? `${rate}%` : "---";
  };

  const metricData = [
    {
      label: "words:",
      value: state.activeWordIndex
    },
    {
      label: "errors:",
      value: state.errorCounter
    },
    {
      label: "hit%:",
      value: calcErrorRate(state.errorCounter, state.pressCounter)
    }
  ];

  useEffect(() => {
    if (state.active) startTimer();
  }, [state.active]);

  return (
    <div className="scoreContainer">
      <div>time:{state.timeRemaining}</div>
      <Metrics metrics={metricData} />
      <Button label="reset" handleClickEvent={reset} />
    </div>
  );
};
