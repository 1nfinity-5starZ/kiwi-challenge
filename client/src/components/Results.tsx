import React, { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Button, Spinner } from "./common";

import {
  Result,
  Container,
  ResultsContainer,
  Info,
  InfoCard,
} from "./Results.styles";

const getExpansionsQuery = gql`
  query Expansions($numberSequence: String!, $filterWords: Boolean) {
    expansions(numberSequence: $numberSequence, filterWords: $filterWords) {
      numberSequence
      expansions
    }
  }
`;

const Results: React.FC<{
  sequence?: string;
  filterWords?: boolean;
}> = React.memo(({ sequence, filterWords = false }) => {
  const [pageSize, setPageSize] = useState(100);
  const [getExpansions, { loading, data, error }] = useLazyQuery(
    getExpansionsQuery,
    {
      variables: { numberSequence: sequence, filterWords },
    }
  );

  useEffect(() => {
    setPageSize(100);
  }, [data]);

  useEffect(() => {
    if (sequence) {
      getExpansions();
    }
  }, [sequence, getExpansions]);

  return (
    <Container>
      {loading ? (
        <Spinner style={{ margin: "0 auto" }} />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : data ? (
        <>
          <Info>
            <InfoCard>
              <h2>{data.expansions?.numberSequence}</h2>
              <p>Considered sequence of numbers</p>
            </InfoCard>
            <InfoCard>
              <h2>{data.expansions?.expansions.length}</h2>
              <p>{filterWords ? "Words found" : "Possible combinations"}</p>
            </InfoCard>
          </Info>
          <ResultsContainer
            className={
              data.expansions?.expansions.length >= pageSize ? "sliced" : ""
            }
          >
            {data.expansions?.expansions.slice(0, pageSize).map((e: string) => (
              <Result key={e}>{e}</Result>
            ))}
          </ResultsContainer>
          {data.expansions?.expansions.length > pageSize && (
            <Button
              style={{ marginTop: 20, alignSelf: "center" }}
              onClick={() => setPageSize((current) => current + 100)}
            >
              See more
            </Button>
          )}
        </>
      ) : null}
    </Container>
  );
});

export default Results;
