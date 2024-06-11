// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";

import "./globals.css";
import PlaidToken from "./components/Plaid/PlaidToken";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const [linkToken, setLinkToken] = useState("");
  const [public_token, setPublic_token] = useState();
  // const loggedIn = { firstName: "John" , email: "admin@example.com"};
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

  return public_token ? (
    <PlaidToken public_token={public_token} />
  ) : (
    <button
      className="bg-blue-400 text-white"
      onClick={() => open()}
      disabled={!ready}
    >
      Connect a bank account
    </button>
  );
  /*  return (
    <section className="flex h-screen w-full font-inter gap-">
        <Sidebar />
        <div className="flex size-full flex-col">
        <Dashboard 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />
        
        </div>

        
      
    </section>
  ); */
}

export default App;
