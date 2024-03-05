import React from "react";
import { Link } from "react-router-dom";
import FeedbackForm from "./Feedback";
import { FaHome, FaBuilding, FaHeart, FaCog, FaComments, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const styles = {
    customSidebar: {
      width: '200px',
      backgroundColor: 'white',
      minHeight: '80vh', // Adjusted height
      borderRight: '2px solid #ccc',
      borderRadius: '0 15px 15px 0', // More round borders
      padding: '10px',
    },
    customSidebarButton: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '50px', // More round buttons
      transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
      marginBottom: 'auto', // Adjusted margin
      color: 'black',
      textDecoration: 'none',
      border: '2px solid transparent',
      background: 'transparent',
    },
    customSidebarButtonHover: {
      backgroundColor: 'transparent',
      color: 'blue',
      border: '2px solid blue',
    },
    icon: {
      marginRight: '10px',
      fontSize: '20px',
    },
    navBar: {
      margin: '10px 0', // Adjust the margin values as needed
  },
  };

  return (
    <nav style={styles.customSidebar}>
      <div>
        Mukesh Yadav
        myadav986@rku.ac.in
      </div>
      <br />
      <b>
        <ul className="nav flex-column" style={styles.navBar}>
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="/User.jsp" style={styles.customSidebarButton}>
              <FaHome style={styles.icon} />
              Dashboard
            </Link>
          </div>
          <br/>
          <div
           style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="#" style={styles.customSidebarButton}>
              <FaBuilding style={styles.icon} />
              Property
            </Link>
          </div>
          <br/>
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="#" style={styles.customSidebarButton}>
              <FaHeart style={styles.icon} />
              Favourite
            </Link>
          </div>
          <br/>
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="#" style={styles.customSidebarButton}>
              <FaCog style={styles.icon} />
              Feedback
            </Link>
          </div>
          <br/>
          <div
            style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            className="custom-sidebar-button"
          >
            <Link to="/FeedbackForm" style={styles.customSidebarButton}>
              <FaComments style={styles.icon} />
              Feedback
            </Link>
          </div>
          <br/>
          <div
          style={{ ...styles.customSidebarButton, ...styles.customSidebarButtonHover }}
            
            className="custom-sidebar-button"
          >
            <Link to="/logout.jsp" style={styles.customSidebarButton}>
              <FaSignOutAlt style={styles.icon} />
              Logout
            </Link>
          </div>
        </ul>
      </b>
    </nav>
  );
};

export default Sidebar;
