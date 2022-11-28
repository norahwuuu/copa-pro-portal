import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React from 'react'
import CSearch from "@/pages/Patient/List/components/CTable/cSearch";

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

        renderWithWrapper(<CSearch />, {})
        expect(screen.getByLabelText(/Search/)).toBeInTheDocument()
    })

    afterEach(cleanup);
});