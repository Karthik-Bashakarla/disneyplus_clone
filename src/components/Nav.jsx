import React from "react";
import {
  Header,
  Logo,
  NavBar,
  NavContent,
  SignIn,
  StyledLink,
} from "../styles/Nav";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Header>
      <Logo>
        <Link to="/">
          <img
            src="./assets/images/logo-disneyplus.svg"
            alt="disneyplus logo"
          />
        </Link>
      </Logo>
      <NavBar>
        <NavContent>
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/action-adventure">Action & Adventure</StyledLink>
          <StyledLink to="/comedy">Comedy</StyledLink>
          <StyledLink to="/anime">Anime</StyledLink>
          <StyledLink to="/war">War</StyledLink>
        </NavContent>
        <SignIn>Login</SignIn>
      </NavBar>
    </Header>
  );
};

export default React.memo(Nav);
