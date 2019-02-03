import React from "react";

const Enemy = ({ enemy, letterIndex }) => {
  // Color the text to determine which letter is active
  const colorEnemyText = (enemy, letterIndex) => {
    let oldText = enemy.split(""), newText = [];
    for (const [index, letter] of oldText.entries()) {
      if (index === letterIndex) {
        newText.push(<span style={{ color: "gray" }}>{letter}</span>);
      } else if (index < letterIndex) {
        newText.push(<span style={{ color: "green" }}>{letter}</span>)
      } else {
        newText.push(<span style={{ color: "white" }}>{letter}</span>)
      }
    }

    if (newText.length) {
      return newText.map(text => (text));
    } else {
      return enemy;
    }
  };

  return (
    <>{colorEnemyText(enemy, letterIndex)}</>
  )
};

export default Enemy;
