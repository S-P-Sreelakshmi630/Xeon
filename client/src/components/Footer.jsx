
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({ user, type = 'desktop' }) => {
const navigate = useNavigate();
  const handleLogOut = () => {
    
    navigate('/');
  };

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.id}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <img src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
