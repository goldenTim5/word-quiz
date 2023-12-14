import React from "react";
import "../styles/start-end.scss";

const GameOver = ({ score, setGameState }) => {
	return (
		<>
			<div className="start-end-screen">
				<h1>Game Over</h1>
				<h2 className="final-score">You Scored {score} points </h2>
				{/* <img src={`logo.svg`} alt={`${logo} Icon`} height="100px" width="100px" /> */}
				<p>Click on the button below to start a new game</p>
				<button
					className="submit-button"
					aria-label="restart-game"
					onClick={() => setGameState(1)}
				>
					Play Again
				</button>
			</div>
		</>
	);
};

export default GameOver;
