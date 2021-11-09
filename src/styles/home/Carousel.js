import styled from "styled-components";

export const ImageContainer = styled.div`
  // border: 2px solid red;
  width: 100%;
  height: 25rem;
  margin: 0.7rem 0;
  display: flex;
  justify-content: center;

  div {
    height: 100%;
    // border: 2px solid green;
    padding: 0 0.3rem;

    img {
      //   border: 2px solid orange;
      //   object-fit: contain;
      border-radius: 4px;
      border: 1px solid rgba(249, 249, 249, 0.7);
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in-out;

      &:hover {
        border: 2px solid rgba(250, 250, 250, 1);
        transform: scale(1.03);
      }
    }
  }
`;
