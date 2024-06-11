// import "./Authorise.css";
import "./Sign_UP.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../../icons/auth.jpg";
import PlaidConnectBank from "../Plaid/PlaidConnectBank"
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

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, lastName, address, state, postalCode, dob, ssn, email, password })
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
          <form className="main signIn-text" onSubmit={handleSubmit}>
            <b>
              <h1 style={{ fontSize: "35px" }}>Sign Up</h1>
            </b>
            <p style={{ marginTop: "5px" }}>Please enter your details.</p>
            <div className="names-container">
              <p className="names" style={{ marginTop: "30px" }}>
                First Name
              </p>
              <p
                className="names last-name"
                style={{ marginTop: "30px", paddingLeft: "330px" }}
              >
                Second Name
              </p>
            </div>
            <div className="forms">
              <input
                style={{paddingRight:"50px"}}
                className="form-control form-control-lg"
                type="text"
                placeholder="ex: John"
                aria-label=".form-control-lg example"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control form-control-lg last-name"
                type="text"
                placeholder="ex: Doe"
                aria-label=".form-control-lg example"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>Address</p>
            <div className="address-form">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your specific address"
                aria-label=".form-control-lg example"
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
                style={{ marginTop: "30px", paddingLeft: "370px" }}
              >
                Postal Code
              </p>
            </div>
            <div className="forms">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="ex: Telangana"
                aria-label=".form-control-lg example"
                onChange={(e) => setState(e.target.value)}
              />
              <input
                className="form-control form-control-lg last-name"
                type="text"
                placeholder="ex: 500083"
                aria-label=".form-control-lg example"
                
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="names-container">
              <p className="names" style={{ marginTop: "30px" }}>
                Date of Birth
              </p>
              <p
                className="names last-name"
                style={{ marginTop: "30px", paddingLeft: "330px" }}
              >
                SSN
              </p>
            </div>
            <div className="forms">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="ex: dd-mm-yyyy"
                aria-label=".form-control-lg example"
                // required
                onChange={(e) => setDob(e.target.value)}
              />
              <input
                className="form-control form-control-lg last-name"
                type="text"
                placeholder="ex: 1234"
                aria-label=".form-control-lg example"
                
                onChange={(e) => setSsn(e.target.value)}
              />
            </div>
            <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>Email ID</p>
            <div className="address-form">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your email"
                aria-label=".form-control-lg example"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>Password</p>
            <div className="address-form">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                aria-label=".form-control-lg example"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <PlaidConnectBank/>
            <div className="submit text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg submit-btn"
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


