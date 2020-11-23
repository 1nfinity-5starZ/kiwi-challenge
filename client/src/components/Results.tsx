import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, Flex } from "./common";

import { Result, Container, ResultsContainer } from "./Results.styles";

const getExpansionsQuery = gql`
  query Expansions($numberSequence: String!) {
    expansions(numberSequence: $numberSequence) {
      numberSequence
      expansions
    }
  }
`;

const Results: React.FC<{ sequence?: string }> = React.memo(({ sequence }) => {
  const [pageSize, setPageSize] = useState(100);
  const { loading, data, error } = useQuery(getExpansionsQuery, {
    variables: { numberSequence: sequence },
  });

  useEffect(() => {
    setPageSize(100);
  }, [data]);

  return (
    <Container>
      {loading ? (
        "loading..."
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div>
            Considered sequence of numbers: {data?.expansions?.numberSequence}
          </div>
          <div>
            Possible combinations: {data?.expansions?.expansions.length}
          </div>
          <ResultsContainer>
            {data?.expansions?.expansions
              .slice(0, pageSize)
              .map((e: string) => (
                <Result key={e}>{e}</Result>
              ))}
          </ResultsContainer>
          {data.expansions.expansions.length > pageSize && (
            <Button
              style={{ marginTop: 20, alignSelf: "center" }}
              onClick={() => setPageSize((current) => current + 100)}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </Container>
  );
});

export default Results;
