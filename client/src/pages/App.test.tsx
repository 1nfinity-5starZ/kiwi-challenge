import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

it("renders the input with label", async () => {
  render(<App />);
  const input = screen.getByLabelText("Type a number sequence");
  expect(input).toBeInTheDocument();
});

it("renders the search button", async () => {
  render(<App />);
  const button = screen.getByText("Get expansions");
  expect(button).toBeInTheDocument();
});

// it("adds number to input when numpad pressed", async () => {
//   render(<App />);
//   const buttons = screen.getAllByText(/[0-9]/);
//   // const input = screen.getByLabelText("Type a number sequence");

//   buttons.forEach(async (button) => {
//     fireEvent.click(button);
//     await waitFor(() => screen.getByLabelText("Type a number sequence"));
//     expect(screen.getByLabelText("Type a number sequence")).toHaveTextContent(
//       new RegExp(button.textContent as string)
//     );
//   });
// });
