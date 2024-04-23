import { useState } from "react";
import useXox from "../hooks/use-xox";

// const initalBoard = () => Array(9).fill(null);

function Xox() {
  const {
    board,
    calculateWinner,
    getStatusMessage,
    handleClick,
    isXnext,
    resetGame,
  } = useXox();
  console.log(board);
  return (
    <>
      <div className="game">
        <div className="status">
          {getStatusMessage()}
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
        <div className="board">
          {board.map((b, i) => {
            return (
              <>
                <button
                  className="cell"
                  key={i}
                  onClick={() => handleClick(i)}
                  disabled={b !== null}
                >
                  {b}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Xox;
