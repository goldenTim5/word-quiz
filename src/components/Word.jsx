import { useEffect, useState } from "react";
import { words } from "../data/wordlist";
import "../styles/words.scss";

const Word = ({ selectedLetter, puzzleWord, wordObj }) => {
	return (
		<div className="words-container">
			<img src={wordObj.image} alt={wordObj.word} />
			<h3>Word to guess:</h3>
			<div className="guess-word">
				{puzzleWord.map((letter, index) => (
					<span className={`letter `} key={index}>
						{letter}
					</span>
				))}
			</div>
			<p>Guess the missing letter!</p>
		</div>
	);
};

export default Word;
