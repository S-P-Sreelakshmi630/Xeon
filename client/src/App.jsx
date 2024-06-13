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
  const [accessToken,setAccessToken] = useState(null);
  const [user ,setUser] = useState(null);
  const navigate = useNavigate();





  useEffect(() => {
    async function fetch(){ 
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3001/verifyToken', { 
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => {
        if (res.data.valid) {
          setLoggedIn({ firstName: res.data.user.email , id : res.data.user.id }); 
          console.log(res.data);
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

    let response = await axios.get("http://localhost:3001/db",{id:loggedIn?.id});
    //console.log("user details :",response.data);
    setAccessToken(response.data.accessToken);
    console.log("User : ",response.data);
    setUser({name:response.data.name,email:response.data.email,accessToken:response.data.accessToken});
  }
  fetch();
  }, [navigate]);

  if (loading) return null; 

  return (
    <section className="flex h-screen w-full font-inter gap-2">
        <Sidebar user = {loggedIn}/>
        <Dashboard 
          type="greeting"
          title="Welcome"
          user={user}
          accessToken = {accessToken}
          subtext="Access and manage your account and transactions efficiently."
        />
    
    </section>
  );
}

export default App;
