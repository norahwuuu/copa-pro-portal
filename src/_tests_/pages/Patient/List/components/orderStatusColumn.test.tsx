import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'
import { IRow } from "@/pages/Patient/List/components/CTable/table";
import OrderStatusColumn from "@/pages/Patient/List/components/CTable/orderStatusColumn";
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

describe("Component patient table order status  column", () => {

    it("Should check patient table order status column rendered", () => {
        const rowObj: IRow = patientListMock[0]
        renderWithWrapper(<OrderStatusColumn row={rowObj} />, {})
        expect(screen.getByText(rowObj.orderSatus)).toBeInTheDocument()
    })

    it("Should check patient table order status column rendered by status", () => {

        let rowObj: IRow = patientListMock[7]

        renderWithWrapper(<OrderStatusColumn row={rowObj} />, {})
        expect(screen.getByText(rowObj.orderSatus)).toBeInTheDocument()

        rowObj = patientListMock[8]
        renderWithWrapper(<OrderStatusColumn row={rowObj} />, {})
        expect(screen.getByText(rowObj.orderSatus)).toBeInTheDocument()

        rowObj = patientListMock[9]
        renderWithWrapper(<OrderStatusColumn row={rowObj} />, {})
        expect(screen.getByText(rowObj.orderSatus)).toBeInTheDocument()

    })



    afterEach(cleanup);
});