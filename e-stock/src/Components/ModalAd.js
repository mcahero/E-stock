import react from "react";
import { Link } from 'react-router-dom';
import swicon from '../images/swicon.png'

function ModalAd({closeModal}) {
  return (
  <div className="modalBg"> 
  <div className="modalCont"> 
  <div className="closecont"> 
         <button onClick={() => closeModal(false)}> X </button>
  </div>
  <div className="modtitle"> </div>
  <img src={swicon} alt=" Cart" className="swicon" img/> 
  <div className="butcontain"> 
         <button className='modal-but' >Confirm</button>
         <button className='modal-but' type="submit" onClick={() => closeModal(false)} >Cancel</button>
         <Link to="/Employee" className="link">
         </Link>
  </div>
  </div>
  </div>
  );
}

export default ModalAd;