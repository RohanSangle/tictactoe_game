import React,{useEffect} from 'react';
import { calculateWinner, isBoardFull } from '../utils';

const ComputerPlayer = ({ board, currentPlayer, onComputerMove }) => {
  const AI_PLAYER = 'O';
  const HUMAN_PLAYER = 'X';

  const minimax = (currentBoard, depth, isMaximizing) => {
    const board = [...currentBoard];
    const winner = calculateWinner(board);
    if (winner === AI_PLAYER){
      // onComputerMove(bestMove());
      return 10 - depth;
    } 
    if (winner === HUMAN_PLAYER) return depth - 10;
    if (isBoardFull(board)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = AI_PLAYER;
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = HUMAN_PLAYER;
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  };

  const bestMove = () => {
    let bestScore = -Infinity;
    let bestMoveIndex = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = AI_PLAYER;
        const score = minimax(board, 0, false);
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMoveIndex = i;
        }
      }
    }

    return bestMoveIndex;
  };

  const makeMove = () => {
    if (currentPlayer === AI_PLAYER) {
      const move = bestMove();
      onComputerMove(move);
    }
  };

  useEffect(() => {
    if (currentPlayer === AI_PLAYER) {
      makeMove();
    }
  }, [currentPlayer]);

  // if (currentPlayer === AI_PLAYER) {
  //   makeMove();
  // }

  return null;
};

export default ComputerPlayer;
