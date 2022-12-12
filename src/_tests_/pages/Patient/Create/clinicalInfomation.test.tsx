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
    });
    afterEach(cleanup);
})