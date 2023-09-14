import React, { useState } from 'react';
import Board from './components/Board';
import PlayerSelect from './components/PlayerSelect';
import Scoreboard from './components/Scoreboard';
import RestartButton from './components/RestartButton';
import ComputerPlayer from './components/ComputerPlayer'; // Update the path to your component
import { calculateWinner, isBoardFull } from './utils';
import './App.css'
import xologo from './images/logo.svg'
import logout from './images/logout.png'

function App() {
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, tie: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [playerSelected, setPlayerSelected] = useState(false);
  const [vsComputer, setVsComputer] = useState(false);


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

  const toggleGameMode = () => {
    setVsComputer(!vsComputer);
  };

  const handleComputerMove = (SquareIndex) => {
    // Update the board with the computer's move
    const newBoard = [...board];
    newBoard[SquareIndex] = 'O';
    // newBoard[SquareIndex] = player === 'X' ? 'O' : 'X';
    setBoard(newBoard);
  
    // Check for a win or tie
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      // handleGameEnd(newWinner);
      // setGameOver(true);
      // Handle game end logic
    } else if (isBoardFull(newBoard)) {
      setWinner('tie');
      // handleGameEnd('tie');
      // setGameOver(true);
      // Handle game end logic for a tie
    } else {
      // Switch players
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

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
    setPlayerSelected(true);
  };

  const handleQuit = () => {
    setPlayer(null);
    setPlayerSelected(false);
    setBoard(Array(9).fill(null));
    setWinner(null);
    setScore({ X: 0, O: 0, tie: 0 });
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
        <PlayerSelect onSelectPlayer={handlePlayerSelect} toggleGameMode={toggleGameMode}/>
      </>
      }
      {vsComputer && (
        <>
            <ComputerPlayer
              board={board}
              currentPlayer={player}
              onComputerMove={handleComputerMove}
              setGameOver={setGameOver} 
            />
            <Board board={board} onClick={gameOver ? handleRestart : handleCellClick} onGameEnd={handleGameEnd} handleCellClick={handleCellClick} currentPlayer={player} />
            <Scoreboard score={score} />
            {winner && (
            <div className="winner-message">
              <p className='winmessage'>{winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}</p>
              <span className='end-buttons'>
                {playerSelected && <button className='smallquit' onClick={handleQuit}>Quit</button>}
                <button className='nextgame' onClick={handleRestart}>Next Round</button>
              </span>
            </div>
          )}
            
        </>
      )}
      {!vsComputer && player && (
        <>
          <section className='topbar'>
            <img className='tttlogo2' src={xologo} alt=''></img>
            <button className='turn'>{player} turn</button>
            <RestartButton handleRestart={handleRestart} />
            <img className='logout' src={logout} alt='' onClick={handleQuit}></img> 
          </section>
          {/* {vsComputer && (
            <ComputerPlayer
              board={board}
              currentPlayer={player}
              onComputerMove={handleComputerMove}
              setGameOver={setGameOver} 
            />
          )} */}
          <Board board={board} onClick={gameOver ? handleRestart : handleCellClick} onGameEnd={handleGameEnd} handleCellClick={handleCellClick} currentPlayer={player} />
          <Scoreboard score={score} />
          
          {winner && (
            <div className="winner-message">
              <p className='winmessage'>{winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}</p>
              <span className='end-buttons'>
                {playerSelected && <button className='smallquit' onClick={handleQuit}>Quit</button>}
                <button className='nextgame' onClick={handleRestart}>Next Round</button>
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;