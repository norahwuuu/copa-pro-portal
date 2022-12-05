import { createPatientUrlObj } from "@/pages/Patient/Create/createPatient.route";
import { PatientList } from "@/pages/Patient/List/list";
import { act, cleanup, screen } from "@testing-library/react";
import { history } from "umi";
import React, { ReactElement } from "react"
import { renderWithWrapper } from "@/_tests_/util/test";
import { PatientListProps } from "@/pages/Patient/List/type";
import patientListMock from "./patientList.mock";
import { getDefaultFilter } from "@/_tests_/util/help";

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

const element = (patientListProps: PatientListProps): ReactElement => {
    return <PatientList patientListState={patientListProps.patientListState} fetchPatients={patientListProps.fetchPatients} updateFilter={patientListProps.updateFilter} resetFilter={patientListProps.resetFilter} />
}

const patientListProps: PatientListProps = {
    patientListState: {
        lists: patientListMock,
        resultType: 'records',
        totalRecords: 15,
        filters: getDefaultFilter()
    },
    fetchPatients: jest.fn(),
    updateFilter: jest.fn(),
    resetFilter: jest.fn()
}

describe("Page Patient List", () => {

    it("Should check patient list component rendered", () => {
        renderWithWrapper(element(patientListProps), {});
        expect(screen.getByText(/button.addNewPatient/)).toBeInTheDocument();
    });
    it("Should check able to redirect add new patient", () => {
        const { user } = renderWithWrapper(element(patientListProps), {});
        act(() => {
            user.click(screen.getByText(/button.addNewPatient/));
        });
        expect(history.push).toHaveBeenCalledWith(
            createPatientUrlObj.createPatientInformation
        );
    });
    afterEach(cleanup);
});