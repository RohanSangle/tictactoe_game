import React from 'react';
import '../styles/player-select.css'

const PlayerSelect = ( {onSelectPlayer} ) => {
  return (
    <div>
      <h2>Select Player</h2>
      <button onClick={() => onSelectPlayer('X')}>X</button>
      <button onClick={() => onSelectPlayer('O')}>O</button>
    </div>
  );
};

export default PlayerSelect;