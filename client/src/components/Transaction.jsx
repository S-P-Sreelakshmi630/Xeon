import Sidebar from "./Sidebar"
import TransactionHistory from "./TransactionHistory"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
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
    <section className="flex gap-2">
        <Sidebar/>
        <TransactionHistory/>
    </section>
  )
}

export default Transaction