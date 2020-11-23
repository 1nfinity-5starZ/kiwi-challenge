import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  padding: 8px 13px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  cursor: text;

  &:focus {
    border-color: ${({ theme }) => theme.primaryColor};
    border-width: 2px;
    padding: 7px 12px;
  }
`;
