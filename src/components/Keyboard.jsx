import { useState } from "react";
import KeyboardLetter from "./KeyboardLetter";
import "./keyboard.scss";

const Keyboard = ({ setInputLetter, correctLetter }) => {
  const [lettersToShow, setLettersToShow] = useState();

  const letters = [
    [..."QWERTYUIOP".split("")],
    [..."ASDFGHJKL".split("")],
    [..."ZXCVBNM".split("")],
  ];

  const giveMeAHint = () => {
    console.log("here");
    const _lettersToShow = letters.flat();

    _lettersToShow.sort((a, b) => {
      return Math.random() < 0.5 ? -1 : 1;
    });

    // keep the first three
    _lettersToShow.splice(2, _lettersToShow.length - 2);

    // add the letter we're looking for
    _lettersToShow.push(correctLetter.toUpperCase());

    setLettersToShow(_lettersToShow);
  };

  const handleClick = (letter) => {
    console.log(letter);
    setInputLetter(letter);
  };
  const lettersJSX = letters.map((row) => {
    const rowJSX = row.map((letter) => {
      return (
        <KeyboardLetter
          letter={letter}
          lettersToShow={lettersToShow || letters.flat()}
          handleClick={handleClick}
        />
      );
    });
    return <div className="keyboard-row">{rowJSX}</div>;
  });

  return (
    <div className="keyboard">
      {lettersJSX}
      <div className="keyboard-hint-button" onClick={giveMeAHint}>
        Give me a hint!
      </div>
    </div>
  );

};

export default Keyboard;
