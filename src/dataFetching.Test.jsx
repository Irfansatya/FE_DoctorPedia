import { render, screen } from "@testing-library/solid";
import DataFetcher from "./DataFetcher.jsx";

test("renders loading initially", () => {
  render(() => <DataFetcher />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
