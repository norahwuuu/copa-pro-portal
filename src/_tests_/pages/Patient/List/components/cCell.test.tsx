

import CCell from "@/pages/Patient/List/components/CTable/cCell";
import { IColumn, IRow } from "@/pages/Patient/List/components/CTable/table";
import { tableData } from "@/pages/Patient/List/components/CTable/table.config";
import { cleanup, screen, act } from "@testing-library/react";
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


describe("Component Patient Table Cell", () => {
    const rowObj: IRow = patientListMock[0];
    let columnObj: IColumn = tableData.columnDef[0];


    it("Should check patient table cell component rendered", () => {
        renderWithWrapper(<CCell column={columnObj} row={rowObj} isLoading={false} />, {})
        expect(screen.getByText(rowObj.lastName)).toBeInTheDocument();
    })

    it("Should check patient table cell component rendered wit Skeleton", () => {
        renderWithWrapper(<CCell column={columnObj} row={rowObj} isLoading={true} />, {})
        expect(screen.getByTestId("skeleton")).toBeInTheDocument();
    })

    it("Should check case details cell component rendered", () => {
        columnObj = tableData.columnDef[4];
        renderWithWrapper(<CCell column={columnObj} row={rowObj} isLoading={false} />, {})
        expect(screen.getByText(rowObj.caseDetails)).toBeInTheDocument();
    })

    it("Should check order cell component rendered", () => {
        columnObj = tableData.columnDef[5];
        renderWithWrapper(<CCell column={columnObj} row={rowObj} isLoading={false} />, {})
        expect(screen.getByText(rowObj.orderSatus)).toBeInTheDocument();
    })

    it("Should check dental monitoring cell component rendered", () => {
        columnObj = tableData.columnDef[6];
        renderWithWrapper(<CCell column={columnObj} row={rowObj} isLoading={false} />, {})
        expect(screen.getByText(rowObj.dentalMonitoring)).toBeInTheDocument();
    })

    afterEach(cleanup);


});