import React from "react";

const Word = ({ word, letterIndex }) => {
  console.log(word, letterIndex);
  // Color the text to determine which letter is active
  const colorWordText = (word, letterIndex) => {
    let style,
      oldText = word.split(""),
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
    <div className="wordContainer">
      {colorWordText(word, letterIndex)}
    </div>
  )
};

export default Word;
