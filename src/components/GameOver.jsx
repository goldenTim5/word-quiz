import React from "react";

const GameOver = ({ score, setGameState }) => {
  return (
    <>
      <div id="gameover-screen">
        <h1>Game Over</h1>
        <h2>You Scored {score} points </h2>
        {/* <img src={`logo.svg`} alt={`${logo} Icon`} height="100px" width="100px" /> */}
        <p>Click on the button below to start a new game</p>
      </div>
      <button className="restart-game" aria-label="restart-game">
        onClick={() => setGameState(0)}
        Play Again
      </button>
    </>
  );
};

export default GameOver;
