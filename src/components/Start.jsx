import React from "react";
import "../styles/start-end.scss";

const Start = ({ setGameState }) => {
  return (
    <>
      <div className="start-end-screen">
        <img
          src={`whatthreeletters.svg`}
          height="600px"
          width="600px"
          className="logo"
        />
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
