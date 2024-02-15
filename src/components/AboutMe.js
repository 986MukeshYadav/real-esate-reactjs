import React, { useEffect , useState } from 'react';
import mukeshpic from '../images/mukeshpic.jpg';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();
    const [userData , setUserData]=useState({});

    const callAboutMePage = async () =>{
        try{
            const res = await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            navigate('/signin'); 
        }
    }

     useEffect(()=>{
       callAboutMePage();
    
    },);

    const styles = {
        // Add the CSS styles directly here
        dashboardContainer: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
        },
        profileSection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
        },
        profileImg: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        profileDetails: {
            flex: '1',
            marginLeft: '20px',
        },
        editProfileBtn: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        tabsSection: {
            backgroundColor: '#f8f8f8',
            padding: '20px',
            borderRadius: '10px',
        },
        navTabs: {
            marginBottom: '20px',
        },
        navLink: {
            color: '#333',
            fontWeight: 'bold',
        },
        tabContent: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
        },
        // Add more styles based on your preferences
    };

    return (
        <div style={styles.dashboardContainer}>
            <form method="GET">
            <div style={styles.profileSection}>
                <div className="profile-img">
                    <img src={mukeshpic} alt="Profile" style={styles.profileImg} />
                </div>
                <div style={styles.profileDetails}>
                    <h2>{userData.name}</h2>
                    <h4>React Developer</h4>
                    <p className="profile-rating">Rankings: <span>1/10</span></p>
                </div>
                <div style={styles.editProfileBtn}>
                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                </div>
            </div>

            <div style={styles.tabsSection}>
                <ul className="nav nav-tabs" style={styles.navTabs}>
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" href="#home" style={styles.navLink}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" role="tab" href="#profile" style={styles.navLink}>Timeline</a>
                    </li>
                </ul>

                <div className="tab-content" style={styles.tabContent}>
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >User ID </label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData._id}</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.name}</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Phone</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.phone}</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.email}</p>
                                </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className='row'>
                            <div className="col-md-6">
                                <label >Experience</label>
                            </div>
                            <div className='col-md-6'>
                                <p>Expert</p>
                            </div>
                            </div>   
                    </div>
                </div>
            </div>
            </form>
        </div>
      
    );
}

export default AboutMe;
