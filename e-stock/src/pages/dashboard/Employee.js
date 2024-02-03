import { useState } from "react";
import EmployeeSidebar from "../../EmployeeSidebar";
import './styles.css'
import CardA from '../../Components/Card_a'
import CardB from '../../Components/Card_b'
import CardC from '../../Components/Card_c'
import CardD from '../../Components/Card_d'
import ModalAd from '../../Components/ModalAd';
import swcon from '../../images/log.png'

export default function EmpDashboard() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='AppContainer'>
            <EmployeeSidebar/>
            <div className="dashboard">  

                <div className="Header-container"> 
                <span className="dashboard-text">Dashboard</span> 
                <span className="Analytic-text">Analytic Overview</span>
                <button 
            className="swbutton" 
            onClick = {() => 
            {setOpenModal(true)}}> 
            <img src={swcon} alt="log" className="log_main" /> 
            <span className="swbutton-text">Switch to Admin</span> </button>
                { openModal && <ModalAd closeModal={setOpenModal}/> }
                </div>  
                <CardA title="Today Sales" intext="no text"/>
                <CardB title="Available Products" intext="My Card Text"/>
                <CardC/>
                <CardD title="To Be Expired" intext="My Card Text"/> 
            </div>
            
      </div>
      
    
    );
  }