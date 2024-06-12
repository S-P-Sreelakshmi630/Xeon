import React, { useState } from 'react'
import axios from 'axios';


const Auth = () => {
    const [auth,setAuth] = useState();
    useEffect(() => {
        async function fetch() {
          console.log(accessToken);
          let response = await axios.post("/auth", { accessToken : accessToken});
          console.log("auth  response :", response.data);
          setAuth(response.data);
        }
        fetch();
      }, []);    
}

export default Auth