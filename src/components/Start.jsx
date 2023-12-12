import React from "react";

const Start = ({ setGameState }) => {
  return (
    <>
      <div id="start-screen">
        <h1>Start Game</h1>
        <h1>Welcome to What3Letters</h1>
        <img
          src={`logo.svg`}
          alt={`${logo} Icon`}
          height="100px"
          width="100px"
        />
        <p>Click on the button below to start a new game</p>
      </div>
      <button
        className="start-game"
        aria-label="start-game"
        onClick={() => setGameState(1)}
      >
        Start Game
      </button>
    </>
  );
};

export default Start;
