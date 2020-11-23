import styled from "styled-components";

export const Container = styled.main`
  max-width: ${({ theme }) => theme.maxContentWidth};
  padding: 20px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
`;

export const Subtitle = styled.p`
  margin-bottom: 3em;
`;
