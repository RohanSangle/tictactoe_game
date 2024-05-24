import React from 'react';
import '../Scoreboard/scoreboard.css'

const Scoreboard = ({ score }) => {
  const { X, O, tie } = score;
  return (
    <div className="scoreboard">
      <button className='bluescore'>X : <br></br> {X}</button>
      <button className='white'>TIES : <br></br> {tie}</button>
      <button className='yellowscore'>O : <br></br> {O}</button>
    </div>
  );
};

export default Scoreboard;