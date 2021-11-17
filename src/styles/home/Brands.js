import styled from "styled-components";

export const BrandsContainer = styled.div`
  margin: 2.3rem 0;
  border: 2px solid green;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const Brand = styled.div`
  width: 12rem;
  height: 7rem;
  border: 2px solid #ededed70;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease-in-out;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  video {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  &: hover {
    transform: scale(1.2);

    video {
      z-index: 10;
    }
  }
`;
