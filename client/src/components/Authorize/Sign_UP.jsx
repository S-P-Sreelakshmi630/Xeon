import "./Authorise.css";
import "./Sign_UP.css";
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useState } from "react";




//Deleted some fields which are of no use!

const Sign_UP = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState(""); // Add state for error message

const navigate = useNavigate()
axios.defaults.withCredentials=true;
  const handleSubmit = (e) => {
    console.log(name);

      e.preventDefault()
      //Backend server
      axios.post('http://localhost:3001/signup', {name, email, password})

      .then(res => {
          navigate('/');
      }).catch(err => {
        console.log(err)
        setErrorMessage("An error occurred: " + err.message); // Set error message
      })
  }








  return (
    <form className="main " onSubmit={handleSubmit} >
      <b>
        <h1 style={{ fontSize: "35px", marginTop: "10%" }}>Sign Up</h1>
      </b>
      <p style={{ marginTop: "5px" }}>Please enter your details.</p>
      <div className="names-container">
        <p className="names" name="name" style={{ marginTop: "30px" }}>
          First Name
        </p>
        {/* <p
          className="names last-name"
          style={{ marginTop: "30px", paddingLeft: "330px" }}
        >
          Second Name
        </p> */}
      </div>
      <div className="forms">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter Name"
          name="name"
          aria-label=".form-control-lg example"
          required
          onChange={(e)=>setName(e.target.value)}
        />
        {/* <input
          className="form-control form-control-lg last-name"
          type="text"
          placeholder="ex: Doe"
          aria-label=".form-control-lg example"
          required
        /> */}
      </div>
      <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>Address</p>
      <div className="address-form">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter your specific address"
          aria-label=".form-control-lg example"
          required
        />
      </div>
      <div className="names-container">
        <p className="names" style={{ marginTop: "30px" }}>
         
        </p>
        <p
          className="names last-name"
          style={{ marginTop: "30px", paddingLeft: "370px" }}
        >
          Postal Code
        </p>
      </div>
      <div className="forms">
        {/* <input
          className="form-control form-control-lg"
          type="text"
          placeholder="ex: Telangana"
          aria-label=".form-control-lg example"
          required
        /> */}
        {/* <input
          className="form-control form-control-lg last-name"
          type="text"
          placeholder="ex: 500083"
          aria-label=".form-control-lg example"
          required
        /> */}
      </div>
      <div className="names-container">
        <p className="names" style={{ marginTop: "30px" }}>
          
        </p>
        <p
          className="names last-name"
          style={{ marginTop: "30px", paddingLeft: "330px" }}
        >
          
        </p>
      </div>
      <div className="forms">
        {/* <input
          className="form-control form-control-lg"
          type="text"
          placeholder="ex: dd-mm-yyyy"
          aria-label=".form-control-lg example"
          required
        /> */}
        {/* <input
          className="form-control form-control-lg last-name"
          type="text"
          placeholder="ex: 1234"
          aria-label=".form-control-lg example"
          required
        /> */}
      </div>
      <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>Email ID</p>
      <div className="address-form">
        <input
          className="form-control form-control-lg"
          type="text"
          name="email"
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
          type="text"
          placeholder="Password"
          aria-label=".form-control-lg example"
          required
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="submit text-center">
        <button  type="submit"  className="btn btn-primary btn-lg submit-btn">Sign Up</button>
      </div>
      <p className="no-style" style={{paddingRight:"100px"}}>Already have an account? <a href="/" color="blue">Login</a></p>
    </form>
  );
};

export default Sign_UP;
