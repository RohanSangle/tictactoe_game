import React, { useState, useEffect } from 'react';
import Board from './Board';
import RestartButton from './RestartButton';
import Scoreboard from './Scoreboard';
import PlayerSelect from './PlayerSelect';
import ComputerPlayer from './ComputerPlayer';
import MultiplayerPlayer from './MultiplayerPlayer';
import { calculateWinner, isBoardFull } from '../utils';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, tie: 0 });

  useEffect(() => {
    const savedBoard = localStorage.getItem('ticTacToeBoard');
    const savedPlayer = localStorage.getItem('ticTacToePlayer');
    const savedScore = localStorage.getItem('ticTacToeScore');

    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
    }

    if (savedPlayer) {
      setPlayer(savedPlayer);
    }

    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ticTacToeBoard', JSON.stringify(board));
    localStorage.setItem('ticTacToePlayer', player);
    localStorage.setItem('ticTacToeScore', JSON.stringify(score));
  }, [board, player, score]);

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

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const renderPlayer = () => {
    if (player === 'X') {
      return <PlayerSelect onSelect={setPlayer} />;
    } else if (player === 'O') {
      return <ComputerPlayer board={board} onCellClick={handleCellClick} />;
    } else {
      return <MultiplayerPlayer board={board} onCellClick={handleCellClick} />;
    }
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        <Board board={board} onCellClick={handleCellClick} />
      </div>
      <div className="game-info">
        <Scoreboard score={score} />
        {renderPlayer()}
        {winner && (
          <div className="winner-message">
            {winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}
          </div>
        )}
        <RestartButton onRestart={handleRestart} />
      </div>
    </div>
  );
};

export default Game;