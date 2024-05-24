import React,{useState, useEffect, useLayoutEffect} from 'react';
import Board from './components/Game/Board/Board.jsx';
import PlayerSelect from './components/Home/PlayerSelect/PlayerSelect.jsx';
import GameModeSelect from './components/Home/GameModeSelect/GameModeSelect.jsx';
import Scoreboard from './components/Game/Scoreboard/Scoreboard.jsx';
import RestartButton from './components/Game/RestartButton/RestartButton.jsx';
import ComputerPlayer from './components/Logic/ComputerPlayerLogic/ComputerPlayer.jsx';
import { calculateWinner, isBoardFull} from './components/Logic/WinningCondition/WinningCondition.js';
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


  const handleQuit = () => {
    setPlayer(null);
    setVsComputer(null);
    setPlayerSelected(false);
    setBoard(Array(9).fill(null));
    setWinner(null);
    setScore({ X: 0, O: 0, tie: 0 });
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

  const handleRestart = () => {
    // setPlayer(null);
    setGameOver(false);
    setBoard(Array(9).fill(null))
    setPlayer('X');
    setWinner(null);
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

  const handleComputerMove = (SquareIndex) => {
    // Update the board with the computer's move
    const newBoard = [...board];
    newBoard[SquareIndex] = 'O';
    // Check for a win or tie
    const newWinner = calculateWinner(newBoard);
    
    if (newWinner === 'X' || newWinner === 'O' || isBoardFull(newBoard)) {
      // Game has ended
      setWinner(newWinner);
      setGameOver(true);
      handleGameEnd(newWinner);
    }
    else {
      // Switch players
      setPlayer(player === 'X' ? 'O' : 'X');
    }
    setBoard(newBoard);
  };
  //using useEffect to save the current play data even if logged out 

  useLayoutEffect(() => {
    const savedBoard = localStorage.getItem('ticTacToeBoard');
    const savedPlayer = localStorage.getItem('ticTacToePlayer');
    const savedScore = localStorage.getItem('ticTacToeScore');
    const pSelection = localStorage.getItem('playerselection');

    
    if (pSelection) {
      setPlayerSelected(true);
    }

    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
      
    }else{
      setBoard(Array(9).fill(null));
    }

    if (savedPlayer) {
      setPlayer(savedPlayer);
    }

    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }else{
      setScore({ X: 0, O: 0, tie: 0 });
    }
  }, []); 

  useEffect(() => {
    
    window.localStorage.setItem('ticTacToeBoard', JSON.stringify(board));
    window.localStorage.setItem('ticTacToePlayer', player);
    window.localStorage.setItem('ticTacToeScore', JSON.stringify(score));
    window.localStorage.setItem('playerselection', playerSelected);
  
  }, [board,player, score, playerSelected]);

  
  return (
    // <div >
      // {!player && !vsComputer &&
      // <>
      //   <img className='tttlogo' src={xologo} alt=''></img> 
      //   <PlayerSelect onSelectPlayer={handlePlayerSelect} toggleGameMode={toggleGameMode}/>
      // </>
      // }
    //   {vsComputer && (
    //     <>
    //       <section className='topbar'>
    //         <img className='tttlogo2' src={xologo} alt=''></img>
    //         <button className='turn'>{player} turn</button>
    //         <RestartButton handleRestart={handleRestart} />
    //         <img className='logout' src={logout} alt='' onClick={handleQuit}></img> 
    //       </section>

    //         <ComputerPlayer
    //           board={board}
    //           currentPlayer={player}
    //           onComputerMove={handleComputerMove}
    //           setGameOver={setGameOver} 
    //         />
    //         <Board
    //           board={board} 
    //           onClick={gameOver ? handleRestart : handleCellClick} 
    //           onGameEnd={handleGameEnd} 
    //           handleCellClick={handleCellClick} 
    //           currentPlayer={player} 
    //         />
    //         <Scoreboard score={score} />
    //         {winner && (
    //         <div className="winner-message">
    //           <p className='winmessage'>{winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}</p>
    //           <span className='end-buttons'>
    //             <button className='smallquit' onClick={handleQuit}>Quit</button>
    //             <button className='nextgame' onClick={handleRestart}>Next Round</button>
    //           </span>
    //         </div>
    //       )}
            
    //     </>
    //   )}
    //   {!vsComputer && player && (
    //     <>
    //       <section className='topbar'>
    //         <img className='tttlogo2' src={xologo} alt=''></img>
    //         <button className='turn'>{player} turn</button>
    //         <RestartButton handleRestart={handleRestart} />
    //         <img className='logout' src={logout} alt='' onClick={handleQuit}></img> 
    //       </section>
          
    //       <Board 
    //         board={board} 
    //         onClick={gameOver ? handleRestart : handleCellClick} 
    //         onGameEnd={handleGameEnd} 
    //         handleCellClick={handleCellClick} 
    //         currentPlayer={player} 
    //       />
    //       <Scoreboard score={score} />
          
    //       {winner && (
    //         <div className="winner-message">
    //           <p className='winmessage'>{winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}</p>
    //           <span className='end-buttons'>
    //             {playerSelected && <button className='smallquit' onClick={handleQuit}>Quit</button>}
    //             <button className='nextgame' onClick={handleRestart}>Next Round</button>
    //           </span>
    //         </div>
    //       )}
    //     </>
    //   )}
    // </div>
    <div>
      {!playerSelected && !vsComputer && (
      <>
        <img className='tttlogo' src={xologo} alt=''></img>
        <PlayerSelect setPlayer={setPlayer} />
        <GameModeSelect  
          vsComputer={vsComputer} 
          setVsComputer={setVsComputer} 
          player={player} 
          setPlayerSelected={setPlayerSelected} 
          playerSelected={playerSelected}/>
      </>
      )}

      {playerSelected && (
        <>
          <section className='topbar'>
            <img className='tttlogo2' src={xologo} alt=''></img>
            <button className='turn'>{player} turn</button>
            <RestartButton 
              setGameOver={setGameOver} 
              setBoard={setBoard} 
              setPlayer={setPlayer} 
              setWinner={setWinner} 
            />
            <img className='logout' src={logout} alt='' onClick={handleQuit}></img> 
          </section>

          <Board 
            board={board} 
            // onClick={gameOver ? handleRestart : handleCellClick} 
            onGameEnd={handleGameEnd} 
            handleCellClick={handleCellClick} 
            currentPlayer={player} 
          />

          <Scoreboard score={score} />
          {winner && (
            <div className="winner-message">
              <p className='winmessage'>{winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}</p>
              <span className='end-buttons'>
                <button className='smallquit' onClick={handleQuit}>Quit</button>
                <button className='nextgame' onClick={handleRestart}>Next Round</button>
              </span>
            </div>
          )}

        </>
      )}

      {vsComputer && (
        <>
          <section className='topbar'>
            <img className='tttlogo2' src={xologo} alt=''></img>
            <button className='turn'>{player} turn</button>
            <RestartButton 
              setGameOver={setGameOver} 
              setBoard={setBoard} 
              setPlayer={setPlayer} 
              setWinner={setWinner} 
            />
            <img className='logout' src={logout} alt='' onClick={handleQuit}></img> 
          </section>

          <ComputerPlayer
            board={board}
            currentPlayer={player}
            onComputerMove={handleComputerMove}
            setGameOver={setGameOver} 
          />

          <Board 
            board={board} 
            // onClick={gameOver ? handleRestart : handleCellClick} 
            onGameEnd={handleGameEnd} 
            handleCellClick={handleCellClick} 
            currentPlayer={player} 
          />

          <Scoreboard score={score} />
          {winner && (
            <div className="winner-message">
              <p className='winmessage'>{winner === 'tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}</p>
              <span className='end-buttons'>
                <button className='smallquit' onClick={handleQuit}>Quit</button>
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