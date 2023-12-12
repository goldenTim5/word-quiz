import React from "react";
import "../styles/start-end.scss";

const Start = ({ setGameState }) => {
  return (
    <>
      <div className="start-end-screen">
        <h1>Start Game</h1>
        <h1>Welcome to What3Letters</h1>
        <img src={`whatthreeletters.svg`} height="100px" width="100px" />
        <p className="start-instructions">
          Click on the button below to start a new game
        </p>
        <button
          className="submit-button"
          aria-label="start-game"
          onClick={() => setGameState(1)}
        >
          Start Game
        </button>
      </div>
    </>
  );
};

export default Start;
