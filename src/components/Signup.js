import React, { useState } from 'react';
import backgroundImage from '../assets/img/houses/b.avif'; // Import your background image
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 


const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cnfpassword:"",
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {name , phone , email , password , cnfpassword } = userData;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name , phone , email , password , cnfpassword   
    })
  });
     const data  = await res.json();
     if(data.status === 422 || !data){
      window.alert("Invalid registration");
      console.log("Invalid registration");
     }else{
            window.alert("Registration successfully ");
            console.log("Registration successfully");
            navigate("/signIn");
     }
  }

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   console.log('Sign Up with:', userData);
  //   // Add your sign up logic here
  // };

  

  const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      backgroundImage: `url(${backgroundImage})`, // Set background image
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
      marginLeft: '27px',
      border: '3px solid #007bff',
      borderRadius: '100px',
      fontSize: '14px',
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },

    input2: {
        padding: '10px',
        marginBottom: '16px',
        marginLeft: '44px',
        border: '3px solid #007bff',
        borderRadius: '100px',
        fontSize: '14px',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },

      input4: {
        padding: '10px',
        marginBottom: '16px',
        marginLeft: '49px',
        border: '3px solid #007bff',
        borderRadius: '100px',
        fontSize: '14px',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },

      input5: {
        padding: '10px',
        marginBottom: '16px',
        marginLeft: '15px',
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
  };

  return (
  <>
    <div style={styles.container} className='mb-8'>
      {/* <img src={require('../assets/img/houses/a.jpeg')} alt="HomeLand." style={styles.logo} /> */}
      <h2 style={styles.header}>Sign Up</h2>
      <form method="POST" style={styles.form} onSubmit={PostData}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Phone:
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            style={styles.input2}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            style={styles.input4}
            required
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            style={styles.input1}
            required
          />
        </label>
        <label style={styles.label}>
          Cnf Password:
          <input
            type="password"
            name="cnfpassword"
            value={userData.cnfpassword}
            onChange={handleInputChange}
            style={{...styles.input5,width: '55%' }}
            required
          />
        </label>

        
        <button 
          type="submit"
          style={styles.button}
          onMouseEnter={() => styles.buttonHover}
          onMouseLeave={() => ({})}
          value="register"
         //onClick={PostData}
        >
         <Link style={{color:'white',fontWeight: 'bold'}} >Register</Link>
         </button>
          <p style={{ textAlign: 'center', marginTop: '10px', color: 'white', cursor: 'pointer' }}>
            Already have an account? <Link style={{fontWeight: 'bold'}} to="/signIn"> Log in</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;