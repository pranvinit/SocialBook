import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("list of socials of the users should be rendered", () => {
  render(<Card />);
  const socials = screen.getByTestId("socials-list");
  expect(socials).toBeInTheDocument();
});
