import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'
import { IRow } from "@/pages/Patient/List/components/CTable/table";
import patientListMock from "../patientList.mock";
import PatientStatusColumn from "@/pages/Patient/List/components/CTable/patientStatusColumn";

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

const element = (row: IRow) => {
    return <PatientStatusColumn row={row} dataKey={'status'} />
}

describe("Component patient table patient  column", () => {

    it("Should check patient table patient column rendered", () => {
        const rowObj: IRow = patientListMock[0]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.status)).toBeInTheDocument()
    })

    it("Should check patient table patient column rendered by status", () => {
        let rowObj: IRow = patientListMock[1]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.status)).toBeInTheDocument()

        rowObj = patientListMock[3]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.status)).toBeInTheDocument()

        rowObj = patientListMock[4]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.status)).toBeInTheDocument()

        rowObj = patientListMock[5]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.status)).toBeInTheDocument()

        rowObj = patientListMock[7]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.status)).toBeInTheDocument()

    })



    afterEach(cleanup);
});