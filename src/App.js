import { useState, useEffect } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import PlayBar from "./components/PlayBar";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameBoard, setGameBoard] = useState([[]]);
  const [activeRow, setActiveRow] = useState(gameBoard[gameBoard.length - 1]);
  const [activeSquare, setActiveSquare] = useState(activeRow[0]);

  const playBarFunctions = {
    handleColor: (color) => {
      return () => {
        if (activeRow.length === 4) {
          return;
        }
        setActiveRow((prev) => [...prev, color]);
      };
    },
    handleDelete: () => {
      return () => {
        if (activeRow.length === 0) {
          return;
        }
        const newRow = [...activeRow];
        newRow.pop();
        setActiveRow(newRow);
      };
    },
  };

  useEffect(() => {
    const updateGameBoard = () => {
      const newBoard = [...gameBoard];
      newBoard.pop();
      setGameBoard([...newBoard, activeRow]);
    };
    updateGameBoard();
  }, [activeRow]);

  return (
    <div className="App">
      <Header />
      <GameBoard gameBoard={gameBoard} />
      <PlayBar clicks={playBarFunctions} activeRow={activeRow} />
    </div>
  );
}

export default App;
