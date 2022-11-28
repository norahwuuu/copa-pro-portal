import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";

import { errorTips, errorTypes, forgotPasswordText } from "@/pages/LoginBox/Login/column";
import { RecoverPassword } from "@/pages/LoginBox/recoverPassword/recoverPassword";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';

let testFormatMessage = false;
const mockFormatMessage = jest.fn().mockImplementation((msg) => {
    if (!testFormatMessage) {
        if (msg.id === "btnResetPassword") return forgotPasswordText.reset;
        if (msg.id === "btnCancel") return forgotPasswordText.cancel;
        if (msg.id === "btnBacktoLogin") return 'Back to login';
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
        renderWithRouter(<RecoverPassword />);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByText(`Recover your password`)).toBeInTheDocument();
        expect(screen.getByText(`Let's set a new password for your account.`)).toBeInTheDocument();
        expect(screen.getByLabelText('Create password')).toBeInTheDocument();
        expect(screen.getByText('Password must be at least 6 characters and contain at least one special character.')).toBeInTheDocument();
        expect(screen.getAllByText('Min. 6 characters, and one special character.').length).toBe(1);
        expect(screen.getByText('Security question')).toBeInTheDocument();
        expect(screen.getByText('What was your first pet name?')).toBeInTheDocument();
        expect(screen.getByLabelText('Answer')).toBeInTheDocument();
        expect(screen.getByText('Reset password')).toBeInTheDocument();
        expect(screen.getByText('Back to login')).toBeInTheDocument();
    });

    it("Should display error when field is empty", async () => {
        const { user } = renderWithRouter(<RecoverPassword />);
        await act(async () => {
            user.click(screen.getByText(/Reset password/, { selector: "button" }));
        });
        expect(screen.getAllByText(errorTips.emailEmpty).length).toBe(1);
        expect(screen.getAllByText(errorTips.passEmpty).length).toBe(1);
        expect(screen.getAllByText(errorTypes.verifyQustionError.tip).length).toBe(1);

    });

    it("Should display error when answer is empty", async () => {
        const { user } = renderWithRouter(<RecoverPassword />);
        await act(async () => {
            user.change(screen.getByLabelText("Answer"), {
                target: { value: "" },
            });

        });
        await act(async () => {
            user.blur(screen.getByLabelText("Answer"));
        });

        expect(screen.getAllByText(errorTypes.verifyQustionError.tip).length).toBe(1);


    });
    it("Should display error when answer is empty", async () => {
        const { user } = renderWithRouter(<RecoverPassword />);
        await act(async () => {
            user.change(screen.getByLabelText("Answer"), {
                target: { value: "tastgt@11" },
            });

        });
        await act(async () => {
            user.focus(screen.getByLabelText("Answer"));
        });
        expect(screen.queryByText(errorTypes.verifyQustionError.tip)).toBe(null);


    });


    it("Should display error when email is invalid format", async () => {
        const { user } = renderWithRouter(<RecoverPassword />);
        await act(async () => {
            user.change(screen.getByLabelText("Email"), {
                target: { value: "test" },
            });

        });
        // @ts-ignore
        expect(screen.getByLabelText("Email").value).toBe("test");
        await act(async () => {
            user.blur(screen.getByLabelText("Email"));
        });

        expect(screen.getByText(errorTips.nonvalidEmail)).toBeInTheDocument();
    });
    it("Should display error when password is invalid format", async () => {
        const { user } = renderWithRouter(<RecoverPassword />);
        await act(async () => {
            user.change(screen.getByLabelText("Create password"), {
                target: { value: "test" },
            });


        });
        // @ts-ignore
        expect(screen.getByLabelText("Create password").value).toBe("test");
        await act(async () => {
            user.click(screen.getByText(/Reset password/, { selector: "button" }));
        });

        expect(screen.getAllByText(errorTypes.passwordFormatError.tip).length).toBe(1);

    });
    it("Should navigate to login page on `Back to login?` click", async () => {
        history.push = jest.fn();
        const { user } = renderWithRouter(<RecoverPassword />);

        await act(async () => {
            user.click(screen.getByText(/Back to login/i));
        });

        expect(history.push).toHaveBeenCalledWith("/");
    });
    it("Should be able to submit form with valid username\password\answer ", async () => {
        const resetPassword = jest.fn();
        const { user } = renderWithRouter(<RecoverPassword resetPassword={resetPassword} />);
        user.change(screen.getByLabelText("Email"), {
            target: { value: "test@ulab.com" },
        });
        user.change(screen.getByLabelText("Create password"), {
            target: { value: "test12315!" },
        });
        user.change(screen.getByLabelText("Answer"), {
            target: { value: "Tomcat" },
        });

        await act(async () => {
            user.click(screen.getByText(/Reset password/, { selector: "button" }));
        });

        expect(resetPassword).toHaveBeenCalledTimes(1);
    });

    afterEach(cleanup);
});
