import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import { render, screen } from "@testing-library/react";

test("CenterRectangle", () => {
  const props = {
    mainTitle: "first line",
  };
  render(<CenterRectangle {...props} />);

  expect(screen.getByText("first line"));
});
