import { Link } from 'react-router-dom';
function Modal({closeModal}) {
  return (
  <div className="modalBg"> 
  <div className="modalContainer"> 
  <div className="closecont"> 
         <button onClick={() => closeModal(false)}> X </button>
  </div>
  <div className="modtitle"> </div>
         <h1> Switch to Employee</h1>
  <div className="modbody"> </div>
         <p> Are you sure you want to Switch to Employee? </p>
  <div className="footer"> </div>
  <div className="butcont"> 
         <button className='modal-button' type="submit" onClick={() => closeModal(false)} >Cancel</button>
         <Link to="/Employee" className="link">
         <button className='modal-button' >Confirm</button>
         </Link>
  </div>
  </div>
  </div>
  );
}

export default Modal;