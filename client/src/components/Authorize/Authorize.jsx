import Sign_IN from "./Sign_IN";
import Sign_UP from "./Sign_UP";
import image from '../../icons/auth.jpg';
import './Authorise.css';
const Authorize = () => {
  return (
    <section className="body">
        <div className="main-container">
          <div className="signIn-text">
            <Sign_IN/>
          </div>
          <Sign_UP/>
          <div className="image-container">
            <img src={image} className="image sidebar"/>
          </div>
        </div>
    </section>
  )
}

export default Authorize;