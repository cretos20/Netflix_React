// import background from "../assets/background.jpg";
import logo from "../assets/logo.svg";

import "./Start.css";
function Start() {
  return (
    <>
      <div className="main">
        <nav>
          <span>
            <img src={logo} width="53" alt="logo" />
          </span>
          <div className="mybuttons">
            <button className="btn btn-english bg-red-600 rounded-sm">
              English
            </button>
            <button className="btn btn-red-sm rounded-sm">Sign In</button>
          </div>
        </nav>
        <div className="box"></div>
        <div className="hero">
          <span> Enjoy big movies, hit series and more from ₹149 </span>
          <span> Watch anywhere. Cancel anytime. </span>
          <span>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="hero-buttons">
            <input type="text" placeholder="Email Address" />
            <button className="btn btn-red">Get Started &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Start;
