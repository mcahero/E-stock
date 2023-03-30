import React from 'react'
import Sidebar from '../../sidebar';
import './styles.css'
import Card_a from '../../Components/Card_a'
import Card_b from '../../Components/Card_b'
import Card_c from '../../Components/Card_c'
import Card_d from '../../Components/Card_d'
import cartcon from '../../images/cart.png'
import swcon from '../../images/log.png'
import { Link } from 'react-router-dom';

export default function EmpDashboard() {
    return (
        <div className='AppContainer'>
                <Sidebar/>
            <div className="dashboard">
                
                <div className="Header-container"> 
                <span className="dashboard-text">Dashboard</span> 
                <span className="Analytic-text">Analytic Overview</span>
                <Link to="/Stocks" className="link">
            <button className="swbutton"> 
            <img src={swcon} alt="log" className="log_main" /> 
            <span className="swbutton-text">Switch to Admin</span> </button>
                </Link>
                </div>  
                <Card_a title="Today Sales" intext="no text"/>
                <Card_b title="Available Products" intext="My Card Text"/>
                <Card_c/>
                <Card_d title="To Be Expired" intext="My Card Text"/> 
            </div>
            
      </div>
      
    
    );
  }
