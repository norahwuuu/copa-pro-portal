import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'
import { IRow } from "@/pages/Patient/List/components/CTable/table";
import DentalMonitoringStatus from "@/pages/Patient/List/components/CTable/dentalmonitoringStatus";
import patientListMock from "../patientList.mock";

function mockUmi() {
    const original = jest.requireActual("umi");
    return {
        ...original,
        useIntl: () => {
            return {
                formatMessage: (msg: { id: string }) => msg.id,
            };
        },
        history: {
            push: jest.fn(),
        }
    };
}
jest.mock("umi", () => mockUmi());

describe("Component patient table dental monitoring  column", () => {

    it("Should check patient table dental monitoring column rendered", () => {
        const rowObj: IRow = patientListMock[0]
        renderWithWrapper(<DentalMonitoringStatus row={rowObj} />, {})
        expect(screen.getByText(rowObj.dentalMonitoring)).toBeInTheDocument()
    })

    it("Should check patient table dental monitoring column rendered by status", () => {
        let rowObj: IRow = patientListMock[11]
        renderWithWrapper(<DentalMonitoringStatus row={rowObj} />, {})
        expect(screen.getByText(rowObj.dentalMonitoring)).toBeInTheDocument()

        rowObj = patientListMock[10]
        renderWithWrapper(<DentalMonitoringStatus row={rowObj} />, {})
        expect(screen.getByText(rowObj.dentalMonitoring)).toBeInTheDocument()

        rowObj = patientListMock[9]
        renderWithWrapper(<DentalMonitoringStatus row={rowObj} />, {})
        expect(screen.getByText(rowObj.dentalMonitoring)).toBeInTheDocument()
    })



    afterEach(cleanup);
});