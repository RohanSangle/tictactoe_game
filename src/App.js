import React, { useState } from 'react';
import Board from './components/Board';
import PlayerSelect from './components/PlayerSelect';
import Scoreboard from './components/Scoreboard';
import RestartButton from './components/RestartButton';
import './styles/styles.css'

function App() {
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, tie: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const calculateWinner = (board) => {
    const winningCombinations = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    const winningCombination = winningCombinations.find((combination) => {
      const [a, b, c] = combination;
      return a && a === b && b === c;
    });

    return winningCombination ? winningCombination[0] : null;
  }

  const isBoardFull = (board) => {
    return board.every((cell) => cell !== null);
  }

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setScore((prevScore) => ({
        ...prevScore,
        [newWinner]: prevScore[newWinner] + 1,
      }));
      return;
    }

    if (isBoardFull(newBoard)) {
      setWinner('tie');
      setScore((prevScore) => ({
        ...prevScore,
        tie: prevScore.tie + 1,
      }));
      return;
    }

    setPlayer(player === 'X' ? 'O' : 'X');
  };

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
      {!player && <PlayerSelect onSelectPlayer={handlePlayerSelect} />}
      {player && (
        <>
          <Board board={board} onGameEnd={handleGameEnd} handleCellClick={handleCellClick} />
          <Scoreboard score={score} />
          
          {winner && (
            <div className="winner-message">
              {winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}
            </div>
          )}
          <RestartButton onRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

export default App;