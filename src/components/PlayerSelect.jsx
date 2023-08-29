import React,{useState} from 'react';
import '../styles/player-select.css'

const PlayerSelect = ( {onSelectPlayer} ) => {
  const [chosenPlayer, setChosenPlayer]=useState(null);
  

  // const choosingPlayer=(player)=>{
  //   setChosenPlayer(player);

  // };

  const choosingPlayer = (player) => {
    setChosenPlayer(player === chosenPlayer ? null : player);
  };

  const xButtonClassName = chosenPlayer === 'X' ? 'xbutton selected' : 'xbutton';
  const oButtonClassName = chosenPlayer === 'O' ? 'obutton selected' : 'obutton';


  const handleNewGameClick = () => {
    if (chosenPlayer === 'X') {
      onSelectPlayer('X');
    } else if (chosenPlayer === 'O') {
      onSelectPlayer('O');
    }
  };

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
      <section className='menusmallbox2'>
        <button className='yellow' >NEW GAME (VS CPU)</button>
        <button className='blue' onClick={handleNewGameClick}>NEW GAME (VS PLAYER)</button>
        
      </section>
    </div>
  );
};

export default PlayerSelect;


