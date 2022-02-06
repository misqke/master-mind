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
      <div className="row_check"></div>
    </div>
  );
};

export default Row;
