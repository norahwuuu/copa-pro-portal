// import { queryLogin } from "@/services/login";
// import "@testing-library/jest-dom/extend-expect";
// // import { act, render, renderHook, screen } from "@testing-library/react";
// // console.log(act, renderHook, screen, render);
// test("initial load", async () => {
//   return;
// });
// test("Should dispaly error when field is empty", async () => {
//   return;
// });
// test("Should dispaly error when email is invalid format", async () => {
//   return;
// });
// test("Should able to submit form with valid username and password", async () => {
//   expect.assertions(1);
//   const data = await queryLogin({
//     username: "1114028542@qq.com",
//     password: "123",
//   });
//   return;
// });
import { cleanup, screen } from "@testing-library/react";

// import AppRoutes from "../../../../routes"
import Login from "../pages/LoginBox/Login/login";
import { renderWithRouter } from "../utils/test.util";
// const mockFunction = jest.fn()

describe("<Login />", () => {
  test("initial load", async () => {
    renderWithRouter(<Login />);
    expect(screen.getAllByTestId("username")).toBeInTheDocument();
    expect(screen.getAllByTestId("password")).toBeInTheDocument();
  });
  // test("Should dispaly error when field is empty", async () => {
  //   const { user } = renderWithRouter(<Login />)
  //   await act(() => {
  //     user.click(screen.getByText(/btnLogin/))
  //   })
  //   expect(screen.getAllByTestId('username')).toBeInTheDocument()
  //   expect(screen.getAllByTestId('password')).toBeInTheDocument()
  // })
  // test("Should dispaly error when email is invalid format", async () => {
  //   const { user } = renderWithRouter(<Login />)
  //   await act(() => {
  //     user.change(screen.getByLabelText("formfields.email"), { target: { value: "test" } })
  //     user.change(screen.getByLabelText("formfields.password"), { target: { value: "test" } })
  //     user.click(screen.getByText(/button.login/))
  //   })
  //   expect(screen.getByText(/formfieldErrors.usernameinvalid/)).toBeInTheDocument()
  //   expect(screen.queryByText(/formfieldErrors.passwordrequired/)).toBeNull()
  // })
  // test("Should able to submit form with valid username and password", async () => {
  //   const { user } = renderWithRouter(<AppRoutes />, { route: "/auth/login" })
  //   user.change(screen.getByLabelText("formfields.email"), { target: { value: "test@ulab.com" } })
  //   user.change(screen.getByLabelText("formfields.password"), { target: { value: "test" } })
  //   await act(() => {
  //     user.click(screen.getByText(/button.login/))
  //   })
  //   // in progress need to work with valida condition
  //   expect(screen.getByLabelText(/formfields.password/)).toBeInTheDocument()

  // })
  afterEach(cleanup);
});
