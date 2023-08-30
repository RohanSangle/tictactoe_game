import React from 'react';
import Cell from './Cell';
import '../styles/board.css'

const Board = ({ board, handleCellClick, currentPlayer }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => handleCellClick(index)} currentPlayer={currentPlayer} />
      ))}
    </div>
  );
};

export default Board;