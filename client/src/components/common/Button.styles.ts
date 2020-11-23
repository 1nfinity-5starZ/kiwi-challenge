import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  text-align: center;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${({ color, theme }) => color || theme.primaryColor};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  filter: saturate(${({ disabled }) => (disabled ? "50%" : "100%")});

  &:hover {
    filter: brightness(${({ disabled }) => (disabled ? "none" : 1.1)});
  }

  &:active {
    filter: brightness(${({ disabled }) => (disabled ? "none" : 1.3)});
  }
`;
