import styled from "styled-components";

export const LoginContainer = styled.main`
  //   background: url("./assets/images/jugle.jpg") center/cover no-repeat;
  //   background-color: rgba(0, 0, 0, 0.4); /* Tint color */
  //   background-blend-mode: multiply;

  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
  font-weight: 500;
  height: calc(100vh - 4rem);
  background: url("https://disney-clone-d1e27.web.app/images/login-background.jpg")
    center/cover no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.div`
  color: #fff;
  height: 60%;
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img.img1 {
    height: 30%;
    width: 70%;
    object-fit: contain;
    margin: 0.5rem 0;
  }

  img.img2 {
    height: 20%;
    width: 70%;
    object-fit: contain;
    margin: 0.5rem 0;
  }

  p {
    max-width: 70%;
    padding: 10px 0;
  }
`;
