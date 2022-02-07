import React from "react";
import "../styles/menu.scss";

const Menu = ({ message, click, code, options, change }) => {
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
      <div className="menu_options">
        <label htmlFor="colors">Colors</label>
        <select
          name="colors"
          id="colors"
          value={options.colors}
          onChange={change()}
        >
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>

        <label htmlFor="code_length">Code Length</label>
        <select
          name="codeLength"
          id="code_length"
          value={options.codeLength}
          onChange={change()}
        >
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
      <button onClick={click()}>Start Game</button>
    </div>
  );
};

export default Menu;
