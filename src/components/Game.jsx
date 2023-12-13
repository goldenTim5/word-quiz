import { useEffect, useState } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { useTextToSpeech } from "../controller/speechController";
import { words } from "../data/wordlist";
import Keyboard from "./Keyboard";
import Words from "./Words";
import "./game.scss";

const wordsAmount = 4;

const Game = ({ setGameState, setScore, score }) => {
	const [gameWords, setGameWords] = useState();
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [inputLetter, setInputLetter] = useState("");
	const [submit, setSubmit] = useState(false);

	useEffect(() => {
		// initialise gamewords state
		// choose 10 random words from the wordlist
		setScore(0);
		const _words = [...words];
		_words.sort((a, b) => {
			return Math.random() < 0.5 ? -1 : 1;
		});

		_words.splice(wordsAmount, _words.length - wordsAmount);

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
		// end the game
		if (currentWordIndex === wordsAmount - 1) {
			setGameState(2);

			return;
		}
		setCurrentWordIndex((prevState) => prevState + 1);
		setInputLetter("");
	};

	const changeLetter = (letter) => {
		console.log(letter);
		setInputLetter(letter);
		wordObj.puzzleWord[wordObj.missingLetterIndex] = letter;
		useTextToSpeech(letter);
	};

	if (!gameWords) return;

	const wordObj = gameWords[currentWordIndex];

	const handleSubmit = () => {
		if (inputLetter) setSubmit(true);
	};

	if (submit) {
		wordObj.guessMade = true;
		wordObj.isCorrect =
			wordObj.puzzleWord.join("").toLowerCase() === wordObj.word.toLowerCase();
		if (wordObj.isCorrect) {
			setScore((prev) => prev + 1);
			useTextToSpeech(wordObj.word);
		}

		setSubmit(false);
	}

	return (
		<>
			<h3 className="score">Score: {score / 2}</h3>
			<div className="words-container">
				<img
					src={wordObj.image}
					alt={wordObj.word}
					onClick={() => useTextToSpeech(wordObj.word)}
				/>
				<button onClick={() => useTextToSpeech(wordObj.word)}>
					<AiOutlineSound />
				</button>
				<div className="guess-word">
					{wordObj.puzzleWord.map((letter, index) => (
						<div className="letter">
							<span
								className={`letter-content ${
									wordObj.missingLetterIndex === index && "letter-animation"
								}`}
								key={index}
								onClick={() => useTextToSpeech(letter)}
							>
								{letter}
							</span>
						</div>
					))}
				</div>
			</div>
			{!wordObj.guessMade ? (
				<Keyboard
					changeLetter={changeLetter}
					setInputLetter={setInputLetter}
					correctLetter={wordObj.selectedLetter}
				/>
			) : (
				<div className="keyboard">
					<span className="keyboard-text">
						{wordObj.isCorrect
							? "Correct!"
							: `Incorrect! The word was ${wordObj.word.toLowerCase()}`}
					</span>
					<button className="submit-button" onClick={nextWord}>
						Next Word
					</button>
				</div>
			)}
			{!wordObj.guessMade && (
				<button className="submit-button" onClick={handleSubmit}>
					Submit
				</button>
			)}
		</>
	);
};

export default Game;
