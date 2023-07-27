import React from 'react';

const MultiplayerPlayer = ({ player, handleClick }) => {
  return (
    <button className="player-button" onClick={handleClick}>
      {player}
    </button>
  );
};

export default MultiplayerPlayer;