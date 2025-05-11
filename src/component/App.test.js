import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("calculation history updates when a calculation is made", () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");

  // Perform a simple calculation (e.g., 2 + 2)
  fireEvent.click(buttons.find(button => button.textContent === "2"));
  fireEvent.click(buttons.find(button => button.textContent === "+"));
  fireEvent.click(buttons.find(button => button.textContent === "2"));
  fireEvent.click(buttons.find(button => button.textContent === "="));

  // Check if the history has been updated
  expect(screen.getByText("2 + 2 =")).toBeInTheDocument();
});

// ... other tests ...
