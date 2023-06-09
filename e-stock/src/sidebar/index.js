import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import adimg from '../images/logoad.png'
import imgd from '../images/photo.png'
import dashcon from '../images/dash.png'
import treecon from '../images/tree.png'
import logscon from '../images/logs.png'

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <img src={adimg} className="logo_img" alt="logo_img" />
      <div className="button-container">
        <Link to="/Dashboard" className="link">
            <button className="button"> 
            <img src={dashcon} alt="Dashboard" className="dash_main" /> 
            <span className="button-text">Dashboard</span> </button>
        </Link>
        <Link to="/Stocks" className="link">
            <button className="button"> 
            <img src={treecon} alt="Stocks" className="stocks_main" /> 
            <span className="button-text">Stocks</span> </button>
        </Link>
        <Link to="/Logs" className="link">
            <button className="button"> 
            <img src={logscon} alt="Logs" className="logs_main" /> 
            <span className="button-text"> Logs </span> </button>
        </Link>
        <img src={imgd} className="photo_img" alt="photo_img"/>
      </div>
    </div>
  );
};

export default Sidebar;