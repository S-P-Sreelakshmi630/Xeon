import React, { useState, useRef } from 'react';
import Sign_IN from "./Sign_IN";
import Sign_UP from "./Sign_UP";
import image from '../../icons/auth.jpg';
import './Authorise.css';
import LoadingBar from 'react-top-loading-bar';

const Authorize = () => {
  const [flag, setFlag] = useState(false);
  const loadingBarRef = useRef(null);

  const handleSignUpClick = () => {
    loadingBarRef.current.continuousStart();
    setTimeout(() => {
      setFlag(true);
      loadingBarRef.current.complete();
    }, 500); // Simulate loading delay
  };

  return (
    <section className="body ">
      <LoadingBar ref={loadingBarRef} color="#64b6fa" height={5} />
      <div className="main-container">
        <div className="signIn-text">
          {flag ? <Sign_UP /> : <Sign_IN onSignUpClick={handleSignUpClick} />}
        </div>
        <div className="image-container">
          <img src={image} className="image sidebar" alt="Auth" />
        </div> 
      </div>
    </section>
  );
}

export default Authorize;
