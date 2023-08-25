import React from 'react';
import '../styles/cell.css';

const Cell = ({ value, onClick }) => {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
};

export default Cell;