import React from 'react';
import '../styles/restart-button.css'

const RestartButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Restart Game</button>
  );
};

export default RestartButton;