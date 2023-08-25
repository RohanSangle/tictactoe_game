import React, { useState } from 'react';
import Board from './components/Board';
import PlayerSelect from './components/PlayerSelect';
import Scoreboard from './components/Scoreboard';
import RestartButton from './components/RestartButton';
import './App.css'
import xologo from './images/xologo.jpg'

function App() {
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, tie: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // useEffect(() => {
  //   const savedBoard = localStorage.getItem('ticTacToeBoard');
  //   const savedPlayer = localStorage.getItem('ticTacToePlayer');
  //   const savedScore = localStorage.getItem('ticTacToeScore');

  //   if (savedBoard) {
  //     setBoard(JSON.parse(savedBoard));
  //   }

  //   if (savedPlayer) {
  //     setPlayer(savedPlayer);
  //   }

  //   if (savedScore) {
  //     setScore(JSON.parse(savedScore));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('ticTacToeBoard', JSON.stringify(board));
  //   localStorage.setItem('ticTacToePlayer', player);
  //   localStorage.setItem('ticTacToeScore', JSON.stringify(score));
  // }, [board, player, score]);

  // const calculateWinner = (board) => {
  //   const winningCombinations = [
  //     [board[0], board[1], board[2]],
  //     [board[3], board[4], board[5]],
  //     [board[6], board[7], board[8]],
  //     [board[0], board[3], board[6]],
  //     [board[1], board[4], board[7]],
  //     [board[2], board[5], board[8]],
  //     [board[0], board[4], board[8]],
  //     [board[2], board[4], board[6]],
  //   ];

  //   const winningCombination = winningCombinations.find((combination) => {
  //     const [a, b, c] = combination;
      
  //     return a && a === b && b === c;
      
  //   });

  //   return winningCombination ? winningCombination[0] : null;
  // }

  const Win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const calculateWinner = (board) => {
    for (let i = 0; i < Win_conditions.length; i++) {
      const [x, y, z] = Win_conditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
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
    // setPlayer(null);
    setGameOver(false);
    setBoard(Array(9).fill(null))
    setPlayer('X');
    setWinner(null);
    // setScore({ X: 0, O: 0, tie: 0 });
  };

  return (
    <div className="">
      {!player &&
      <>
        {/* <h1 className='tttlogo'>Tic Tac Toe</h1> */}
        <img className='tttlogo' src={xologo} alt=''></img> 
        <PlayerSelect onSelectPlayer={handlePlayerSelect} />
      </>
      }
      {player && (
        <>
          <Board board={board} onClick={gameOver ? handleRestart : handleCellClick} onGameEnd={handleGameEnd} handleCellClick={handleCellClick} />
          <Scoreboard score={score} />
          
          {winner && (
            <div className="winner-message">
              {winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}
            </div>
          )}
          <RestartButton handleRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

export default App;