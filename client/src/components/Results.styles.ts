import styled from "styled-components";

export const Result = styled.span`
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;

  &:not(.sliced) :last-child {
    margin-right: auto;
  }
`;

export const Info = styled.div`
  max-width: 600px;
  margin: 0 auto 25px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
`;

export const InfoCard = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 20px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.secondaryColor || theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor || theme.primaryColor};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);

  h2 {
    margin: 0;
    font-size: 2.5em;
    margin-bottom: 5px;
    word-break: break-all;
    text-align: center;
  }

  p {
    margin: 0;
    text-align: center;
  }
`;
