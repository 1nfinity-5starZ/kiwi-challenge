import React from "react";

import { Button } from "./common";
import { Container } from "./NumberPad.styles";

const buttonMatrix: Array<Array<string>> = [
  ["1", "2 abc", "3 def"],
  ["4 ghi", "5 jkl", "6 mno"],
  ["7 pqrs", "8 tuv", "9 wxyz"],
  ["", "0", ""],
];

const NumberPad: React.FC<{
  onClick?(e: string): any;
}> = ({ onClick }) => {
  return (
    <Container>
      {buttonMatrix.map(
        (row, i) =>
          // <Flex>
          row.map((item, j) =>
            item === "" ? (
              <span key={`${i}${j}`} />
            ) : (
              <Button
                // color="#124CB6"
                disabled={item[0] === "1" || item[0] === "0"}
                key={`${i}${j}`}
                onClick={() => {
                  if (onClick) {
                    onClick(item[0]);
                  }
                }}
              >
                {item}
              </Button>
            )
          )
        // </Flex>
      )}
    </Container>
  );
};

export default NumberPad;
