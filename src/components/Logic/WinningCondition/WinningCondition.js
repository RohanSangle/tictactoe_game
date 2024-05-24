const Win_conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
  
export const calculateWinner = (board) => {
  for (let i = 0; i < Win_conditions.length; i++) {
    const [x, y, z] = Win_conditions[i];

    if (board[x] && board[x] === board[y] && board[y] === board[z]) {
      // setGameOver(true);
      
      return board[x];
    }
  }
}
  
export const isBoardFull = (board) => {
  return board.every((cell) => cell !== null);
}

