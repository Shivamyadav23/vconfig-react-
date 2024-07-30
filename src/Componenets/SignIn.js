import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

function SignIn() {
  useEffect(() => {
    document.body.style.backgroundColor = '#9A616D';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <MDBContainer className="my-5" style={{ maxWidth: '700px', margin: 'auto' }}>
      <MDBCard style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage 
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' 
              alt="login form" 
              className='rounded-start w-100'
              style={{ objectFit: 'cover', height: '100%', borderRadius: '15px 0 0 15px' }}
            />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column' style={{ padding: '2rem' }}>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', color: '#393f81' }}>Sign into your account</h5>

              <MDBInput 
                wrapperClass='mb-4' 
                label='Email address' 
                id='formControlLg' 
                type='email' 
                size="lg"
                style={{ borderRadius: '5px', color: '#393f81', borderColor: '#393f81', padding: '1rem', fontSize: '1.1rem' }} // Increased padding and font size
                labelStyle={{ color: '#393f81' }}
                placeholder="Enter your email"
              />
              <MDBInput 
                wrapperClass='mb-4' 
                label='Password' 
                id='formControlLg' 
                type='password' 
                size="lg"
                style={{ borderRadius: '5px', color: '#393f81', borderColor: '#393f81', padding: '1rem', fontSize: '1.1rem' }} // Increased padding and font size
                labelStyle={{ color: '#393f81' }}
                placeholder="Enter your password"
              />

              <MDBBtn 
                className="mb-4 px-5" 
                color='dark' 
                size='lg'
                style={{ borderRadius: '5px' }}
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!" style={{ textDecoration: 'none' }}>Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account? <a href="#!" style={{ color: '#393f81', textDecoration: 'none' }}>Register here</a>
              </p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1" style={{ textDecoration: 'none' }}>Terms of use.</a>
                <a href="#!" className="small text-muted" style={{ textDecoration: 'none' }}>Privacy policy</a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;
