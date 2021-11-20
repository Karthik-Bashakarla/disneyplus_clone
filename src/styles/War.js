import styled from "styled-components";

export const WarContainer = styled.div`
  background: url("./assets/images/backgroundImg.png") center/cover no-repeat;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
  // border: 2px solid red;
  text-align: center;
`;

export const Title = styled.div`
  // border: 2px solid red;
  padding: 2rem 0 1rem;
  color: #fff;
  font-size: 2rem;
  letter-spacing: 0.125rem;
`;

export const MovieList = styled.div`
  // border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: grab;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

export const Movie = styled.div`
  // border: 2px solid red;
  min-width: 12rem;
  height: 14rem;
  border-radius: 0.2rem;
  border: 1.5px solid #ffffff60;
  margin: 1.2rem 1.2rem 1.2rem 0;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-shadow: 10px 17px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.15);
    border: 1.5px solid #ededed100;
    box-shadow: 8px 10px 15px rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
