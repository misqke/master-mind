import React from "react";
import Row from "./Row";
import "../styles/gameBoard.scss";

const GameBoard = ({ gameBoard, activeRow }) => {
  return (
    <div className="gameBoard_container">
      {gameBoard.map((row, i) => (
        <Row row={row} key={i} />
      ))}
      <div className="gameBoard_active" id="active_row">
        <Row row={activeRow} />
      </div>
    </div>
  );
};

export default GameBoard;
