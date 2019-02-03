import React from "react";

const Word = ({ word, letterIndex, positionIndex, error }) => {
  if (!word) return <></>;

  // Color the text to determine which letter is active
  const colorWordText = (word, letterIndex) => {
    let style,
      oldText = word.split(""),
      newText = [];

    const spanText = (letter, style, index) =>
      <span key={index} style={style}>{letter}</span>;

    for (const [index, letter] of oldText.entries()) {
      if (positionIndex === 0) {
        if (index === letterIndex)
          style = error ? { color: "red" } : { color: "#555" };
        else if (index < letterIndex)
          style = { color: "green" };
        else
          style = { color: "#EEE" };
      } else {
        style = { color: "#EEE" };
      }

      newText.push(spanText(letter, style, index));
    }

    return newText.map(text => (text));
  };

  const style = i => {
    if (i === 0) return { top: "100px" };
    else if (i === 1) return { top: "250px" };
    else return { top: "400px" };
  };

  return (
    <div className="wordContainer" style={style(positionIndex)}>
      {colorWordText(word, letterIndex)}
    </div>
  )
};

export default Word;
