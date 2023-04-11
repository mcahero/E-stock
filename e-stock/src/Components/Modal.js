import react from "react";

function Modal({closeModal}) {
  return (
  <div className="modalBg"> 
  <div className="modalContainer"> 
  <div className="titleClosebtn"> 
  <button onClick={() => closeModal(false)}> X </button>
  </div>
  <div className="modal-header"> </div>
  <h1> Switch to Employee</h1>
  <div className="body"> </div>
  <p> Are you sure you want to Switch to Employee? </p>
  <div className="footer"> </div>
  <button> Cancel </button>
  <button className='modal-button' type="submit">Confirm</button>
  </div>
  </div>
  );
}

export default Modal;