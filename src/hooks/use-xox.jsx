import { useState } from "react";

const initalBoard = () => Array(9).fill(null);

const useXox = () => {
  const [board, setBoard] = useState(initalBoard());
  const [isXnext, setIsXnext] = useState(true);
  const WINING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const calculateWinner = (currentBoard) => {
    debugger;
    for (let i = 0; i < WINING_PATTERNS.length; i++) {
      const [a, b, c] = WINING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    // debugger;
    //check winner
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXnext(!isXnext);
  };
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!!!!!!!`;
    if (!board.includes(null)) return `it's a Draw`;
    return `Players ${isXnext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initalBoard());
    setIsXnext(isXnext);
  };
  return {
    board,
    isXnext,
    handleClick,
    resetGame,
    calculateWinner,
    getStatusMessage,
  };
};

export default useXox;
