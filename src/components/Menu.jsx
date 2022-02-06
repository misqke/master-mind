import React from "react";
import "../styles/menu.scss";

const Menu = ({ message, click, code }) => {
  return (
    <div className="menu_container">
      <h2>{message}</h2>
      {message === "You lose! Play again?" && (
        <div className="menu_row">
          {code.code.map((color) => (
            <div
              key={Math.random() * Math.random()}
              className="menu_circle"
              style={{ backgroundColor: `${color.code}` }}
            ></div>
          ))}
        </div>
      )}
      <button onClick={click()}>Start Game</button>
    </div>
  );
};

export default Menu;
