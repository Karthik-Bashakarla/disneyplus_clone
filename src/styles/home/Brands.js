import styled from "styled-components";

export const BrandsContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const Brand = styled.div`
  width: 12rem;
  height: 7rem;
  // margin-bottom: 1rem; should be added in media queries
  border: 2px solid #ededed70;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2.8px 2.2px rgba(0, 0, 0, 0.134),
    2px 6.7px 5.3px rgba(0, 0, 0, 0.148), 2px 12.5px 10px rgba(0, 0, 0, 0.16),
    2px 22.3px 17.9px rgba(0, 0, 0, 0.172),
    2px 41.8px 33.4px rgba(0, 0, 0, 0.186), 2px 100px 80px rgba(0, 0, 0, 0.12);

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
    box-shadow: 2px 2.8px 2.2px rgba(0, 0, 0, 0.134),
      2px 6.7px 5.3px rgba(0, 0, 0, 0.148), 2px 12.5px 10px rgba(0, 0, 0, 0.16),
      2px 22.3px 17.9px rgba(0, 0, 0, 0.172),
      2px 41.8px 33.4px rgba(0, 0, 0, 0.186), 2px 100px 80px rgba(0, 0, 0, 0.12);

    video {
      z-index: 10;
    }
  }
`;
