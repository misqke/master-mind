import React from "react";
import Row from "./Row";
import "../styles/help.scss";

const Help = () => {
  const sampleRow = [
    {
      id: 1,
      color: "red",
      code: "#f00",
    },
    {
      id: 2,
      color: "orange",
      code: "#f70",
    },
    {
      id: 3,
      color: "yellow",
      code: "#ff0",
    },
    {
      id: 4,
      color: "green",
      code: "#0f0",
    },
    {
      exact: [1, 1],
      close: [1, 1],
    },
  ];
  return (
    <div className="help_container">
      <h2>How to play</h2>
      <p>
        A four color code will be generated at the start of the game. Your
        objective is to solve the code in 10 guesses or less.
      </p>
      <p>
        Use the bar at the bottom to fill out the active row and push the check
        button to submit your guess.
      </p>
      <Row row={sampleRow} />
      <p>
        The box to the right of the row will display the response to your guess.
      </p>
      <p>Each black circle indicates a color guessed in the correct spot.</p>
      <p>Each white circle indicates a correct color, but in the wrong spot.</p>
      <p>
        The above example indicates all four colors are in the code, and two of
        them are in the correct location.
      </p>
    </div>
  );
};

export default Help;
