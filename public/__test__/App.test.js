import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button to hide/show network should be rendered", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button");

  expect(buttonEl).toBeInTheDocument();
});

test("App component renders the user list", () => {
  render(<App />);
  const list = screen.getByTestId("user-list");
  expect(list).toBeInTheDocument();
});

test("App component toggles the list view when hide/show button is clicked", () => {
  const buttonEl = screen.getByRole("button");
  const list = screen.getByTestId("user-list");

  expect(list).toBeInTheDocument();

  fireEvent.click(buttonEl);

  expect(list).not.toBeInTheDocument();
});
