import React from "react";
import { LoginContainer, LoginContent } from "../styles/Login";

const Login = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "./assets/images/cta-logo-one.svg"}
          alt="hero-image1"
        />
        <p>
          Welcome to the world of entertainment and enjoy movies, tv shows,
          documentaries and animations from popular production houses.
        </p>
        <img
          className="img2"
          src={process.env.PUBLIC_URL + "./assets/images/cta-logo-two.png"}
          alt="hero-image2"
        />
      </LoginContent>
    </LoginContainer>
  );
};

export default React.memo(Login);
