import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'
import { IRow } from "@/pages/Patient/List/components/CTable/table";
import CaseDeatilsColumn from "@/pages/Patient/List/components/CTable/caseDeatilsColumn";
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

const element = (row: IRow) => {
    return <CaseDeatilsColumn row={row} dataKey={'case_detail'} />
}

describe("Component patient table case details column", () => {

    it("Should check patient table case details column rendered", () => {
        const rowObj: IRow = patientListMock[0]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()
    })

    it("Should check patient table case details column rendered by status", () => {
        let rowObj: IRow = patientListMock[1]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()

        rowObj = patientListMock[2]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()

        rowObj = patientListMock[3]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()
        rowObj = patientListMock[4]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()
        rowObj = patientListMock[5]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()
        rowObj = patientListMock[6]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()

        rowObj = patientListMock[12]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()
        rowObj = patientListMock[13]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()
        rowObj = patientListMock[14]
        renderWithWrapper(element(rowObj), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument()

    })

    afterEach(cleanup);
});