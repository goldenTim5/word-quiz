import { useEffect, useState } from "react";
import "../styles/words.scss";

const Words = ({ wordObj }) => {
  const [puzzleWord, setPuzzleWord] = useState([]);
  const [missingLetter, setMissingLetter] = useState("");
  // const isCorrectGuess = inputLetter === missingLetter;

  const setGame = () => {
    const letters = wordObj.word.toLowerCase().split("");
    const randomIndex = Math.floor(Math.random() * letters.length);
    const selectedLetter = letters[randomIndex];
    setMissingLetter(selectedLetter);
    letters[randomIndex] = "?";
    setPuzzleWord(letters);
  };

  useEffect(() => {
    setGame();
  }, [wordObj]);

  const handleLetterClick = (e) => {
    const letter = e.target.textContent;
    if (letter !== "?") return;
    console.log(letter);

    // onLetterClick(missingLetter);
  };

  return (
    <div className="words-container">
      <img src={wordObj.image} alt={wordObj.word} />
      <h3>Word to guess:</h3>
      <div className="guess-word">
        {puzzleWord.map((letter, index) => (
          <span
            className="letter"
            key={index}
            style={{ cursor: letter === "?" ? "pointer" : "default" }}
            onClick={handleLetterClick}
          >
            {letter}
          </span>
        ))}
      </div>
      {isCorrectGuess ? (
        <p>Correct! The missing letter was: {missingLetter}</p>
      ) : (
        <p>Guess the missing letter!</p>
      )}
    </div>
  );
};

export default Words;
