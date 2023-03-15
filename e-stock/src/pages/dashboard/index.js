import React from 'react'
import Sidebar from '../../sidebar';
import './styles.css'


export default function Dashboard() {
    return (
        <div className='AppContainer'>
            <Sidebar/>
                <div className="dashboard">
                <h1>Welcome to my Dashboard</h1>
            </div>
      </div>
      
    );
  }
  
