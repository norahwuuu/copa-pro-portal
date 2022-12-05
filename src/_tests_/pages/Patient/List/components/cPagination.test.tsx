

import CPagination from "@/pages/Patient/List/components/CTable/cPagination";
import { IPaginationProps } from "@/pages/Patient/List/components/CTable/table";
import { cleanup, screen } from "@testing-library/react";
import React, { ReactElement } from "react"
import { act } from "react-dom/test-utils";
import { renderWithWrapper } from '../../../../util/test';

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

const props: IPaginationProps = {
    rowsPerPage: 10,
    page: 0,
    updatePage: jest.fn(),
    totalRecords: 15
}

const element = (props: IPaginationProps): ReactElement => {
    return <CPagination rowsPerPage={props.rowsPerPage} page={props.page} updatePage={props.updatePage} totalRecords={props.totalRecords} />
}

describe("Component Patient Table Pagination", () => {
    it("Should check patient table pagination", () => {
        renderWithWrapper(element(props), {})
        expect(screen.getByText(`Show ${1} of ${10} entries out of 15`)).toBeInTheDocument();
    })
    it("Should check patient table pagination informtaion by page ", () => {
        props.page = 1
        renderWithWrapper(element(props), {})
        expect(screen.getByText(`Show ${11} of ${15} entries out of 15`)).toBeInTheDocument();
    })
    it("Should check able to change patient table pagination   ", () => {
        props.page = 0
        props.updatePage = (page: number) => page;
        const { user } = renderWithWrapper(element(props), {})
        expect(screen.getByText(`Show ${1} of ${10} entries out of 15`)).toBeInTheDocument();
        expect(screen.getByText('nextPagination')).toBeEnabled();
        act(() => {
            user.click(screen.getByText(/nextPagination/).parentElement as HTMLButtonElement)
            props.page = 1
            renderWithWrapper(element(props), {})
        })
        expect(screen.getByText(`Show ${11} of ${15} entries out of 15`)).toBeInTheDocument();
    })
    afterEach(cleanup);
});