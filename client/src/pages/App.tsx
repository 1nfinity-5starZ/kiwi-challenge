import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { Button, Header, TextInput } from "../components/common";
import { Container } from "./App.styles";
import theme from "../utils/theme";
import NumberPad from "../components/NumberPad";

function App() {
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <TextInput
          label="Type a number sequence"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <Button>Get expansions</Button>
        <NumberPad
          onClick={(e) => {
            setText((t) => t + e);
            inputRef.current?.focus();
          }}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
