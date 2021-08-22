import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationLink from "./NavigationLink";

const MockNavigationLink = () => {
  return (
    <BrowserRouter>
      <NavigationLink />
    </BrowserRouter>
  );
};

test('should render "Back to Shows" button', () => {
  render(<MockNavigationLink />);

  const linkElement = screen.getByText("Back to Shows");
  expect(linkElement).toBeInTheDocument();
});
