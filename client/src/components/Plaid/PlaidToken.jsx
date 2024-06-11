/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3001";


const PlaidToken = ({public_token}) => {
    useEffect(()=>{
        async function fetch(){
            let accessToken = await axios.post('/exchange_public_token',{public_token: public_token})
            console.log("access token : ", accessToken.data);
        }
        fetch();
    },[])

    return <h1>{public_token}</h1>;
};

export default PlaidToken;
