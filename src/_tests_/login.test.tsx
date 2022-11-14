import Login from "@/pages/LoginBox/Login/login";
import { render } from "@testing-library/react";
test("initial load", () => {
  const { container } = render(<Login></Login>);
  expect(1);
});
