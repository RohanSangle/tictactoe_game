import React from 'react';
import '../styles/restart-button.css'
import restartimg from '../images/restart.jpg'
// import Displaymessage from './Displaymessage';



const RestartButton = ({ handleRestart }) => {
  // const [buttonSelect, setbuttonSelect] = useState(false);

  // const displayAtRestart=()=>{
  //   setbuttonSelect(!buttonSelect);
  // };

  return (
    <>
        
      <button className='restart-button' onClick={handleRestart}>
        <img src={restartimg} alt=''></img> 
      </button>
      
      
    </>
    


  );
};

export default RestartButton;