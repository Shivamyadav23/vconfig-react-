import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Add this import


// Styled components
const StyledCarousel = styled(Carousel)`
  max-width: 800px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledCaption = styled(Carousel.Caption)`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 10px;
`;

const Home = () => {
  // Inline styles
  const styles = {
    body: {
      backgroundColor: '#0c0c0c',
      color: '#ffffff',
      fontFamily: `'Roboto', sans-serif`,
    },
    header: {
      backgroundColor: '#1a1a1a',
    },
    navLink: {
      color: '#e7e7e7',
      textDecoration: 'none',
    },
    navLinkHover: {
      color: '#ff0000',
    },
    heroSection: {
      position: 'relative',
      textAlign: 'center',
    },
    heroImage: {
      width: '100%',
      height: 'auto',
    },
    overlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#ffffff',
    },
    section: {
      padding: '60px 0',
    },
    about: {
      backgroundColor: '#141414',
    },
    services: {
      backgroundColor: '#0c0c0c',
    },
    gallery: {
      backgroundColor: '#141414',
    },
    contact: {
      backgroundColor: '#0c0c0c',
    },
    footer: {
      backgroundColor: '#1a1a1a',
      padding: '30px 0',
    },
    footerLink: {
      color: '#e7e7e7',
      textDecoration: 'none',
    },
    footerLinkHover: {
      color: '#ff0000',
    },
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <nav className="navbar" style={styles.header}>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#home" style={styles.navLink}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about" style={styles.navLink}>About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services" style={styles.navLink}>Services</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin" style={styles.navLink}>Sign In</Link>
            {/* <Link className="nav-link" to="/signin" style={styles.navLink}>Sign In</Link> */}
          </li>
          <li className="nav-item">
          <Link className='nav-link'to="/contact" style={styles.navLink}>ContactUs</Link>
          </li>
        </ul>
      </nav>

      {/* Carousel Section */}
      <section className="hero-section" id="home" style={styles.heroSection}>
        <StyledCarousel interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Carousel/car 1.jpeg"
              alt="First slide"
              style={styles.heroImage}
            />
            <StyledCaption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </StyledCaption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Carousel/carr 2.jpeg"
              alt="Second slide"
              style={styles.heroImage}
            />
            <StyledCaption>
              <h3>Second slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </StyledCaption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Carousel/car 3.jpeg"
              alt="Third slide"
              style={styles.heroImage}
            />
            <StyledCaption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </StyledCaption>
          </Carousel.Item>
        </StyledCarousel>
      </section>

      {/* Services Section */}
      <section className="py-5" id="services" style={{ ...styles.section, ...styles.services }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#ff0000' }}>Services</h2>
          <div className="row text-center">
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-car fa-2x" style={{ color: '#ff0000' }}></i>
              </div>
              <h4 style={{ color: '#e7e7e7' }}>Premium Car Detailing</h4>
              <p style={{ color: '#e7e7e7' }}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-warehouse fa-2x" style={{ color: '#ff0000' }}></i>
              </div>
              <h4 style={{ color: '#e7e7e7' }}>Premium Car Storage</h4>
              <p style={{ color: '#e7e7e7' }}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-paint-brush fa-2x" style={{ color: '#ff0000' }}></i>
              </div>
              <h4 style={{ color: '#e7e7e7' }}>Paint Protection Film (PPF)</h4>
              <p style={{ color: '#e7e7e7' }}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-users fa-2x" style={{ color: '#ff0000' }}></i>
              </div>
              <h4 style={{ color: '#e7e7e7' }}>Private Events</h4>
              <p style={{ color: '#e7e7e7' }}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-5" id="gallery" style={{ ...styles.section, ...styles.gallery }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#ff0000' }}>Gallery</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="/images/3205f7d4-e7ae-4388-9a20-5701f090f048.jpeg" alt="Gallery Image 1" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Tata Motors Cars - Sedans, Hatchbacks, SUVs _ Tata Motors Limited.jpeg" alt="Gallery Image 2" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Audi R8 V10 special edition.jpeg" alt="Gallery Image 3" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Pin By Anucha P Rang On Bmw Cars Bmw Wallpapers Bmw M3 Bmw.jpeg" alt="Gallery Image 4" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Audi R8 V10 special edition.jpeg" alt="Gallery Image 5" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/b7fe452a-8c9b-46c2-91e0-518f7508ef40.jpeg" alt="Gallery Image 6" className="img-fluid" />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary">View All Gallery</button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer" style={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 style={{ color: '#ff0000' }}>Follow Us:</h5>
              <a href="#" style={{ ...styles.footerLink, marginRight: '10px' }}><i className="fab fa-facebook"></i></a>
              <a href="#" style={{ ...styles.footerLink, marginRight: '10px' }}><i className="fab fa-twitter"></i></a>
              <a href="#" style={styles.footerLink}><i className="fab fa-instagram"></i></a>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#ff0000' }}>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" style={styles.footerLink}>Home</a></li>
                <li><a href="#about" style={styles.footerLink}>About Us</a></li>
                <li><a href="#services" style={styles.footerLink}>Services</a></li>
                <li><a href="#gallery" style={styles.footerLink}>Gallery</a></li>
                <li><a href="#contact" style={styles.footerLink}>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#ff0000' }}>Services</h5>
              <ul className="list-unstyled">
                <li><a href="#services" style={styles.footerLink}>Premium Car Detailing</a></li>
                <li><a href="#services" style={styles.footerLink}>Premium Car Storage</a></li>
                <li><a href="#services" style={styles.footerLink}>Paint Protection Film (PPF)</a></li>
                <li><a href="#services" style={styles.footerLink}>Private Events</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p style={{ color: '#e7e7e7' }}>Copyright © 2024 EightyEight Detailing. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
