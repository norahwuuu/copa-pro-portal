import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";

import { errorTips, errorTypes, forgotPasswordText } from "@/pages/LoginBox/Login/column";
import { RecoverPassword } from "@/pages/LoginBox/recoverPassword/recoverPassword";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';
import AlertDialog from "@/components/Alert/alert";
import Btn from "@/components/Button/button";


jest.mock("umi", () => ({
    connect: () => jest.fn(),
    useSelector: jest.fn((fn) => fn()),
    useIntl: () => {
        return {

        };
    },
    history: jest.fn(),
}));

describe("Page massagebox", () => {

    it("Should render page correctly", () => {
        const setAlert = jest.fn();

        renderWithRouter(<AlertDialog isAlert={true} title={{ text: 'Title' }} content='testContent' btnList={[
            <Btn variant={"outlined"} btnLabel={"Got it!"} />,
        ]} setAlert={setAlert} />);
        expect(screen.getAllByText('Title').length).toBe(1);
        expect(screen.getAllByText('testContent').length).toBe(1);
        expect(screen.getAllByText('Got it!').length).toBe(1);

    });

    it("Should click the button when massage box displayed", async () => {

        const setAlert = jest.fn();

        const { user } = renderWithRouter(<AlertDialog isAlert={true} title='Title' content='testContent' btnList={[
            <Btn variant={"outlined"} btnLabel={"Got it!"} onClickHandler={() => setAlert({ isAlert: false })} />,
        ]} setAlert={setAlert} />);

        await act(async () => {
            user.click(screen.getByText(/Got it!/, { selector: "button" }));
        });
        expect(setAlert).toHaveBeenCalledTimes(1);
    });

    afterEach(cleanup);
});
