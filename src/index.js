import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import required components
import './index.css';
import Home from './Componenets/Home';
import DependentDropdowns from './Componenets/DependentDropDown';
import Login from './Componenets/CompanyDetailsForm';
import DefaultConfiguration from './Componenets/DefaultConfiguration';
import SignIn from './Componenets/SignIn';
import ContactUs from './Componenets/ContactUs';
import RegistrationForm from './Componenets/RegistrationForm';
// import Nopage from './Nopage'; // Ensure Nopage component is imported

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="dependent-dropdowns" element={<DependentDropdowns />} />
        <Route path="login" element={<Login />} />
        <Route path="default-configuration" element={<DefaultConfiguration />} />
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="register" element={<RegistrationForm/>}/>

        {/* <Route path="*" element={<Nopage />} /> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
