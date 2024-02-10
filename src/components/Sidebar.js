import React from 'react';
import './dash.css'; 
import logooutIcon from '../assets/images/dash/logout.png';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user-info">
          <img  src='/login.png' alt="Login" width="50" height="50" />
          <p>Mukesh Yadav</p>
          <p>myadav986@rku.ac.in</p>
        </div>&nbsp;

        {/* Repeat the following block for each sidebar button */}
        <div className="sidebar-button">
          <img src={logooutIcon} alt="Login Icon" width="30" height="30" />
          <span>Dashboard</span>
        </div>&nbsp;

        <div class="sidebar-button">
        <img src="property.png" alt="Login Icon" width="30" height="30"/>
        <span>Property</span>
      </div>&nbsp;

      <div class="sidebar-button">
        <img src="fav.png" alt="Login Icon" width="30" height="30"/>
        <span>Favourite</span>
      </div>&nbsp;

      <div class="sidebar-button">
        <img src="setting.png" alt="Login Icon" width="30" height="30"/>
        <span>Setting</span>
      </div>&nbsp;
      
      <div class="sidebar-button">
        <img src="logout.png" alt="Login Icon" width="30" height="30"/>
        <span>Logout</span>
      </div>

        {/* ... Other sidebar buttons ... */}
      </div>

      <div className="main-content">
        <div className="navbar">
          <h2>HomeLand</h2>
          <div className="notification-bar">
            <img className="notification-icon" src="notification.png" alt="Notification Icon" width="30" height="30" />
          </div>
        </div><br />

        
      </div>
    </div>
  );
};

export default Dashboard;
