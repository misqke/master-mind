import React from "react";
import { colors } from "../util/colors";
import "../styles/playBar.scss";

const PlayBar = ({ clicks, activeRow }) => {
  return (
    <div className="playBar_container">
      <div className="playBar_wrapper">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div
          className="playBar_btn"
          id="submit"
          style={{
            backgroundColor: "#777",
            border: `${activeRow.length === 4 ? "3px solid #0f0" : "none"}`,
          }}
          onClick={clicks.handleSubmit()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={`${activeRow.length === 4 ? "#0f0" : "#fff"}`}
            className="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
