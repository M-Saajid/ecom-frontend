import React from "react";

function Loginsocial() {
  return (
    <div className="login__SocialContainer">
      <p>Login or Create Using Social-media accounts </p>
      <div className="Google">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
          className="icon"
        />
        <h4>Google</h4>
      </div>
      <div className="Facebook">
        <img
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
          alt=""
          className="icon"
        />
        <h4>Facebook</h4>
      </div>
      <div className="Twitter">
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
          alt=""
          className="icon"
        />
        <h4>Twitter</h4>
      </div>
    </div>
  );
}

export default Loginsocial;
