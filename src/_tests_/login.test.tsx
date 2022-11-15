// // import { queryLogin } from "@/services/login";
// import AppRoutes from "../../../../routes"
// import Login from "../pages/LoginBox/Login/login";
import useDispatch from "react-redux";
jest.mock("react-redux");
// const mockFunction = jest.fn()

describe("<Login />", () => {
  // test("initial load", async () => {
  //   render(<Login />);
  //   // expect(screen.getAllByTestId("username")).toBeInTheDocument();
  //   // expect(screen.getAllByTestId("password")).toBeInTheDocument();
  // });
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
  test("Should able to submit form with valid username and password", async () => {
    // useShallowEqualSelector.mockReturnValueOnce(0); // if we have only one selector
    expect(useDispatch).toHaveBeenCalledTimes(1);
    expect(useDispatch).toHaveBeenCalledWith({
      type: "loginSpace/login",
      payload: {
        username: "admin@ulabsystems.net",
        password: "Qwer12#",
      },
    });
    // expect(await dispatch({
    //   type: 'loginSpace/login',
    //   payload: {
    //     username: 'admin@ulabsystems.net',
    //     password: 'Qwer12#'
    //   },
    // }).status).toBe('SUCCESS');
  });
  // afterEach(cleanup);
  // test("initial load", () => {
  //   const { container } = render(<Login></Login>);
  //   expect(1);
  // });
});
