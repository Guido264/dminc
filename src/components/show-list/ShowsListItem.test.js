import { render } from "@testing-library/react";
import ShowListItem from "./ShowsListItem";

test("renders content", () => {
  const name = "Girls";
  const genres = ["Drama", "Romance"];

  const component = render(<ShowListItem name={name} genres={genres} />);
  component.getByText("Girls");
  component.getByText("Drama", "Romance");
});

