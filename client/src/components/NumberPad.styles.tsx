import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (min-width: 700px) {
    margin-top: 70px;
  }
`;
