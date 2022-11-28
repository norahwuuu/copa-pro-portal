import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'
import { IRow } from "@/pages/Patient/List/components/CTable/table";
import patientListMock from "../patientList.mock";
import PatientStatusColumn from "@/pages/Patient/List/components/CTable/patientStatusColumn";
import { PATIENT_STATUS_CASE_MAP } from "@/pages/Patient/List/components/CTable/table.config";

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

const findPatientStatus = (obj: { [key: string]: string[] }, value: string) => {
    return Object.keys(obj).find((key) => obj[key].includes(value));
};

describe("Component patient table patient  column", () => {

    it("Should check patient table patient column rendered", () => {
        const rowObj: IRow = patientListMock[0]
        const status = findPatientStatus(PATIENT_STATUS_CASE_MAP, rowObj.caseDetails)
        renderWithWrapper(<PatientStatusColumn row={rowObj} />, {})
        expect(screen.getByText(status)).toBeInTheDocument()
    })

    it("Should check patient table patient column rendered by status", () => {
        let rowObj: IRow = patientListMock[1]
        let status = findPatientStatus(PATIENT_STATUS_CASE_MAP, rowObj.caseDetails)
        renderWithWrapper(<PatientStatusColumn row={rowObj} />, {})
        expect(screen.getByText(status)).toBeInTheDocument()

        rowObj = patientListMock[3]
        status = findPatientStatus(PATIENT_STATUS_CASE_MAP, rowObj.caseDetails)
        renderWithWrapper(<PatientStatusColumn row={rowObj} />, {})
        expect(screen.getByText(status)).toBeInTheDocument()

        rowObj = patientListMock[4]
        status = findPatientStatus(PATIENT_STATUS_CASE_MAP, rowObj.caseDetails)
        renderWithWrapper(<PatientStatusColumn row={rowObj} />, {})
        expect(screen.getByText(status)).toBeInTheDocument()
    })



    afterEach(cleanup);
});