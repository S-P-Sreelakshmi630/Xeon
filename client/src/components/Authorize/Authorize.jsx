import React, { useState, useRef } from 'react';
import Sign_IN from "./Sign_IN";
// import Sign_UP from "./Sign_UP";
import image from '../../icons/auth.jpg';
import './Authorise.css';
import LoadingBar from 'react-top-loading-bar';

const Authorize = () => {

  return (
    <section className="body-auth">
      <div className="main-container-auth">
        <div className="signIn-text-auth">
          <Sign_IN/>
        </div>
        <div className="image-container">
          <img src={image} className="image sidebar" alt="Auth" />
        </div> 
      </div>
    </section>
  );
}

export default Authorize;
