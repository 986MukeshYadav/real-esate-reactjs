import React from 'react';
import mukeshpic from '../images/mukeshpic.jpg';

const AboutMe = () => {
    return (
        <>
        <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className='profile-img'>
                               
                                <img src={mukeshpic} 
                                alt="Profile"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} />
                            </div>
                        </div>
                <div className='col-md-6'>
                    <div className="profile-head">
                        <h5>Mukesh Yadav</h5>
                        <h6>Reacts Developer</h6>
                        <p className='profile-rating mt-3 mb-5' > RANKINGS:<span>1/10</span></p>

                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" href="#home">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" id="profile-tab" data-toggle="tab" role="tab" href="#profile">TimeLine</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="Submit" className='profile-edit-btn' name="btnAddMore" value="Edit Profile"></input>
                </div>
               </div>
               <div className='row'>
                <div className='col-md-4'>
                <div className='profile-work'>
                   <p > WORK Link</p>
                    <a href="https://www.linkedin.com/in/mukesh-yadav-000000197/">LinkedIn</a><br/>
                    <a href="https://www.linkedin.com/in/mukesh-yadav-000000197/">LinkedIn</a><br/>
                    <a href="https://www.linkedin.com/in/mukesh-yadav-000000197/">LinkedIn</a><br/>
                    <a href="https://www.linkedin.com/in/mukesh-yadav-000000197/">LinkedIn</a><br/>
                </div>
                </div>
                <div className="col-md-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                           <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >User ID </label>
                                </div>
                                <div className="col-md-6">
                                    <p> 376236857623875</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Mukesh Yadav</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Phone</label>
                                </div>
                                <div className="col-md-6">
                                    <p>8235802223</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>myadav986@rku.ac.in</p>
                                </div>
                        </div>

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >Password</label>
                                </div>
                                <div className="col-md-6">
                                    <p>....</p>
                                </div>
                        </div>
                      

                        <div className="row mt-3">
                                <div className="col-md-6">
                                    <label >cnfPassword</label>
                                </div>
                                <div className="col-md-6">
                                    <p>....</p>
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
               </div>

            </form>
        </div>
    </>
    );
}

export default AboutMe;
