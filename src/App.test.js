/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import App from "./App";
import Search from "./components/search/searchSong";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("input renders correctly", () => {
  render(<Search />);
  const inputElement = screen.getByRole("textbox");
  userEvent.type(inputElement, "test");
  expect(inputElement).toHaveValue("test");
});
