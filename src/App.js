import React, { useState } from 'react';
import Board from './components/Board';
import PlayerSelect from './components/PlayerSelect';
import Scoreboard from './components/Scoreboard';
import RestartButton from './components/RestartButton';
import './styles/styles.css'

function App() {
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, tie: 0 });

  const handlePlayerSelect = (selectedPlayer) => {
    setPlayer(selectedPlayer);
  };

  const handleGameEnd = (winner) => {
    if (winner === 'X') {
      setScore((prevScore) => ({ ...prevScore, X: prevScore.X + 1 }));
    } else if (winner === 'O') {
      setScore((prevScore) => ({ ...prevScore, O: prevScore.O + 1 }));
    } else {
      setScore((prevScore) => ({ ...prevScore, tie: prevScore.tie + 1 }));
    }
  };

  const handleRestart = () => {
    setPlayer(null);
    setScore({ X: 0, O: 0, tie: 0 });
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {!player && <PlayerSelect onSelect={handlePlayerSelect} />}
      {player && (
        <>
          <Board player={player} onGameEnd={handleGameEnd} />
          <Scoreboard score={score} />
          <RestartButton onRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

export default App;