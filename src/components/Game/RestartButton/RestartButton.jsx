import React from 'react';
import '../RestartButton/restart-button.css'
import restartimg from '../../../images/restart.jpg'

const RestartButton = ({setGameOver, setBoard, setPlayer, setWinner}) => {

  const handleRestart = () => {
    // setPlayer(null);
    setGameOver(false);
    setBoard(Array(9).fill(null))
    setPlayer('X');
    setWinner(null);
  };

  return (
    <> 
      <button className='restart-button' onClick={handleRestart}>
        <img src={restartimg} alt=''></img> 
      </button>
    </>
    
  );
};

export default RestartButton;