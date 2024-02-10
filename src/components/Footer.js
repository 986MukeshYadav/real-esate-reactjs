import React from 'react';
import a from '../assets/img/houses/m.jpg';
import b from '../assets/img/houses/r.jpg';
import c from '../assets/img/houses/p.jpg';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



const Footer = () => {
  return (

    <div>
      {/* First Row */}
      <div  style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.title}>Get in touch</h2>
          <p style={styles.content}>
            Our Commitment to exceptional service ensures your 
            real estate journey is not your transactional but transformational.
          </p>
        </div>
      </div>

      

      {/* Second Row */}
      <div style={styles.container2}>
        <div style={styles.box2}>
        <div style={{display: 'grid', gridTemplateColumns: "auto auto", padding: "10px"}}>
        <div style={styles.imageContainer}>
            <img src={a} alt="Mukesh Yadav" style={styles.image} />
          </div>
        <div>
        <h2 style={styles.title2}>Mukesh Yadav</h2>
          {/* Add a subtitle below Mukesh Yadav */}
          <p style={styles.subtitle}>
          Real Estate Marketing Coordinator.
          </p>
        </div>
      </div>
          {/* Container 1 in the second row */} 
          <p style={styles.content2}>
            Transforming spaces into homes & houses
            i'm on a mission to match dreams width
            addresses in the world of real estate.
          </p>
        </div>


        <div style={styles.box2}>
        <div style={{display: 'grid', gridTemplateColumns: "auto auto", padding: "10px"}}>
        <div style={styles.imageContainer}>
            <img src={b} alt="Ranjan Yadav" style={styles.image} />
          </div>
        <div>
        <h2 style={styles.title2}>Ranjan Yadav</h2>
          {/* Add a subtitle below Ranjan Yadav */}
          <p style={styles.subtitle}>
          Real Estate Attorney.
          </p>
        </div>
      </div>
          {/* Container 1 in the second row */} 
          <p style={styles.content2}>
          As a real estate enthusiast,
          i'm the bridge between dreams and dwellings,
          connecting people to their prefect abodes.
          </p>
        </div>

        <div style={styles.box2}>
        <div style={{display: 'grid', gridTemplateColumns: "auto auto", padding: "10px"}}>
        <div style={styles.imageContainer}>
            <img src={c} alt="Pawan Kumar Sah" style={styles.image} />
          </div>
        <div>
        <h2 style={styles.title2}>Pawan Kumar sah</h2>
          {/* Add a subtitle below Pawan Kumar Sah */}
          <p style={styles.subtitle}>
          Real Estate Appraiser.
          </p>
        </div>
      </div>
          {/* Container 1 in the second row */} 
          <p style={styles.content2}>
          Dedicating each day to finding not just houses, 
          but homes that resonate with dreams, aspirations,
           and the profound essence.
          </p>    
        </div>     
      </div>
    
      <MDBFooter bgColor='black' className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </MDBFooter>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: MRP RealEstate
      </div>
    


    </div>

  );
};

const styles = {

  container: {
    minHeight: '10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '0px',
  },

  box: {
    width: '500px',
    margin: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    color: 'white',
    borderRadius: '100px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#8A2BE2',
    textAlign: 'center',
  },

  title: {
    fontSize: '18px',
    marginBottom: '2px',
  },

  content: {
    fontSize: '14px',
    color: 'white',
  },

  container2: {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '0px',
  },

  box2: {
    width: '400px',
    margin: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    color: 'white',
    borderRadius: '50px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#8A2BE2',
  },

  title2: {
    fontSize: '18px',
    margin: '0px 110px 0px 0px', 
  },

  content2: {
    fontSize: '14px',
    color: 'white',

  },

  subtitle: {
    fontSize: '12px',
    color: 'lightgray',  
    borderBottom: '2px solid white', 
    margin: '0px 0px 0px 0px', 
  },

  imageContainer: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '50px',
    height: '50px',
   
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  


};

export default Footer;
