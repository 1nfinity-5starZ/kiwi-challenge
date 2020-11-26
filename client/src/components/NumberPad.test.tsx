import React from "react";
import { render, screen } from "@testing-library/react";
import NumberPad from "./NumberPad";

it("renders all the buttons", async () => {
  render(<NumberPad />);
  const input = screen.getAllByText(/[0-9]/);
  expect(input).toHaveLength(10);
});
