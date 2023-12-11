const KeyboardLetter = ({ letter, handleClick, lettersToShow }) => {
  const letterClass = lettersToShow.includes(letter) ? "keyboard-letter" : "keyboard-letter-hidden";

  return (
    <div className={letterClass} onClick={() => handleClick(letter)}>
      {letter}
    </div>
  );
};

export default KeyboardLetter;
