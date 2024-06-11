// import "./Authorise.css";
import "./Sign_UP.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../../icons/auth.jpg";
import PlaidConnectBank from "../Plaid/PlaidConnectBank";
const Sign_UP = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [accessToken, setAccessToken] = useState();

  const handleAccessToken = (access) => {
    setAccessToken(access);
  };

  console.log(accessToken);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/signup", { name, email, password, accessToken })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("An error occurred: " + err.message);
      });
  };

  return (
    <section className="body">
      <div className="main-container">
        <div className="form-container">      
            <PlaidConnectBank sendtoDataParent={handleAccessToken} />
         {/*  forms */}
         <div className="divider"></div>
          <form className="main signIn-text" onSubmit={handleSubmit}>
            <b>
              <h1 style={{ fontSize: "30px" }}>Sign Up</h1>
            </b>

            <p style={{ marginTop: "1px" }}>Please enter your details.</p>
            <div className="names-container">
              <p className="names" style={{ marginTop: "30px" }}>
                First Name <span className="mandate">*</span>
              </p>
              <p
                className="names last-name"
                style={{ marginTop: "30px", paddingLeft: "13vw" }}
              >
                Second Name
              </p>
            </div>
            <div className="forms">
              <input
                style={{ paddingRight: "50px" }}
                className="form-control form-control-md"
                type="text"
                placeholder="ex: John"
                aria-label=".form-control-md example"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control form-control-md last-name"
                type="text"
                placeholder="ex: Doe"
                aria-label=".form-control-md example"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <p style={{ paddingTop: "10px", paddingBottom: "1px" }}>Address <span className="mandate">*</span></p>
            <div className="address-form">
              <input
                className="form-control form-control-md"
                type="text"
                placeholder="Enter your specific address"
                aria-label=".form-control-md example"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="names-container">
              <p className="names" style={{ marginTop: "30px" }}>
                State
              </p>
              <p
                className="names last-name"
                style={{ marginTop: "30px", paddingLeft: "15vw" }}
              >
                Postal Code
              </p>
            </div>
            <div className="forms">
              <input
                className="form-control form-control-md"
                type="text"
                placeholder="ex: Telangana"
                aria-label=".form-control-md example"
                onChange={(e) => setState(e.target.value)}
              />
              <input
                className="form-control form-control-md last-name"
                type="text"
                placeholder="ex: 500083"
                aria-label=".form-control-md example"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="names-container">
              <p className="names" style={{ marginTop: "30px" }}>
                Date of Birth
              </p>
              <p
                className="names last-name"
                style={{ marginTop: "30px", paddingLeft: "12vw" }}
              >
                Mobile Number
              </p>
            </div>
            <div className="forms">
              <input
                className="form-control form-control-md"
                type="text"
                placeholder="ex: dd-mm-yyyy"
                aria-label=".form-control-md example"
                // required
                onChange={(e) => setDob(e.target.value)}
              />
              <input
                className="form-control form-control-md last-name"
                type="text"
                placeholder="ex: +91 "
                aria-label=".form-control-md example"
                onChange={(e) => setSsn(e.target.value)}
              />
            </div>
            <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>
              Email ID <span className="mandate">*</span>
            </p>
            <div className="address-form">
              <input
                className="form-control form-control-md"
                type="text"
                placeholder="Enter your email"
                aria-label=".form-control-md example"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>
              Password <span className="mandate">*</span>
            </p>
            <div className="address-form">
              <input
                className="form-control form-control-md"
                type="password"
                placeholder="Password"
                aria-label=".form-control-md example"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="submit text-center">
              <button
                type="submit"
                className="btn btn-primary btn-md submit-btn"
              >
                Sign Up
              </button>
            </div>
            <p className="no-style" style={{ paddingRight: "100px" }}>
              Already have an account?{" "}
              <Link to="/" color="blue">
                Login
              </Link>
            </p>
            {errorMessage && (
              <p className="error-message" style={{ color: "red" }}>
                {errorMessage}
              </p>
            )}
          </form>


          
        </div>
        <div className="image-container">
          <img src={image} className="image" alt="Auth" />
        </div>
      </div>
    </section>
  );
};

export default Sign_UP;
