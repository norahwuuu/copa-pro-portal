

import CFilteredChips from "@/pages/Patient/List/components/CTable/cFilteredChips";
import { ITableFilterChips } from "@/pages/Patient/List/components/CTable/table";
import { TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";
import { getDefaultFilter } from "@/_tests_/util/help";
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

const tableFilterChipsProps: ITableFilterChips = {
    chips: getDefaultFilter(), resetFilter: jest.fn, updateFilters: jest.fn

}

const element = (tableFilterChipsProps: ITableFilterChips): ReactElement => {
    return <CFilteredChips chips={tableFilterChipsProps.chips} updateFilters={tableFilterChipsProps.updateFilters} resetFilter={tableFilterChipsProps.resetFilter} />
}



describe("Component Patient Table Filtered options", () => {
    tableFilterChipsProps.chips[TABLE_FILTER.orderStatus.id] = TABLE_FILTER.orderStatus.options.map((c) => c.id)

    it("Should check patient table filtered options rendered", () => {
        renderWithWrapper(element(tableFilterChipsProps), {})
        expect(screen.getByText(TABLE_FILTER.orderStatus.options[3].text)).toBeInTheDocument();
    })
    it("Should check able to remove filter option", () => {
        const { user } = renderWithWrapper(element(tableFilterChipsProps), {})
        expect(screen.getByText(TABLE_FILTER.orderStatus.options[3].text)).toBeInTheDocument();
        act(() => {
            user.click(screen.getByText(TABLE_FILTER.orderStatus.options[3].text))
        })
        expect(tableFilterChipsProps.chips[TABLE_FILTER.orderStatus.id].length).toBe(TABLE_FILTER.orderStatus.options.length - 2);

    })
    afterEach(cleanup);
});