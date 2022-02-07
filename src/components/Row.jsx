import React from "react";
import "../styles/row.scss";

const Row = ({ row, options }) => {
  const squares = [];
  for (let i = 0; i < options.codeLength; i++) {
    squares.push(1);
  }

  const boxStyle = {
    minWidth: options.codeLength > 4 ? "40px" : "50px",
    minHeight: options.codeLength > 4 ? "40px" : "50px",
  };

  const markerStyle = {
    minWidth: options.codeLength > 4 ? "10px" : "15px",
    minHeight: options.codeLength > 4 ? "10px" : "15px",
    backgroundColor: "#000",
  };

  const circleStyle = {
    minWidth: options.codeLength > 4 ? "30px" : "40px",
    minHeight: options.codeLength > 4 ? "30px" : "40px",
  };

  return (
    <div className="row_container">
      {squares.map((square, i) => (
        <div className="row_square" key={i} style={boxStyle}>
          {row.length > i && (
            <div
              className="row_circle"
              style={{ ...circleStyle, backgroundColor: `${row[i].code}` }}
            ></div>
          )}
        </div>
      ))}
      <div className="row_check" style={boxStyle}>
        {row.length > options.codeLength &&
          row[options.codeLength].exact.length > 0 &&
          row[options.codeLength].exact.map(() => (
            <div
              className="marker"
              key={Math.random() + Math.random()}
              style={markerStyle}
            ></div>
          ))}
        {row.length > options.codeLength &&
          row[options.codeLength].close.length > 0 &&
          row[options.codeLength].close.map(() => (
            <div
              className="marker"
              key={Math.random() + Math.random()}
              style={{ ...markerStyle, backgroundColor: "#fff" }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Row;
