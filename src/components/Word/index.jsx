import React from "react";

export default function Word({ word, letterIndex, positionIndex, error }) {
  if (!word) return <></>;

  // Color the text to determine which letter is active
  const colorWordText = (word, letterIndex) => {
    let style,
      newText,
      oldText = word.split("");

    const spanText = (letter, style, index) =>
      <span key={index} style={style}>{letter}</span>;

    newText = oldText.map((letter, index) => {
      if (positionIndex === 0) {
        if (index === letterIndex)
          style = error
            ? { color: "red", backgroundColor: "black" }
            : { color: "#444", backgroundColor: "black" };
        else if (index < letterIndex)
          style = { color: "#00ff48" };
        else
          style = { color: "#eee" };
      } else {
        style = { color: "#444" };
      }
      return spanText(letter, style, index);
    });

    return newText.map(text => (text));
  };

  const style = i => {
    if (i === 0) return { fontSize: "5vw" };
    else return { fontSize: "4vw" };
  };

  return (
    <div className="wordContainer" style={style(positionIndex)}>
      {!positionIndex ? ">:" : ""}{colorWordText(word, letterIndex)}
    </div>
  )
};
