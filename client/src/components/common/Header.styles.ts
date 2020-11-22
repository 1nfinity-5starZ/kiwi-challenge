import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const Content = styled.header`
  max-width: ${({ theme }) => theme.maxContentWidth};
  padding: 20px;
  margin: 0 auto;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
`;
