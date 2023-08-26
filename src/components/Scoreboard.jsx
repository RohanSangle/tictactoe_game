import React from 'react';
import '../styles/scoreboard.css'

const Scoreboard = ({ score }) => {
  const { X, O, tie } = score;
  return (
    <div className="scoreboard">
      <button className='bluescore'>X : {X}</button>
      <button className='white'>TIES : {tie}</button>
      <button className='yellowscore'>O : {O}</button>
    </div>
  );
};

export default Scoreboard;