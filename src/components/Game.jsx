import { useEffect, useState } from "react";
import { words } from "../data/wordlist";
import Keyboard from "./Keyboard";
import Word from "./Word";

const Game = ({ setGameState }) => {
	// const [words, setWords] = useState(words);

	const [wordObj, setWordObj] = useState(words[0]);
	const [puzzleWord, setPuzzleWord] = useState([]);
	const [correctLetter, setCorrectLetter] = useState("");
	const [selectedLetter, setSelectedLetter] = useState("");

	// const isCorrectGuess = inputLetter === missingLetter;

	const setGame = () => {
		const letters = wordObj.word.toLowerCase().split("");
		const randomIndex = Math.floor(Math.random() * letters.length);
		const selectedLetter = letters[randomIndex];
		setCorrectLetter(selectedLetter);
		letters[randomIndex] = "?";
		setPuzzleWord(letters);
	};

	useEffect(() => {
		setGame();
	}, []);

	return (
		<div>
			<Word
				wordObj={wordObj}
				puzzleWord={puzzleWord}
				selectedLetter={selectedLetter}
			/>
			<Keyboard
				correctLetter={correctLetter}
				setSelectedLetter={setSelectedLetter}
			/>
		</div>
	);
};

export default Game;
