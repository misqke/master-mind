import React from "react";
import { colors } from "../util/colors";
import "../styles/playBar.scss";

const PlayBar = ({ clicks, activeRow }) => {
  return (
    <div className="playBar_container">
      {colors.map((color) => (
        <div
          className="playBar_btn"
          id={color.id}
          key={color.id}
          style={{ backgroundColor: `${color.code}` }}
          onClick={clicks.handleColor(color)}
        ></div>
      ))}
      <div
        className="playBar_btn"
        id="delete"
        style={{ backgroundColor: "#777" }}
        onClick={clicks.handleDelete()}
      >
        x
      </div>
      <div
        className="playBar_btn"
        id="submit"
        style={{
          backgroundColor: "#777",
          border: `${activeRow.length === 4 ? "4px solid #0f0" : "none"}`,
        }}
      >
        +
      </div>
    </div>
  );
};

export default PlayBar;
