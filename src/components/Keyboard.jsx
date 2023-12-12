import { useState } from "react";
import KeyboardLetter from "./KeyboardLetter";
import "./keyboard.scss";

const Keyboard = ({ setInputLetter, correctLetter, changeLetter }) => {
	const [lettersToShow, setLettersToShow] = useState();
	const [hintsNumber, setHintsNumber] = useState(0);

	const letters = [
		[..."QWERTYUIOP".split("")],
		[..."ASDFGHJKL".split("")],
		[..."ZXCVBNM".split("")],
	];

	const giveMeAHint = () => {
		// console.log("here");
		const _lettersToShow = letters.flat();

		_lettersToShow.sort((a, b) => {
			return Math.random() < 0.5 ? -1 : 1;
		});

		let _hintsNumber = hintsNumber + 1;

		let keepCals = _lettersToShow.length;
		if (_hintsNumber === 1) {
			keepCals = 7;
		} else if (_hintsNumber === 2) {
			keepCals = 2;
		}
		setHintsNumber(_hintsNumber);
		// keep the first three
		_lettersToShow.splice(keepCals, _lettersToShow.length - keepCals);

		// add the letter we're looking for
		_lettersToShow.push(correctLetter.toUpperCase());

		setLettersToShow(_lettersToShow);
	};

	const handleClick = (letter) => {
		// console.log(letter);
		// setInputLetter(letter);
		changeLetter(letter);
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
			{hintsNumber < 2 && (
				<div className="keyboard-hint-button" onClick={giveMeAHint}>
					Give me a hint!
				</div>
			)}
		</div>
	);
};

export default Keyboard;
