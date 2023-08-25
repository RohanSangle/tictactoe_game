import React from 'react';
import '../styles/player-select.css'

const PlayerSelect = ( {onSelectPlayer} ) => {
  return (
    <div className='menu'>
      
      <section className='menusmallbox'>
        <h2 className='line' >Pick Player 1's Mark</h2>
        <section className='xochoose'>
          <button onClick={() => onSelectPlayer('X')}>X</button>
          <button onClick={() => onSelectPlayer('O')}>O</button>
        </section>
        <h4 className='line'>REMEMBER : X goes first</h4>
      </section >
      <section className='menusmallbox2'>
        <button>NEW GAME (VS CPU)</button>
        <button>NEW GAME (VS PLAYER)</button>
      </section>
    </div>
  );
};

export default PlayerSelect;