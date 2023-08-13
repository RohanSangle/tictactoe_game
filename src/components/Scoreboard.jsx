import React from 'react';
import '../styles/scoreboard.css'

const Scoreboard = ({ xWins, oWins, ties }) => {
  return (
    <div className="scoreboard">
      <p>X Wins: {xWins}</p>
      <p>O Wins: {oWins}</p>
      <p>Ties: {ties}</p>
    </div>
  );
};

export default Scoreboard;