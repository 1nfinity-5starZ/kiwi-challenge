import React, { useState, useRef } from "react";

import { Button, Header, TextInput } from "../components/common";
import { Container, Title, Subtitle } from "../App.styles";
import NumberPad from "../components/NumberPad";
import Results from "../components/Results";

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Header />
      <Container>
        <section style={{ flex: 1 }}>
          <Title>Relive the good old T9 keyboard days !</Title>
          <Subtitle>
            Enter a sequence of numbers and our app will provide you with a list
            of all possible combinations. Feel free to use the numpad provided
            below !
          </Subtitle>
          <TextInput
            label="Enter a number sequence"
            type="t9"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            ref={inputRef}
          />
          <Button
            onClick={() => setSearch(text)}
            style={{ marginLeft: 15 }}
            color="#1EDA00"
          >
            Get expansions
          </Button>
        </section>
        <NumberPad
          onClick={(e) => {
            setText((t) => t + e);
            inputRef.current?.focus();
          }}
        />
      </Container>
      <Container>
        <Results sequence={search} />
      </Container>
    </>
  );
}

export default App;
