import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';
import { PatientClinicalInformation } from "@/pages/Patient/Create/ClinicalInformation/clinicalInformation";

jest.mock("umi", () => ({
    connect: () => jest.fn(),
    useSelector: jest.fn((fn) => fn()),
    useIntl: () => {
        return {
            formatMessage: jest.fn(),
        };
    },
    history: jest.fn(),
}));
const setAlert = jest.fn();
describe("Page ClinicalInformation", () => {
    beforeEach(() => {
        console.log('do something before each expect');
    });
    it("Should render page ClinicalInformation correctly", () => {
        renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        expect(screen.getByTestId("leftTitle")).toBeInTheDocument();
        expect(screen.getByText('No')).toBeInTheDocument();
        expect(screen.getByText('Yes')).toBeInTheDocument();
        expect(screen.getByText('Implants')).toBeInTheDocument();
        expect(screen.getByText('Bridges')).toBeInTheDocument();
        expect(screen.getByText('Primary tooth (teeth)')).toBeInTheDocument();
        expect(screen.getByText('Periodontal disease')).toBeInTheDocument();
        expect(screen.getByText('Excessive calculus')).toBeInTheDocument();
        expect(screen.getByTestId('noteOptional')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();
        expect(screen.getByTestId('leftArea')).toBeInTheDocument();
    });
    it("Clicking the next button directly without clicking the yes/no button should display an error message", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Next'));
        });
        expect(screen.getByTestId("optionError")).toBeInTheDocument();
    });
    it("After clicking the yes button and clicking the submit button directly without selecting any options, an error message should be displayed", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        expect(screen.getByTestId("optionError")).toBeInTheDocument();
    })
    it("Clicking the yes button should display the multiple choice box", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        expect(screen.getByTestId("selectTitle")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();
    });
    it("The yes button is clicked and Implants or Bridges or Primary tooth(teeth) is checked, the correct popup should be displayed", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Implants'));
        });
        await act(async () => {
            user.click(screen.getByText('Bridges'));
        });
        await act(async () => {
            user.click(screen.getByText('Primary tooth (teeth)'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        expect(setAlert).toBeCalled();
    });
    it("Clicking the yes button and checking the option for Periodontal disease should display the correct pop-up window", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Periodontal disease'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        expect(screen.getByTestId("permanent")).toBeInTheDocument();
        expect(screen.getByTestId("temporary")).toBeInTheDocument();
        expect(screen.getByTestId("radioTitle")).toBeInTheDocument();
        expect(screen.getByTestId("perNoteTitle")).toBeInTheDocument();
        expect(screen.getByTestId("perArea")).toBeInTheDocument();
    });
    it("Clicking on xx should display three buttons for selecting the time", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Periodontal disease'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        await act(async () => {
            user.click(screen.getByTestId('temporary'));
        });
        expect(screen.getByTestId("monthBox")).toBeInTheDocument();
    });
    it("Clicking the ok,save and close button without selecting a time should display an error message if you click on temporary issue", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Periodontal disease'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        await act(async () => {
            user.click(screen.getByTestId('temporary'));
        });
        await act(async () => {
            user.click(screen.getByTestId('periodontalOk'));
        });
        expect(screen.getByTestId("periodontalError")).toBeInTheDocument();
    });
    it("Open the Periodontal disease pop-up window with Periodontal disease checked and click the OK button directly without the radio box, it should show the correct error message", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Periodontal disease'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        await act(async () => {
            user.click(screen.getByTestId('periodontalOk'));
        });
        expect(screen.getByTestId("periodontalError")).toBeInTheDocument();
    });
    it("Clicking the yes button and checking the option for Excessive calculus should display the correct pop-up window", async () => {
        const { user } = renderWithRouter(<PatientClinicalInformation setAlert={setAlert} />);
        await act(async () => {
            user.click(screen.getByText('Yes'));
        });
        await act(async () => {
            user.click(screen.getByText('Excessive calculus'));
        });
        await act(async () => {
            user.click(screen.getByText('Submit'));
        });
        expect(setAlert).toBeCalled();
    });
    afterEach(cleanup);
})