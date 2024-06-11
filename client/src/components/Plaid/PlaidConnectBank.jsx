
import { useEffect, useState } from "react";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";
import PlaidAccessToken from "./PlaidAccessToken";
axios.defaults.baseURL = "http://localhost:3001";

 
  

const PlaidConnectBank = ({sendtoDataParent}) => {
    const [linkToken, setLinkToken] = useState("");
    const [public_token, setPublic_token] = useState();
    
    const handleChild = (accessToken) =>{
      sendtoDataParent(accessToken)
    }


    useEffect(() => {
      async function fetch() {
        const response = await axios.post("/create_link_token");
        setLinkToken(response.data.link_token);
  
        console.log(response.data.link_token);
        console.log(response.data);
      }
      fetch();
    }, []);
  
    const { open, ready } = usePlaidLink({
      token: linkToken,
      onSuccess: (public_token, metadata) => {
        // send public_token to server
        setPublic_token(public_token);
        console.log("Success", public_token, metadata);
      },
    });
  

    return public_token ? (<PlaidAccessToken public_token={public_token} sendtoParent={handleChild}/>) : (
        <button
          className="flex justify-center  btn btn-primary btn-lg submit-btn"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect a bank account
        </button>
      );
}

export default PlaidConnectBank;