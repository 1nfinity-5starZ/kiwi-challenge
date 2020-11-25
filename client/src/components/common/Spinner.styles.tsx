import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primaryColor};
  clip-path: polygon(0 0, 50% 50%, 0 100%, 100% 100%, 100% 0);
  animation: ${rotate} 1.5s cubic-bezier(0.39, 0.575, 0.565, 0.8) infinite;
`;
