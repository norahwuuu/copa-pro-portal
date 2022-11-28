import CPaginationAction from "@/pages/Patient/List/components/CTable/cPaginationAction";
import { ITablePaginationActionsProps } from "@/pages/Patient/List/components/CTable/table";
import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'

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

describe("Component Patient Table Pagination action", () => {
    it("Should check patient table filtered options rendered", () => {
        const props: ITablePaginationActionsProps = {
            count: 15,
            rowsPerPage: 10,
            onPageChange: () => jest.fn(),
        }
        renderWithWrapper(<CPaginationAction count={props.count} rowsPerPage={props.rowsPerPage} onPageChange={props.onPageChange} />, {})
        expect(screen.getByText('previousPagination')).toBeDisabled()
        expect(screen.getByText(1)).toBeInTheDocument();
        expect(screen.getByText(2)).toBeInTheDocument();
        expect(screen.getByText('nextPagination')).toBeEnabled();
    })

    afterEach(cleanup);
});