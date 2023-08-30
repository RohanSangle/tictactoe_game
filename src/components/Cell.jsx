import React from 'react';
import '../styles/cell.css';

const Cell = ({ value, onClick, currentPlayer }) => {
  const cellContentClass = value === 'X' ? 'x-content' : 'o-content';
  return (
    <button className={`cell ${cellContentClass}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Cell;