import styled from "styled-components";

export const Result = styled.span`
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;

  & :last-child {
    margin-right: auto;
  }
`;
