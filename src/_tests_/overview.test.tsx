import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';
import { PatientOverview } from '@/pages/Patient/Overview/overview';
import UserInfo from '@/pages/Patient/Overview/components/userInfo';

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
    it("Should be displayed correct achive status and infomation value", () => {
        const testData = {
            achiveStatus: 2,
            patientName: 'testName',
            email: 'testPatient@qq.com',
            mobile: 'test mobile123',
            address: 'test address123',
            birthDate: 'test birth',
            avatar: 'testUrl'
        }
        renderWithRouter(<UserInfo {...testData} />);
        expect(screen.getAllByText('testName').length).toBe(1);
        expect(screen.getAllByText('testPatient@qq.com').length).toBe(1);
        expect(screen.getAllByText('test mobile123').length).toBe(1);
        expect(screen.getAllByText('test address123').length).toBe(1);
        expect(screen.getAllByText('test birth').length).toBe(1);
        expect(screen.getAllByTestId('Prospective').length).toBe(1);
    });
    it("Should call click function in patientInfo ", async () => {
        const { user } = renderWithRouter(<PatientOverview />);
        await act(async () => {
            user.click(screen.getByTestId('infoEdit'))
        });
        await act(async () => {
            user.click(screen.getByTestId('infoArchive'))
        });
    })
    //Records

    //Treatment Plan

    //Dental monitoring
})