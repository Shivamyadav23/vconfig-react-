import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  // Inline styles for the component
  const styles = {
    formContainer: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    formLabel: {
      fontWeight: 'bold',
    },
    button: {
      borderRadius: '5px',
    },
    buttonGroup: {
      marginTop: '1rem',
    }
  };

  return (
    <div className="container mt-5">
      <div className="form-container" style={styles.formContainer}>
        <h2 className="text-center mb-4">Registration Form</h2>
        <form >
          {/* Email */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="email" style={styles.formLabel}>Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          {/* Password */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="password" style={styles.formLabel}>Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          {/* Address Line 1 */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="address_line1" style={styles.formLabel}>Address Line 1</label>
            <input 
              type="text" 
              className="form-control" 
              id="address_line1" 
              placeholder="Enter your address line 1" 
              required 
            />
          </div>

          {/* Address Line 2 */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="address_line2" style={styles.formLabel}>Address Line 2</label>
            <input 
              type="text" 
              className="form-control" 
              id="address_line2" 
              placeholder="Enter your address line 2" 
            />
          </div>

          {/* City */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="city" style={styles.formLabel}>City</label>
            <input 
              type="text" 
              className="form-control" 
              id="city" 
              placeholder="Enter your city" 
              required 
            />
          </div>

          {/* State */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="state" style={styles.formLabel}>State</label>
            <input 
              type="text" 
              className="form-control" 
              id="state" 
              placeholder="Enter your state" 
              required 
            />
          </div>

          {/* Pin Code */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="pin_code" style={styles.formLabel}>Pin Code</label>
            <input 
              type="text" 
              className="form-control" 
              id="pin_code" 
              placeholder="Enter your pin code" 
              required 
            />
          </div>

          {/* Company Name */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="company_name" style={styles.formLabel}>Company Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="company_name" 
              placeholder="Enter your company name" 
            />
          </div>

          {/* GST Number */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="gst_number" style={styles.formLabel}>GST Number</label>
            <input 
              type="text" 
              className="form-control" 
              id="gst_number" 
              placeholder="Enter your GST number" 
            />
          </div>

          {/* Telephone */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="telephone" style={styles.formLabel}>Telephone</label>
            <input 
              type="text" 
              className="form-control" 
              id="telephone" 
              placeholder="Enter your telephone number" 
            />
          </div>

          {/* Button Group */}
          <div className="d-flex justify-content-between" style={styles.buttonGroup}>
            <button type="submit" className="btn btn-primary" style={styles.button}>Register</button>
            <button type="reset" className="btn btn-secondary" style={styles.button}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
