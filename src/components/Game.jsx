import { useEffect, useState } from "react";
import { words } from "../data/wordlist";
import Words from "./Words";
import Keyboard from "./Keyboard";

const Game = () => {
  const [gameWords, setGameWords] = useState();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputLetter, setInputLetter] = useState("");

  useEffect(() => {
    // initialise gamewords state
    // choose 10 random words from the wordlist

    const _words = [...words];
    _words.sort((a, b) => {
      return Math.random() < 0.5 ? -1 : 1;
    });

    _words.splice(10, _words.length - 10);

    _words.forEach((wordObj) => {
      wordObj.puzzleWord = wordObj.word.toLowerCase().split("");
      const randomIndex = Math.floor(Math.random() * wordObj.puzzleWord.length);
      wordObj.selectedLetter = wordObj.puzzleWord[randomIndex];
      wordObj.puzzleWord[randomIndex] = "?";
      wordObj.guessMade = false;
      wordObj.isCorrect = false;
    });

    console.log(_words);
    setGameWords(_words);
  }, []);

  const nextWord = () => {
    setCurrentWordIndex((prevState) => prevState + 1);
  };

  const handleLetterClick = () => {
    // show keyboard
  };

  if (!gameWords) return;

  const wordObj = gameWords[currentWordIndex];

  return (
    <>
      <div className="words-container">
        <img src={wordObj.image} alt={wordObj.word} />
        <h3>Word to guess:</h3>
        <div className="guess-word">
          {wordObj.puzzleWord.map((letter, index) => (
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
      </div>
      <Keyboard setInputLetter={setInputLetter} correctLetter={wordObj.selectedLetter} />
    </>
  );
};

export default Game;
