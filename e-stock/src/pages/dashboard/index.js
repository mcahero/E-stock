import { useState } from "react";
import Sidebar from '../../sidebar';
import './styles.css'
import Card_a from '../../Components/Card_a'
import Card_b from '../../Components/Card_b'
import Card_c from '../../Components/Card_c'
import Card_d from '../../Components/Card_d'
import Modal from '../../Components/Modal';

import swcon from '../../images/log.png'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='AppContainer'>
                <Sidebar/>
            <div className="dashboard">
                <div className="Header-container"> 
                <span className="dashboard-text">Dashboard</span> 
                <span className="Analytic-text">Analytic Overview</span>
            <button 
            className="swbutton" 
            onClick = {() => 
            {setOpenModal(true)}}> 
            <img src={swcon} alt="log" className="log_main" /> 
            <span className="swbutton-text">Switch to Employee</span> </button>
                { openModal && <Modal closeModal={setOpenModal}/> }
                </div>  
                <Card_a title="Today Sales" intext="no text"/>
                <Card_b title="Available Products" intext="My Card Text"/>
                <Card_c/>
                <Card_d title="To Be Expired" intext="My Card Text"/> 
            </div>
            
      </div>
      
    
    );
  }
