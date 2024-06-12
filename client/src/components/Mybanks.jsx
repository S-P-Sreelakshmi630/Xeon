import Sidebar from './Sidebar';
import Bank from './MyBankAccounts'

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Mybanks = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3001/verifyToken', { 
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => {
        if (res.data.valid) {
          setLoggedIn({ firstName: res.data.user.email }); 
        } else {
          navigate('/');
        }
      })
      .catch(() => {
        navigate('/');
      })
      .finally(() => {
        setLoading(false); 
      });
    } else {
      navigate('/');
      setLoading(false); 
    }
  }, [navigate]);

  if (loading) return null; 
  return (
    <section className='flex gap-4'>
        <Sidebar />
        <Bank
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || "Guest"}
           subtext="Access and manage your account and transactions efficiently."


        />
    </section>
  )
}

export default Mybanks