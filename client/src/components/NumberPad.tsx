import React from "react";

import { Button, Flex } from "./common";
import { Container } from "./NumberPad.styles";

const buttonMatrix: Array<Array<string>> = [
  ["1", "2 abc", "3 def"],
  ["4 ghi", "5 jkl", "6 mno"],
  ["7 pqrs", "8 tuv", "9 wxyz"],
];

const NumberPad: React.FC<{
  onClick?(e: string): any;
}> = ({ onClick }) => {
  return (
    <Container>
      {buttonMatrix.map(
        (row) =>
          // <Flex>
          row.map((item) => (
            <Button
              key={item}
              onClick={() => {
                if (onClick) {
                  onClick(item[0]);
                }
              }}
            >
              {item}
            </Button>
          ))
        // </Flex>
      )}
    </Container>
  );
};

export default NumberPad;
