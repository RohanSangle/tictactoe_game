import React from 'react';
import '../Board/board.css'
import Cell from '../Cell/Cell.jsx';

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