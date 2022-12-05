

import CCell from "@/pages/Patient/List/components/CTable/cCell";
import { IColumn, IRow } from "@/pages/Patient/List/components/CTable/table";
import { tableData } from "@/pages/Patient/List/components/CTable/table.config";
import { cleanup, screen } from "@testing-library/react";
import React from "react"
import { renderWithWrapper } from '../../../../util/test';
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

const element = (column: IColumn, row: IRow, isLoading: boolean) => {
    return <CCell column={column} row={row} isLoading={isLoading} />
}

describe("Component Patient Table Cell", () => {
    const rowObj: IRow = patientListMock[0];
    let columnObj: IColumn = tableData.columnDef[0];


    it("Should check patient table cell component rendered", () => {
        renderWithWrapper(element(columnObj, rowObj, false), {})
        expect(screen.getByText(rowObj.last_name)).toBeInTheDocument();
    })

    it("Should check patient table cell component rendered wit Skeleton", () => {
        renderWithWrapper(element(columnObj, rowObj, true), {})
        expect(screen.getByTestId("skeleton")).toBeInTheDocument();
    })

    it("Should check case details cell component rendered", () => {
        columnObj = tableData.columnDef[4];
        renderWithWrapper(element(columnObj, rowObj, false), {})
        expect(screen.getByText(rowObj.case_detail)).toBeInTheDocument();
    })

    it("Should check order cell component rendered", () => {
        columnObj = tableData.columnDef[5];
        renderWithWrapper(element(columnObj, rowObj, false), {})
        expect(screen.getByText(rowObj.order_status)).toBeInTheDocument();
    })

    it("Should check dental monitoring cell component rendered", () => {
        columnObj = tableData.columnDef[6];
        renderWithWrapper(element(columnObj, rowObj, false), {})
        expect(screen.getByText(rowObj.dental_monitoring)).toBeInTheDocument();
    })

    afterEach(cleanup);


});