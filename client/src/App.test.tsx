import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the input with label", async () => {
  render(<App />);
  const input = screen.getByLabelText("Enter a number sequence");
  expect(input).toBeInTheDocument();
});

it("renders the search button", async () => {
  render(<App />);
  const button = screen.getByText("Get expansions");
  expect(button).toBeInTheDocument();
});
