import { useEffect, useState } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { useTextToSpeech } from "../controller/speechController";
import { words } from "../data/wordlist";
import Keyboard from "./Keyboard";
import Words from "./Words";
import "./game.scss";

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
      wordObj.puzzleWord = wordObj.word.toUpperCase().split("");
      const randomIndex = Math.floor(Math.random() * wordObj.puzzleWord.length);
      wordObj.selectedLetter = wordObj.puzzleWord[randomIndex];
      wordObj.missingLetterIndex = randomIndex;
      wordObj.puzzleWord[randomIndex] = "?";
      wordObj.guessMade = false;
      wordObj.isCorrect = false;
    });

    console.log(_words);
    setGameWords(_words);
  }, []);

  const nextWord = () => {
    setCurrentWordIndex((prevState) => prevState + 1);
    setInputLetter("");
  };

  const handleLetterClick = () => {
    // show keyboard
  };

  useEffect(() => {
    // useTextToSpeech(inputLetter);
    if (gameWords && wordObj.isCorrect) {
      useTextToSpeech(wordObj.word);
    }
    // setInputLetter("");
  }, [inputLetter]);

  useEffect(() => {
    console.log(inputLetter);
    if (inputLetter) {
      wordObj.puzzleWord[wordObj.missingLetterIndex] = inputLetter;
    }
  }, [inputLetter]);

  if (!gameWords) return;

  const wordObj = gameWords[currentWordIndex];

  const handleSubmit = () => {
    if (inputLetter) {
      wordObj.guessMade = true;
      wordObj.isCorrect = inputLetter === wordObj.selectedLetter;
      wordObj.puzzleWord = wordObj.puzzleWord.map((letter) =>
        letter === "?" ? inputLetter : letter
      );
    }
  };

  return (
    <>
      <div className="words-container">
        <div className="image-circle">
          <img
            src={wordObj.image}
            alt={wordObj.word}
            onClick={() => useTextToSpeech(wordObj.word)}
          />
        </div>
        <button onClick={() => useTextToSpeech(wordObj.word)}>
          <AiOutlineSound />
        </button>
        <h3>Word to guess:</h3>
        <div className="guess-word">
          {wordObj.puzzleWord.map((letter, index) => (
            <span
              className="letter"
              key={index}
              onClick={() => useTextToSpeech(letter)}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      {!wordObj.guessMade ? (
        <Keyboard
          setInputLetter={setInputLetter}
          correctLetter={wordObj.selectedLetter}
        />
      ) : (
        <div className="keyboard">
          {wordObj.isCorrect
            ? "Correct!"
            : `Incorrect! The word was ${wordObj.word.toLowerCase()}`}
          <button onClick={nextWord}>Next Word</button>
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Game;
