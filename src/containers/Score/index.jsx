import React, {useContext} from "react";
import BoardContext from "../../state/contexts/board.context";

export default function Score() {
  const { state } = useContext(BoardContext);

  const calcErrorRate = (errorCounter, pressCounter) => {
    const rate = Math.round(100 - errorCounter/pressCounter * 100);
    return rate ? `${rate}%` : "---";
  };

  return (
    <div className="scoreContainer">
      <ul>
        <li>errors: {state.errorCounter}</li>
        <li>rate: {calcErrorRate(state.errorCounter, state.pressCounter)}</li>
      </ul>
    </div>
  );
};
