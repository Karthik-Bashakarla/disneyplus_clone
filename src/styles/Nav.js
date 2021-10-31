import styled from "styled-components";

export const Header = styled.header`
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
  font-weight: 500;
  display: flex;

  width: 100vw;
  height: 4rem;
  background: #121927;
  color: #fff;
  //   position: fixed;
  z-index: 10;
`;

export const Logo = styled.div`
  height: 4rem;
  width: 8rem;
  margin: 0 1.5rem;

  img {
    height: 82%;
    width: 100%;
    cursor: pointer;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 4rem;
  width: calc(100vw - 11rem);
`;

export const NavContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  div {
    margin: 0 1.2rem;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }
`;

export const SignIn = styled.button`
  padding: 0.7rem 2rem;
  margin: 0 20px;
  background: #1f80e0;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: transparent;
    color: #1f80e0;
  }
`;
