import React,{useState} from 'react';
import '../PlayerSelect/PlayerSelect.css'

const PlayerSelect = ( {setPlayer} ) => {
  const [chosenPlayer, setChosenPlayer]=useState(null);

  const choosingPlayer = (player) => {
    
    if (player === 'X') {
      setPlayer('X');
      setChosenPlayer('X');

    } 
    else if (player === 'O') {
      setPlayer('O');
      setChosenPlayer('O');
      
    }
  };

  const xButtonClassName = chosenPlayer === 'X' ? 'xbutton selected' : 'xbutton';
  const oButtonClassName = chosenPlayer === 'O' ? 'obutton selected' : 'obutton';

  return (
    <div className='menu'>
      
      <section className='menusmallbox'>
        <h2 className='line' >Pick Player 1's Mark</h2> 
        <section className='xochoose'>
          <button className={xButtonClassName} onClick={() => choosingPlayer('X')}>X</button>
          <button className={oButtonClassName} onClick={() => choosingPlayer('O')}>O</button> 
          
        </section>
        <h4 className='line'>REMEMBER : X goes first</h4>
      </section >
    </div>
  );
};

export default PlayerSelect;


