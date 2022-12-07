import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";

import { errorTips, errorTypes, } from "@/pages/LoginBox/Login/column";
import { ChangePassword } from "@/pages/LoginBox/ChangePassword/changePassword";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from "react";


let testFormatMessage = false;
const mockFormatMessage = jest.fn().mockImplementation((msg) => {
    if (!testFormatMessage) {
        if (msg.id === "oldPassword") return 'oldPassword';
        if (msg.id === "newPassword") return 'newPassword';
        if (msg.id === "btnSave") return 'Save';
        if (msg.id === "btnCancel") return 'Cancel';
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
        renderWithRouter(<ChangePassword />);
        expect(screen.getByText('Change password')).toBeInTheDocument();
        expect(screen.getByLabelText('oldPassword')).toBeInTheDocument();
        expect(screen.getByLabelText('newPassword')).toBeInTheDocument();
        expect(screen.getByText('Save')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Min. 6 characters, and one special character.')).toBeInTheDocument();
    });



    it("Should display error when field is empty", async () => {
        const { user } = renderWithRouter(<ChangePassword />);
        await act(async () => {
            user.click(screen.getByText(/Save/, { selector: "button" }));
        });
        expect(screen.getAllByText("Please enter password.").length).toBe(2);

    });

    it("Should display error when the two passwords are inconsistent", async () => {
        const { user } = renderWithRouter(<ChangePassword />);
        await act(async () => {
            user.change(screen.getByLabelText("oldPassword"), {
                target: { value: "123123" },
            });
            user.change(screen.getByLabelText("newPassword"), {
                target: { value: "1asdq2we" },
            });

        });
        await act(async () => {
            user.click(screen.getByText(/Save/, { selector: "button" }));
        });
        expect(screen.getByText('Please enter the same password.')).toBeInTheDocument();

    });
    it("Should display error when the two passwords are inconsistent and no newpassword", async () => {
        const { user } = renderWithRouter(<ChangePassword />);

        await act(async () => {
            user.change(screen.getByLabelText("oldPassword"), {
                target: { value: "123123123" },
            });
            user.change(screen.getByLabelText("newPassword"), {
                target: { value: "" },
            });

        });
        await act(async () => {
            user.click(screen.getByText(/Save/, { selector: "button" }));
        });
        expect(screen.getByText('Please enter the same password.')).toBeInTheDocument();

    });

    it("Should display error when password is invalid format", async () => {
        const { user } = renderWithRouter(<ChangePassword />);

        await act(async () => {
            user.change(screen.getByLabelText("oldPassword"), {
                target: { value: "123123" },
            });
            user.change(screen.getByLabelText("newPassword"), {
                target: { value: "123123" },
            });

        });
        // @ts-ignore
        expect(screen.getByLabelText("oldPassword").value).toBe("123123");
        await act(async () => {
            user.click(screen.getByText(/Save/i));
        });
        expect(screen.getByText('Wrong password format.')).toBeInTheDocument();
        expect(screen.getAllByText("Wrong password format.").length).toBe(1);

    });

    it("Should navigate to login page on `Cancel?` click", async () => {
        history.push = jest.fn();
        const { user } = renderWithRouter(<ChangePassword />);

        await act(async () => {
            user.click(screen.getByText(/Cancel/i));
        });

        expect(history.push).toHaveBeenCalledWith("/");
    });
    it("should be able to submit form with valid password", async () => {
        const changePasswordFn = jest.fn();
        const { user } = renderWithRouter(<ChangePassword changePasswordFn={changePasswordFn} />);

        await act(async () => {
            user.change(screen.getByLabelText("oldPassword"), {
                target: { value: "test12345@" },
            });
            user.change(screen.getByLabelText("newPassword"), {
                target: { value: "test12345@" },
            });

        });

        await act(async () => {
            user.click(screen.getByText(/Save/i));
        });
        expect(changePasswordFn).toHaveBeenCalledWith({
            oldPassword: "test12345@",
            newPassword: "test12345@",
        });

    });

    afterEach(cleanup);
});
