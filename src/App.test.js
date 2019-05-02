import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders navbar title", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const title = screen.getByText(/WikiCountries/i);
  expect(title).toBeInTheDocument();
});
