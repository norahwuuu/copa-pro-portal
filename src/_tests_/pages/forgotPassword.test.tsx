import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";

import { errorTips, loginText, forgotPasswordText } from "@/pages/LoginBox/Login/column";
import { Login } from "@/pages/LoginBox/Login/login";
import { ForgotPassword } from "@/pages/LoginBox/ForgotPassword/forgotPassword";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';

let testFormatMessage = false;
const mockFormatMessage = jest.fn().mockImplementation((msg) => {
    if (!testFormatMessage) {
        if (msg.id === "btnResetPassword") return forgotPasswordText.reset;
        if (msg.id === "btnCancel") return forgotPasswordText.cancel;
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

describe("Page ForgotPassword", () => {
    beforeEach(() => {
        testFormatMessage = false;
    });

    it("Should render page correctly", () => {
        renderWithRouter(<ForgotPassword />);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByText(`Please provide the email address associated with your account. We will send you a password reset email with instructions once we find a match in our system.`)).toBeInTheDocument();
        expect(screen.getByText('Forgot password?')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Reset password')).toBeInTheDocument();
    });


    it("Should translate message correctly", () => {
        testFormatMessage = true;

        renderWithRouter(<ForgotPassword />);
        expect(screen.getAllByText("TRANSLATED MESSAGE").length).toBe(2);
    });

    it("Should display error when field is empty", async () => {
        const { user } = renderWithRouter(<ForgotPassword />);
        await act(async () => {
            user.click(screen.getByText(/Reset password/, { selector: "button" }));
        });
        expect(screen.getByText(errorTips.emailEmpty)).toBeInTheDocument();
    });


    it("Should display error when email is invalid format", async () => {
        const { user } = renderWithRouter(<ForgotPassword />);
        const usernameField = screen.getByLabelText("Email");
        await act(async () => {
            user.change(screen.getByLabelText("Email"), {
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
    });

    it("Should navigate to login page on `Cancel?` click", async () => {
        history.push = jest.fn();
        const { user } = renderWithRouter(<ForgotPassword />);

        await act(async () => {
            user.click(screen.getByText(/Cancel/i));
        });

        expect(history.push).toHaveBeenCalledWith("/");
    });
    it("Should be able to submit form with valid username ", async () => {
        const forgotPassword = jest.fn();
        const { user } = renderWithRouter(<ForgotPassword forgotPassword={forgotPassword} />);
        user.change(screen.getByLabelText("Email"), {
            target: { value: "test@ulab.com" },
        });

        await act(async () => {
            user.click(screen.getByText(/Reset password/, { selector: "button" }));
        });

        expect(forgotPassword).toHaveBeenCalledWith({
            username: "test@ulab.com",
        });
    });

    afterEach(cleanup);
});
