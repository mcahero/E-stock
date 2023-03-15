import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        
  
            <div>
                <Link to="/Dashboard">
                    <button className='button'>Dashboard</button>
                </Link>
            </div>


      
            <div>
                <Link to="/Stocks">
                <button className='button'>Stocks</button>
                </Link>
            </div>
  

   
            <div>
                <Link to="/Logs">
                <button className='button'>Logs</button>
                </Link>
            </div>

    </div>
  );
};



export default Sidebar;
