import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from "@testing-library/react";
import { renderWithRouter } from "@/utils/test.util";
import { history } from "umi";
import React from 'react';
import { PatientOverview } from '@/pages/Patient/Overview/overview';
import UserInfo from '@/pages/Patient/Overview/components/userInfo';
import Records from '@/pages/Patient/Overview/components/records';
import testPng from '@/assets/images/left1.png';
import Treatment from "@/pages/Patient/Overview/components/treatment";
import Monitoring from "@/pages/Patient/Overview/components/monitoring";
import Order from "@/pages/Patient/Overview/components/order";

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
        renderWithRouter(<PatientOverview treatmentData={{ stages: 18, retainerDate: '12/14/2023', endDate: '12/14/2023' }} dentalData={{ status: 'Tracking', date: '12/14/2023' }} orderData={{ status: 'Delivered', date: '12/14/2023' }} />);
        expect(screen.getByText('Date of birth')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Mobile')).toBeInTheDocument();
        expect(screen.getByText('Address')).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toBe(4);
        expect(screen.getByTitle('avatar')).toBeInTheDocument();
        expect(screen.getByText('18')).toBeInTheDocument();
        expect(screen.getByText('Tracking')).toBeInTheDocument();
        expect(screen.getByText('Delivered')).toBeInTheDocument();
        expect(screen.getAllByText('12/14/2023').length).toBe(4);


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
        const { user } = renderWithRouter(<PatientOverview treatmentData={{ stages: 18, retainerDate: '12/14/2023', endDate: '12/14/2023' }} dentalData={{ status: 'Tracking', date: '12/14/2023' }} orderData={{ status: 'Delivered', date: '12/14/2023' }} />);
        await act(async () => {
            user.click(screen.getByTestId('infoEdit'))
        });
        await act(async () => {
            user.click(screen.getByTestId('infoArchive'))
        });
    })
    //Records
    it("Should render page of records correctly", () => {
        const testData = {
            isEdit: true,
        }
        renderWithRouter(<Records {...testData} />);
        expect(screen.getAllByText('Records').length).toBe(1);
        expect(screen.getByTestId('upper')).toBeInTheDocument();
        expect(screen.getByTestId('lower')).toBeInTheDocument();
        expect(screen.getByTestId('other')).toBeInTheDocument();
        expect(screen.getByTestId('anterior')).toBeInTheDocument();
        expect(screen.getByTestId('xRay')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it("Should display and click the image to view the large view correctly, and close the large view correctly", async () => {
        const testData = {
            isEdit: true,
            upper: testPng,
        }
        const { user } = renderWithRouter(<Records {...testData} />);
        await act(async () => {
            user.click(screen.getByTestId('upper'));
        });
        expect(screen.getByTestId('imageView')).toBeInTheDocument();
        await act(async () => {
            user.click(screen.getByTestId('removeContent'));
        });
        expect(screen.queryByTestId('imageView')).not.toBeInTheDocument();
    });
    it("Should click the Upload new record to run function correctly", async () => {
        const testData = {
            isEdit: true,
        }
        const { user } = renderWithRouter(<Records {...testData} />);
        await act(async () => {
            user.click(screen.getByRole('button'));
        });
    });
    //Records
    it("Should render page of Treatment Plan correctly", () => {
        const testData = {
            isEdit: true,
        }
        renderWithRouter(<Treatment stages={18} retainerDate={'12/14/2023'} endDate={'12/14/2023'} />);
        expect(screen.getByText('18')).toBeInTheDocument();
        expect(screen.getAllByText('12/14/2023').length).toBe(2);
    });
    //Dental monitoring
    it("Should render page of Dental monitoring correctly", () => {
        const testData = {
            isEdit: true,
        }
        renderWithRouter(<Monitoring status={'Tracking'} date={'12/14/2023'} />);
        expect(screen.getByText('Tracking')).toBeInTheDocument();
        expect(screen.getAllByText('12/14/2023').length).toBe(1);
    });
    //Dental monitoring
    it("Should render page of Order Plan correctly", () => {
        const testData = {
            isEdit: true,
        }
        renderWithRouter(<Order status={'Tracking'} date={'12/14/2023'} />);
        expect(screen.getByText('Tracking')).toBeInTheDocument();
        expect(screen.getAllByText('12/14/2023').length).toBe(1);
    });
    afterEach(cleanup);
})