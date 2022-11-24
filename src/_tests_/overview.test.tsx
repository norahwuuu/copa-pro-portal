import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';
import { PatientOverview } from '@/pages/Patient/Overview/overview';


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

describe("Page Overview", () => {
    beforeEach(() => {
        console.log('do something before each expect');
    });
    // patient info
    it("Should render page of patient info correctly", () => {
        renderWithRouter(<PatientOverview />);
        expect(screen.getByText('Date of birth')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Mobile')).toBeInTheDocument();
        expect(screen.getByText('Address')).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toBe(4);
        expect(screen.getByTitle('avatar')).toBeInTheDocument();
    });

    //Records

    //Treatment Plan

    //Dental monitoring
})