import React from "react";

const Enemy = ({ enemy, letterIndex }) => {
  console.log(enemy, letterIndex);
  // Color the text to determine which letter is active
  const colorEnemyText = (enemy, letterIndex) => {
    let style,
      oldText = enemy.split(""),
      newText = [];

    const spanText = (letter, style, index) =>
      <span key={index} style={style}>{letter}</span>;

    for (const [index, letter] of oldText.entries()) {
      if (index === letterIndex)
        style = { color: "gray" };
      else if (index < letterIndex)
        style = { color: "black" };
      else
        style = { color: "white" };
      newText.push(spanText(letter, style, index));
    }

    return newText.map(text => (text));
  };

  return (
    <div className="enemyContainer">
      {colorEnemyText(enemy, letterIndex)}
    </div>
  )
};

export default Enemy;
