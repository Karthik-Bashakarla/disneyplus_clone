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
          <StyledLink>Action & Adventure</StyledLink>
          <StyledLink>Comedy</StyledLink>
          <StyledLink>Animation</StyledLink>
          <StyledLink>Anime</StyledLink>
          <StyledLink>Crime</StyledLink>
        </NavContent>
        <SignIn>Login</SignIn>
      </NavBar>
    </Header>
  );
};

export default Nav;
