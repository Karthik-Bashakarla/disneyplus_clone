import styled from "styled-components";

export const BrandsContainer = styled.div`
  margin: 50px 0;
  border: 2px solid orange;
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
  transition: all 0.3s ease-in-out;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  &: hover {
    transform: scale(1.2);
  }
`;
