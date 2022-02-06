import React from "react";
import "../styles/row.scss";

const Row = ({ row }) => {
  return (
    <div className="row_container">
      <div className="row_square">
        {row.length > 0 && (
          <div
            className="row_circle"
            style={{ backgroundColor: `${row[0].code}` }}
          ></div>
        )}
      </div>
      <div className="row_square">
        {row.length > 1 && (
          <div
            className="row_circle"
            style={{ backgroundColor: `${row[1].code}` }}
          ></div>
        )}
      </div>
      <div className="row_square">
        {row.length > 2 && (
          <div
            className="row_circle"
            style={{ backgroundColor: `${row[2].code}` }}
          ></div>
        )}
      </div>
      <div className="row_square">
        {row.length > 3 && (
          <div
            className="row_circle"
            style={{ backgroundColor: `${row[3].code}` }}
          ></div>
        )}
      </div>
      <div className="row_check">
        {row.length > 4 &&
          row[4].exact.length > 0 &&
          row[4].exact.map((i) => (
            <div
              className="marker"
              key={Math.random() + Math.random()}
              style={{ backgroundColor: "#000" }}
            ></div>
          ))}
        {row.length > 4 &&
          row[4].close.length > 0 &&
          row[4].close.map((i) => (
            <div
              className="marker"
              key={Math.random() + Math.random()}
              style={{ backgroundColor: "#ddd" }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Row;
