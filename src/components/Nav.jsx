import React from "react";
import { Header, Logo, NavBar, NavContent, SignIn } from "../styles/Nav";

const Nav = () => {
  return (
    <Header>
      <Logo>
        <img src="./assets/images/logo-disneyplus.svg" alt="disneyplus logo" />
      </Logo>
      <NavBar>
        <NavContent>
          <div>Home</div>
          <div>Action & Adventure</div>
          <div>Comedy</div>
          <div>Animation</div>
          <div>Anime</div>
          <div>Crime</div>
        </NavContent>
        <SignIn>Login</SignIn>
      </NavBar>
    </Header>
  );
};

export default Nav;
