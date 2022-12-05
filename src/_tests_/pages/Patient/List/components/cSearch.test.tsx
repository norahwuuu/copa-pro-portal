import { cleanup, screen } from "@testing-library/react";
import { renderWithWrapper } from '../../../../util/test';
import React, { SetStateAction } from 'react'
import CSearch from "@/pages/Patient/List/components/CTable/cSearch";
import { Dispatch } from "umi";

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

const element = (search: string, updateSearch?: Dispatch<SetStateAction<string>>) => {
    return <CSearch search={search} updateSearch={updateSearch} />
}

describe("Component Patient Table Filtered options", () => {
    it("Should check patient table filtered options rendered", () => {

        renderWithWrapper(element(""), {})
        expect(screen.getByLabelText(/Search/)).toBeInTheDocument()
    })

    afterEach(cleanup);
});