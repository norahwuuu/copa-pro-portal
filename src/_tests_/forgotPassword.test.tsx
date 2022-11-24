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
        expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
        expect(screen.getByText(/Reset password/i)).toBeInTheDocument();
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

    // it("Should display error when email is invalid format", async () => {
    //     const { user } = renderWithRouter(<ForgotPassword />);
    //     const usernameField = screen.getByLabelText("Email");
    //     await act(async () => {
    //         user.change(screen.getByLabelText("Email"), {
    //             target: { value: "test" },
    //         });

    //         user.change(screen.getByLabelText("Password"), {
    //             target: { value: "test" },
    //         });
    //     });
    //     // @ts-ignore
    //     expect(screen.getByLabelText("Email").value).toBe("test");
    //     await act(async () => {
    //         // I had to change it from user.click(screen.getByText(/Login/, {selector: 'button'})) to user.blur(screen.getByLabelText("Email"));
    //         // because you don't call validate on button click... You should also call form validate on click on the login
    //         // button.
    //         user.blur(screen.getByLabelText("Email"));
    //     });

    //     expect(screen.getByText(errorTips.nonvalidEmail)).toBeInTheDocument();
    //     expect(screen.queryByText(errorTips.passEmpty)).toBeNull();
    // });

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



    afterEach(cleanup);
});
