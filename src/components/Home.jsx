import { useState } from "react";
import Game from "./Game";

import GameOver from "./GameOver";
import Start from "./Start";
import Words from "./Words";

const Home = () => {
	const [gameState, setGameState] = useState(1);
	const [score, setScore] = useState(0);
	return (
		<>
			{gameState && gameState === 0 && <Start setGameState={setGameState} />}
			{gameState && gameState === 1 && (
				<Game setGameState={setGameState} setScore={setScore} />
			)}
			{gameState && gameState === 2 && (
				<GameOver setGameState={setGameState} score={score} />
			)}
		</>
	);
};

export default Home;
