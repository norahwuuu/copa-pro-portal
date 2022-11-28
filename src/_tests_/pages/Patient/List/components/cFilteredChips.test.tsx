

import CFilteredChips from "@/pages/Patient/List/components/CTable/cFilteredChips";
import { TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";
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

describe("Component Patient Table Filtered options", () => {
    it("Should check patient table filtered options rendered", () => {
        renderWithWrapper(<CFilteredChips />, {})
        expect(screen.getByText(TABLE_FILTER.patientStatus.options[3].text)).toBeInTheDocument();
    })
    afterEach(cleanup);
});