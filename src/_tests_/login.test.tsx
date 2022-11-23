import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";

import { errorTips, loginText } from "@/pages/LoginBox/Login/column";
import { Login } from "@/pages/LoginBox/Login/login";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';

let testFormatMessage = false;
const mockFormatMessage = jest.fn().mockImplementation((msg) => {
    if (!testFormatMessage) {
        if (msg.id === "forgotUser") return loginText.forgotUser;
        if (msg.id === "forgotPasswordTitle") return loginText.forgotPass;
        if (msg.id === "btnLogin") return "Login";
        return "Not translated";
    } else {
        return "TRANSLATED MESSAGE";
    }
});
jest.mock("umi", () => ({
    connect: () => jest.fn(),
    useSelector: jest.fn((fn) => fn()),
    useIntl: () => {
        return {
            formatMessage: mockFormatMessage,
        };
    },
    history: jest.fn(),
}));

describe("Page Login", () => {
    beforeEach(() => {
        testFormatMessage = false;
    });

    it("Should render page correctly", () => {
        renderWithRouter(<Login />);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    it("Should translate message correctly", () => {
        testFormatMessage = true;

        renderWithRouter(<Login />);
        expect(screen.getAllByText("TRANSLATED MESSAGE").length).toBe(3);
    });

    it("Should display error when field is empty", async () => {
        const { user } = renderWithRouter(<Login />);
        await act(async () => {
            user.click(screen.getByText(/Login/, { selector: "button" }));
        });
        expect(screen.getByText(errorTips.emailEmpty)).toBeInTheDocument();
        expect(screen.getByText(errorTips.passEmpty)).toBeInTheDocument();
    });

    it("Should display error when email is invalid format", async () => {
        const { user } = renderWithRouter(<Login />);
        const usernameField = screen.getByLabelText("Email");
        await act(async () => {
            user.change(screen.getByLabelText("Email"), {
                target: { value: "test" },
            });

            user.change(screen.getByLabelText("Password"), {
                target: { value: "test" },
            });
        });
        // @ts-ignore
        expect(screen.getByLabelText("Email").value).toBe("test");
        await act(async () => {
            // I had to change it from user.click(screen.getByText(/Login/, {selector: 'button'})) to user.blur(screen.getByLabelText("Email"));
            // because you don't call validate on button click... You should also call form validate on click on the login
            // button.
            user.blur(screen.getByLabelText("Email"));
        });

        expect(screen.getByText(errorTips.nonvalidEmail)).toBeInTheDocument();
        expect(screen.queryByText(errorTips.passEmpty)).toBeNull();
    });

    it("Should be able to submit form with valid username and password", async () => {
        const loginFn = jest.fn();
        const { user } = renderWithRouter(<Login loginUser={loginFn} />);
        user.change(screen.getByLabelText("Email"), {
            target: { value: "test@ulab.com" },
        });
        user.change(screen.getByLabelText("Password"), {
            target: { value: "test" },
        });
        await act(async () => {
            user.click(screen.getByText(/Login/, { selector: "button" }));
        });

        expect(loginFn).toHaveBeenCalledWith({
            password: "test",
            username: "test@ulab.com",
        });
    });

    it("Should navigate to forgot username on `Forgot username?` click", async () => {
        history.push = jest.fn();
        const { user } = renderWithRouter(<Login />);

        await act(async () => {
            user.click(screen.getByText(loginText.forgotUser));
        });

        expect(history.push).toHaveBeenCalledWith("/login/forgotUsername");
    });

    it("Should navigate to forgot password on `Forgot password?` click", async () => {
        history.push = jest.fn();
        const { user } = renderWithRouter(<Login />);

        await act(async () => {
            user.click(screen.getByText(loginText.forgotPass));
        });

        expect(history.push).toHaveBeenCalledWith("/login/forgotPassword");
    });

    afterEach(cleanup);
});
