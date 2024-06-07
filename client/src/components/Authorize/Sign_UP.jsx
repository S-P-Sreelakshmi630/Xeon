import "./Authorise.css";
import "./Sign_UP.css";

const Sign_UP = () => {
  return (
    <div className="main">
      <b>
        <h1 style={{ fontSize: "35px", marginTop: "10%" }}>Sign Up</h1>
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
          className="form-control form-control-lg"
          type="text"
          placeholder="ex: John"
          aria-label=".form-control-lg example"
          required
        />
        <input
          className="form-control form-control-lg last-name"
          type="text"
          placeholder="ex: Doe"
          aria-label=".form-control-lg example"
          required
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
          required
        />
        <input
          className="form-control form-control-lg last-name"
          type="text"
          placeholder="ex: 500083"
          aria-label=".form-control-lg example"
          required
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
          required
        />
        <input
          className="form-control form-control-lg last-name"
          type="text"
          placeholder="ex: 1234"
          aria-label=".form-control-lg example"
          required
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
        />
      </div>
      <div className="submit text-center">
        <button type="button" class="btn btn-primary btn-lg submit-btn">Sign Up</button>
      </div>
      <p className="no-style" style={{paddingRight:"100px"}}>Already have an account? <a href="/" color="blue">Login</a></p>
    </div>
  );
};

export default Sign_UP;
