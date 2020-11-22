import styled from "styled-components";

export const Container = styled.main`
  max-width: ${({ theme }) => theme.maxContentWidth};
  padding: 20px;
  margin: 0 auto;
`;
