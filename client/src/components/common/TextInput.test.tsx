import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

it("correctly renders the label passed as prop", async () => {
  render(<TextInput label="Hey Jude" />);
  const input = screen.getByLabelText("Hey Jude");
  expect(input).toBeInTheDocument();
});
