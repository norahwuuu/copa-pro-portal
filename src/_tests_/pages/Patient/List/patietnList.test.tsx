import { createPatientUrlObj } from "@/pages/Patient/Create/createPatient.route";
import CTable from "@/pages/Patient/List/components/CTable/cTable";
import PatientList from "@/pages/Patient/List/list";
import { act, cleanup, screen } from "@testing-library/react";
import { history } from "umi";
import React from "react"
import { renderWithWrapper } from "@/_tests_/util/test";
import { PatientListProps } from "@/pages/Patient/List/type";
import patientListMock from "./patientList.mock";

jest.mock("@/pages/Patient/List/components/CTable/cTable");

(CTable as jest.Mock).mockReturnValue(<div data-testid="patient_table_id" />);


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
        },
        connect: () => (component) => {
            return { WrappedComponent: component };
        },
    };
}
jest.mock("umi", () => mockUmi());

xdescribe("Page Patient List", () => {
    const patientListProps: PatientListProps = {
        patientListState: {
            lists: patientListMock,
            resultType: 'records',
            totalRecords: 15
        },
        fetchPatients: jest.fn()
    }
    it("Should check patient list component rendered", () => {
        renderWithWrapper(<PatientList patientListState={patientListProps.patientListState} fetchPatients={patientListProps.fetchPatients} />, {});
        expect(screen.getByText(/button.addNewPatient/)).toBeInTheDocument();
    });
    it("Should check able to redirect add new patient", () => {
        const { user } = renderWithWrapper(<PatientList patientListState={patientListProps.patientListState} fetchPatients={patientListProps.fetchPatients} />, {});
        act(() => {
            user.click(screen.getByText(/button.addNewPatient/));
        });
        expect(history.push).toHaveBeenCalledWith(
            createPatientUrlObj.createPatientInformation
        );
    });
    afterEach(cleanup);
});