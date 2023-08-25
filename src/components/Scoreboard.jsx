import React from 'react';
import '../styles/scoreboard.css'

const Scoreboard = ({ score }) => {
  const { X, O, tie } = score;
  return (
    <div className="scoreboard">
      <p>X Wins: {X}</p>
      <p>O Wins: {O}</p>
      <p>Ties: {tie}</p>
    </div>
  );
};

export default Scoreboard;