import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import Sign_IN from "./components/Authorize/Sign_IN";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecentTransactions from './components/RecentTransactions';
import "./globals.css";


function App() {
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
    <section className="flex h-screen w-full font-inter gap-2">
        <Sidebar />
        <Dashboard 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />
    
    </section>
  );
}

export default App;
