

import CPagination from "@/pages/Patient/List/components/CTable/cPagination";
import { IPaginationProps } from "@/pages/Patient/List/components/CTable/table";
import { cleanup, screen } from "@testing-library/react";
import React from "react"
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

describe("Component Patient Table Pagination", () => {
    it("Should check patient table pagination", () => {
        const props: IPaginationProps = {
            rowsPerPage: 10,
            page: 0,
            updatePage: (page) => page,
            totalRecords: 15
        }
        renderWithWrapper(<CPagination rowsPerPage={props.rowsPerPage} page={props.page} updatePage={props.updatePage} totalRecords={props.totalRecords} />, {})
        expect(screen.getByText(`Show ${1} of ${10} entries out of 15`)).toBeInTheDocument();
    })
    it("Should check patient table pagination informtaion by page ", () => {
        const props: IPaginationProps = {
            rowsPerPage: 10,
            page: 1,
            updatePage: (page) => page,
            totalRecords: 15
        }
        renderWithWrapper(<CPagination rowsPerPage={props.rowsPerPage} page={props.page} updatePage={props.updatePage} totalRecords={props.totalRecords} />, {})
        expect(screen.getByText(`Show ${11} of ${15} entries out of 15`)).toBeInTheDocument();
    })
    afterEach(cleanup);
});