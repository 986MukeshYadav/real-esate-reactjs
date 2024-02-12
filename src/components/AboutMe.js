import React from 'react';
import mukeshpic from '../images/mukeshpic.jpg';

const AboutMe = () => {
    return (
        <div className="container emp-profile">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={mukeshpic}
                        alt="Mukesh's Profile"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className='col-md-6'>
                    <div className="profile-head">
                        <h5>Mukesh yadav</h5>
                        <h6>Reacts Devlpoer</h6>
                    </div>
                    <div className="profile-rating mt-3">
                        <h6>Real Estate Marketing Coordinator</h6>
                        <h6>Real Estate Attorney</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
