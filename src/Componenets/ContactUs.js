import React from 'react';

const ContactUs = () => {
  // Inline styles for the component
  const styles = {
    section: {
      backgroundImage: 'url("/images/contact-background.jpg")', // Add your background image path here
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '60px 0', // Adjust padding as needed
      color: '#ffffff',
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      zIndex: 1
    },
    container: {
      position: 'relative',
      zIndex: 2
    },
    form: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent form background
      padding: '20px',
      borderRadius: '8px',
    },
    formControl: {
      borderRadius: '5px',
      color: '#ffffff',
      borderColor: '#ffffff',
      padding: '1rem',
      fontSize: '1.1rem',
      backgroundColor: '#333333', // Dark background for input fields
    },
    button: {
      borderRadius: '5px',
      backgroundColor: '#ff6219',
      borderColor: '#ff6219',
      color: '#ffffff', // Ensure text on button is white
    },
    image: {
      borderRadius: '8px',
      width: '100%', // Make the image responsive
      maxWidth: '500px', // Set a default max width
      height: 'auto' // Maintain aspect ratio
    }
  };

  return (
    <section className="py-5 contact" id="contact" style={styles.section}>
      <div style={styles.overlay}></div> {/* Overlay for better text readability */}
      <div className="container" style={styles.container}>
        <h2 className="section-title">Get in Touch With Us</h2>
        <div className="row">
          <div className="col-md-6">
            <img 
              src="/images/Mahindra Scorpio-N car new lunch in India in 2022 (1).jpeg" 
              alt="Contact Car" 
              className="img-fluid" 
              style={styles.image} // Apply styles to the image
            />
          </div>
          <div className="col-md-6">
            <form style={styles.form}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" style={styles.formControl} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" style={styles.formControl} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" style={styles.formControl} />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" style={styles.formControl} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" style={styles.formControl}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={styles.button}>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
