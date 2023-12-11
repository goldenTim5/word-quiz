import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="start-screen">
        <h1>Start Game</h1>
        <h1>Welcome to What3Letters</h1>
        {/* <img src={`logo.svg`} alt={`${logo} Icon`} height="100px" width="100px" /> */}
        <p>Click on the button below to start a new game</p>
      </div>
      <button
        className="start-game"
        aria-label="start-game"
        onClick={navigate("/Game")}
      >
        Start Game
      </button>
    </>
  );
};

export default Start;
