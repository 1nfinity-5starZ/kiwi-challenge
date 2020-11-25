import React, { useState, useRef } from "react";

import {
  Button,
  Flex,
  Header,
  TextInput,
  Checkbox,
} from "../components/common";
import { Container, Title, Subtitle } from "../App.styles";
import NumberPad from "../components/NumberPad";
import Results from "../components/Results";

function Home() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const [filterWords, setFilterWords] = useState(false);

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
          <Flex
            style={{
              alignItems: "flex-end",
              gap: 15,
              flexWrap: "wrap",
              marginBottom: 15,
            }}
          >
            <TextInput
              label="Enter a number sequence"
              type="t9"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              ref={inputRef}
            />
            <Button onClick={() => setSearch(text)} color="#1EDA00">
              Get expansions
            </Button>
            <span style={{ flex: "1 0 100%" }}>
              <Checkbox
                label="Filter only suitable words"
                checked={filterWords}
                onChange={(e) => setFilterWords(e.target.checked)}
              />
            </span>
          </Flex>
        </section>
        <NumberPad
          onClick={(e) => {
            setText((t) => t + e);
            inputRef.current?.focus();
          }}
        />
      </Container>
      <Container>
        <Results sequence={search} filterWords={filterWords} />
      </Container>
    </>
  );
}

export default Home;
