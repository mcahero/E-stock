import React, { useState } from "react";
import { Link } from 'react-router-dom';
import swicon from '../images/swicon.png'

function ModalAd({closeModal}) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the input value is correct
    if (inputValue === 'admin123') {
      // Password is correct, link to index.js
      window.location.href = '/Dashboard';
    } else {
      // Password is incorrect, show error message
      setErrorMessage('Incorrect password. Please try again.');
    }
  }

  return (
    <div className="modalBg"> 
      <div className="modalCont"> 
        <div className="closecont"> 
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="modtitle"> </div>
        <img src={swicon} className="swicon" alt="swicon"/> 
        <div className="butcontain"> 
        <div className="form"> 
        <form onSubmit={handleSubmit}>
               <input className='swmodal-input' type="password" value={inputValue} onChange={handleInputChange} placeholder="Enter Password"/>
               <button className='modal-but' type="submit">Confirm</button>
               {errorMessage && <p className="error">{errorMessage}</p>}
       
       </form>
       </div>
       <Link to="/Employee" className="link"></Link>
       </div>
      </div>
    </div>
  );
}

export default ModalAd;
