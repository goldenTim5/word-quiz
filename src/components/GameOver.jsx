import React from "react";
// import { useNavigate } from "react-router-dom";
import Score from "./Score";

const GameOver = () => {
  //   const navigate = useNavigate();

  return (
    <>
      <div id="gameover-screen">
        <h1>Game Over</h1>
        {/* <h1>You Scored {Score} </h1> */}
        {/* <img src={`logo.svg`} alt={`${logo} Icon`} height="100px" width="100px" /> */}
        <p>Click on the button below to start a new game</p>
      </div>
      <button
        className="restart-game"
        aria-label="restart-game"
        // onClick={navigate("/Game")}
      >
        Play Again
      </button>
    </>
  );
};

export default GameOver;
