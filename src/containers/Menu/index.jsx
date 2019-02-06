import React, { useContext, useEffect } from "react";
import Button from "../../components/Button";
import GameContext from "../../state/game.context";
import { gameConstants } from "../../state/game.constants";
import Metrics from "../../components/Metrics";

let clock;

export default function Menu() {
  const { state, dispatch } = useContext(GameContext);
  const {
    active,
    activeWordIndex,
    pressCounter,
    errorCounter,
    timer
  } = state;

  const startTimer = () => {
    clearInterval(clock);
    clock = setInterval(() =>
      dispatch({ type: gameConstants.TICK }), 1000);
  };

  const stopTimer = () => {
    clearInterval(clock);
  };

  const reset = () => {
    stopTimer();
    dispatch({ type: gameConstants.RESET_GAME });
    document.getElementById("game").focus();
  };

  const calcErrorRate = (error, press) => {
    const rate = Math.round(100 - error/press* 100);
    return rate ? `${rate}%` : "---";
  };

  const calcWordsPerMinute = (wordCount, timer) => {
    const wpm = Math.round(60 / (60 - timer) * wordCount);
    return wpm ? wpm : "---";
  };

  const metricData = [
    {
      label: "words:",
      value: activeWordIndex
    },
    {
      label: "errors:",
      value: errorCounter
    },
    {
      label: "hit%:",
      value: calcErrorRate(errorCounter, pressCounter)
    },
    {
      label: "wpm:",
      value: calcWordsPerMinute(activeWordIndex, timer)
    }
  ];

  useEffect(() => {
    if (timer)
      return;

    stopTimer();
  }, [timer]);

  useEffect(() => {
    if (!active)
      return;

    startTimer();
  }, [active]);

  return (
    <div className="menuContainer">
      <div>time:{timer}</div>
      <Metrics metrics={metricData} />
      <Button label="reset" handleClickEvent={reset} />
    </div>
  );
};
