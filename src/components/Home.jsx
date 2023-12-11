import Words from "./Words";
import Start from "./Start";
import GameOver from "./GameOver";
import { useState } from "react";
import Game from "./Game";

const Home = () => {
  const [gameState, setGameState] = useState(1);
  return (
    <>
      {gameState && gameState === 0 && <Start setGameState={setGameState} />}
      {gameState && gameState === 1 && <Game setGameState={setGameState} />}
      {gameState && gameState === 2 && <GameOver setGameState={setGameState} />}
    </>
  );
};

export default Home;
