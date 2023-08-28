import React from 'react';
import '../styles/restart-button.css'
import restartimg from '../images/restart.jpg'

// const [buttonSelect, onbuttonSelect] = useState(false);

const RestartButton = ({ handleRestart }) => {
  return (
    <button className='restart-button' onClick={handleRestart}>
      <img src={restartimg} alt=''></img>
    </button>

    // {!buttonSelect && }
    


  );
};

export default RestartButton;