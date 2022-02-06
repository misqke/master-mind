import { useState } from "react";
import "./styles/app.scss";
import PlayBar from "./components/PlayBar";
import GameBoard from "./components/GameBoard";
import Menu from "./components/Menu";
import Help from "./components/Help";
import { generateCode, checkGuess } from "./util/helpers";

function App() {
  const [gameBoard, setGameBoard] = useState([]);
  const [activeRow, setActiveRow] = useState([]);
  const [code, setCode] = useState();
  const [gameState, setGameState] = useState(false);
  const [message, setMessage] = useState("Welcome to Master Mind!");
  const [help, setHelp] = useState(false);

  const playBarFunctions = {
    handleColor: (color) => {
      return () => {
        if (activeRow.length === 4 && gameState) {
          return;
        }
        setActiveRow((prev) => [...prev, color]);
      };
    },
    handleDelete: () => {
      return () => {
        if (activeRow.length === 0 && gameState) {
          return;
        }
        const newRow = [...activeRow];
        newRow.pop();
        setActiveRow(newRow);
      };
    },
    handleSubmit: () => {
      return () => {
        if (activeRow.length !== 4) {
          return;
        } else if (gameState) {
          const res = checkGuess(activeRow, code);
          if (res.exact.length === 4) {
            setGameState(false);
            setMessage(`You win in ${gameBoard.length + 1} guesses!`);
          } else if (gameBoard.length + 1 === 10) {
            setGameState(false);
            setMessage("You lose! Play again?");
          } else {
            const newRow = [...activeRow, res];
            setGameBoard((prev) => [...prev, newRow]);
            setActiveRow([]);
            const active = document.getElementById("active_row");
            active.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      };
    },
  };

  const handleNewGame = () => {
    return () => {
      const code = generateCode();
      setCode(code);
      setGameBoard([]);
      setActiveRow([]);
      setGameState(true);
    };
  };

  return (
    <div className="App">
      {help && <Help />}
      <div className="header">
        <h1>Master Mind</h1>
      </div>
      {gameState ? (
        <GameBoard gameBoard={gameBoard} activeRow={activeRow} />
      ) : (
        <Menu message={message} click={handleNewGame} code={code} />
      )}
      <PlayBar clicks={playBarFunctions} activeRow={activeRow} />
      <div className="help_btn" onClick={() => setHelp((prev) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="#fff"
          className="bi bi-question-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>
      </div>
    </div>
  );
}

export default App;
