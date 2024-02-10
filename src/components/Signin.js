import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/img/houses/b.avif'; 

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === 'checkbox' ? checked : value,
    
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign In with:', credentials);
    // Add your authentication logic here
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
    },
    logo: {
      width: '20%',
      marginBottom: '20px',
      color: '#fff',
      fontSize: '15px',
    },
    header: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '24px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '16px',
      color: '#fff',
      fontSize: '15px',
    },
    input: {
      padding: '10px',
      marginBottom: '16px',
      marginLeft: '45px',
      border: '3px solid #007bff',
      borderRadius: '100px',
      fontSize: '14px',
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    input1: {
      padding: '10px',
      marginBottom: '16px',
      marginLeft: '50px',
      marginRight:'auto',  
      border: '3px solid #007bff',
      borderRadius: '100px',
      fontSize: '14px',
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
  
    button: {
      padding: '14px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    rememberMe: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      color: '#fff',
      fontSize: '14px',
    },
  
    link: {
      color: '#007bff',
      textDecoration: 'none',
      marginLeft: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {/* <img src={require('../assets/img/houses/a.jpeg')} alt="HomeLand." style={styles.logo } />Add your logo */}
      <h2 style={styles.header}>Sign In</h2>
      <form style={styles.form} onSubmit={handleSignIn}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            style={styles.input1}
            required
          />
       </label>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <label style={{ ...styles.rememberMe, marginRight: '16px' }}>
      <input
        type="checkbox"
        name="rememberMe"
        checked={credentials.rememberMe}
        onChange={handleInputChange}
      />
      Remember Me
    </label>
    <div>
      <Link to="/forgot-password" style={styles.link}>
        Forgot Password?
      </Link>
    </div>
  </div>

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={() => styles.buttonHover}
          onMouseLeave={() => ({})}
        >
          Sign In
        </button>
      </form>
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
        Not a member? <Link to="/signup" style={styles.link}>Register here</Link>
        <div style={{ marginTop: '10px' }}>
          <i className="fab fa-google" style={{ fontSize: '24px', marginRight: '10px', color: 'white' }}></i>
          <i className="fab fa-twitter" style={{ fontSize: '24px', marginRight: '10px', color: 'white' }}></i>
          <i className="fab fa-facebook" style={{ fontSize: '24px', color: 'white' }}></i>
        </div>
      </div>
    </div>
  );
};

export default SignIn;