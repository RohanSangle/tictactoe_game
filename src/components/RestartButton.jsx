import React from 'react';
import '../styles/restart-button.css'

const RestartButton = ({ handleRestart }) => {
  return (
    <button onClick={handleRestart}>Restart Game</button>


  );
};

export default RestartButton;