import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const RegistrationForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '', // Added username field
    email: '',
    password: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    pin_code: '',
    company_name: '',
    gst_number: '',
    telephone: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/register', formData);
      alert(response.data); // Display success message or handle it as needed
    } catch (error) {
      alert('Error occurred: ' + error.response?.data || error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="form-container" style={styles.formContainer}>
        <h2 className="text-center mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="username" style={styles.formLabel}>Authorized Person Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {Object.keys(formData).filter(key => key !== 'username').map((key) => (
            <div className="form-group" style={styles.formGroup} key={key}>
              <label htmlFor={key} style={styles.formLabel}>{key.replace(/_/g, ' ').toUpperCase()}</label>
              <input
                type={key === 'password' ? 'password' : 'text'}
                className="form-control"
                id={key}
                name={key}
                placeholder={`Enter your ${key.replace(/_/g, ' ')}`}
                value={formData[key]}
                onChange={handleChange}
                required={key !== 'address_line2' && key !== 'company_name' && key !== 'gst_number' && key !== 'telephone'}
              />
            </div>
          ))}

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
    padding: '10px 20px',
  },
  buttonGroup: {
    marginTop: '1rem',
  }
};

export default RegistrationForm;
