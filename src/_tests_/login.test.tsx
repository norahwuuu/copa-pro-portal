// // import { queryLogin } from "@/services/login";
// import AppRoutes from "../../../../routes"

jest.mock("react-redux");
// const mockFunction = jest.fn()

import { act, cleanup, screen } from "@testing-library/react";

import { renderWithRouter } from "@/utils/test.util";
import AppRoutes from "../../../../routes";

import Login from "../pages/LoginBox/Login/login";

const mockFunction = jest.fn();
jest.mock("@okta/okta-react", () => {
  return {
    useOktaAuth: () => ({
      authState: { isAuthenticated: true },
      authService: { handleAuthentication: mockFunction },
      oktaAuth: {
        getUser: () =>
          new Promise((resolve) => {
            resolve("foo");
          }),
        signInWithCredentials: () =>
          new Promise((resolve) => {
            resolve({ status: "SUCCESS", sessionToken: "12344SDSD" });
          }),
        signInWithRedirect: () => mockFunction,
      },
    }),
    withOktaAuth: (x: any) => x,
    Security: () => <div />,
    SecureRoute: () => <div />,
    LoginCallback: () => <div />,
  };
});

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
  Trans: ({ childern }: any) => childern,
}));

describe("<Login />", () => {
  test("initial load", async () => {
    renderWithRouter(<Login />);
    expect(screen.getByLabelText(/formfields.password/)).toBeInTheDocument();
    expect(screen.getByLabelText(/formfields.email/)).toBeInTheDocument();
  });
  test("Should dispaly error when field is empty", async () => {
    const { user } = renderWithRouter(<Login />);
    await act(() => {
      user.click(screen.getByText(/button.login/));
    });
    expect(
      screen.getByText(/formfieldErrors.usernamerequired/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/formfieldErrors.passwordrequired/)
    ).toBeInTheDocument();
  });
  test("Should dispaly error when email is invalid format", async () => {
    const { user } = renderWithRouter(<Login />);
    await act(() => {
      user.change(screen.getByLabelText("formfields.email"), {
        target: { value: "test" },
      });
      user.change(screen.getByLabelText("formfields.password"), {
        target: { value: "test" },
      });
      user.click(screen.getByText(/button.login/));
    });
    expect(
      screen.getByText(/formfieldErrors.usernameinvalid/)
    ).toBeInTheDocument();
    expect(screen.queryByText(/formfieldErrors.passwordrequired/)).toBeNull();
  });
  test("Should able to submit form with valid username and password", async () => {
    const { user } = renderWithRouter(<AppRoutes />, { route: "/auth/login" });
    user.change(screen.getByLabelText("formfields.email"), {
      target: { value: "test@ulab.com" },
    });
    user.change(screen.getByLabelText("formfields.password"), {
      target: { value: "test" },
    });
    await act(() => {
      user.click(screen.getByText(/button.login/));
    });
    // in progress need to work with valida condition
    expect(screen.getByLabelText(/formfields.password/)).toBeInTheDocument();
  });
  afterEach(cleanup);
});
