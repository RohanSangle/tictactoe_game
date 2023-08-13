import React from 'react';
import Cell from './Cell';
import '../styles/board.css'

const Board = ({ board, handleCellClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => handleCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;