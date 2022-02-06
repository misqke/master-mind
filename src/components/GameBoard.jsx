import React from "react";
import Row from "./Row";
import "../styles/gameBoard.scss";

const GameBoard = ({ gameBoard }) => {
  return (
    <div className="gameBoard_container">
      {gameBoard.map((row, i) => (
        <Row row={row} key={i} />
      ))}
    </div>
  );
};

export default GameBoard;
