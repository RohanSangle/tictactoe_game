import React from 'react'
import '../GameModeSelect/GameModeSelect.css'

const GameModeSelect = ({vsComputer, setVsComputer, player, setPlayerSelected, playerSelected}) => {

    const toggleGameMode = () => {
        setVsComputer(!vsComputer);
    };

    const handleNewGameClick = () => {
      if (player === 'X' || player === 'O') {
        setPlayerSelected(!playerSelected);
      }
    };


  return (
    <div className='menu_second'>
      <div className='menusmallbox2'>
          <button className='yellow'onClick={toggleGameMode}>NEW GAME (VS CPU)</button>
          <button className='blue' onClick={handleNewGameClick}>NEW GAME (VS PLAYER)</button>
      </div>
    </div>
  )
}

export default GameModeSelect