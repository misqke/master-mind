import React from "react";
import Row from "./Row";
import "../styles/gameBoard.scss";

const GameBoard = ({ gameBoard, activeRow, options }) => {
  return (
    <div className="gameBoard_container">
      {gameBoard.map((row, i) => (
        <Row row={row} key={i} options={options} />
      ))}
      <div className="gameBoard_active" id="active_row">
        <Row row={activeRow} options={options} />
      </div>
    </div>
  );
};

export default GameBoard;
