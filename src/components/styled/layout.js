import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;

export const Container = styled.div`
  max-width: 52rem;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 960px) {
    padding: 0;
  }
`;
