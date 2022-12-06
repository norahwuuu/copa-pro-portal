

import CFilter from "@/pages/Patient/List/components/CTable/cFilter";
import { ITableFilter } from "@/pages/Patient/List/components/CTable/table";
import { TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";
import { getDefaultFilter } from "@/_tests_/util/help";
import { cleanup, screen, act } from "@testing-library/react";
import React, { ReactElement } from "react"
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


const tableFilterProps: ITableFilter = {
    filter: TABLE_FILTER.case_detail, filters: getDefaultFilter(), updateFilters: jest.fn()
}

const element = (tableFilterProps: ITableFilter): ReactElement => {
    return <CFilter filter={tableFilterProps.filter} filters={tableFilterProps.filters} updateFilters={tableFilterProps.updateFilters} />
}


describe("Component Patient Table Filter", () => {

    it("Should check patient table  filter component rendered", () => {
        tableFilterProps.filter = TABLE_FILTER.order_status
        renderWithWrapper(element(tableFilterProps), {})
        expect(screen.getByText(tableFilterProps.filter.translateKey)).toBeInTheDocument();
    })
    it("Should check able to open filter ", async () => {
        const { user } = renderWithWrapper(element(tableFilterProps), {})
        act(() => {
            user.click(screen.getByText(tableFilterProps.filter.translateKey))
        })
        expect(screen.getByText(tableFilterProps.filter.options[0].text)).toBeInTheDocument();
    })

    it("Should check able to select filter option ", () => {
        tableFilterProps.filter = TABLE_FILTER.order_status
        const { user } = renderWithWrapper(element(tableFilterProps), {})
        const option = tableFilterProps.filter.options[1];
        act(() => {
            user.click(screen.getByText(tableFilterProps.filter.translateKey))
        })

        expect(screen.getByText(option.text)).toBeInTheDocument();

        act(() => {
            user.click(screen.getByTestId(option.id))

        })
        expect(screen.getByTestId(option.id)).toBeChecked();
    })

    it("Should check able to select/unselect all  option ", () => {
        tableFilterProps.filter = TABLE_FILTER.case_detail
        const { user } = renderWithWrapper(element(tableFilterProps), {})
        const option = tableFilterProps.filter.options[0];

        act(() => {
            user.click(screen.getByText(tableFilterProps.filter.translateKey))
        })

        expect(screen.getByText(option.text)).toBeInTheDocument();
        //Select all
        act(() => {
            user.click(screen.getByTestId(option.id))

        })
        expect(screen.getByTestId(option.id)).toBeChecked();
        expect(tableFilterProps.filters[tableFilterProps.filter.id].length).toBe(tableFilterProps.filter.options.length);

        //un Select all
        act(() => {
            user.click(screen.getByTestId(option.id))

        })
        expect(tableFilterProps.filters[tableFilterProps.filter.id].length).toBe(0);
    })


    afterEach(cleanup);


});

describe("Component patient table sort", () => {
    it("Should check able to open sort ", async () => {
        tableFilterProps.filter = TABLE_FILTER.sort_by
        const { user } = renderWithWrapper(element(tableFilterProps), {})
        act(() => {
            user.click(screen.getByText(tableFilterProps.filter.translateKey))
        })
        expect(screen.getByText(tableFilterProps.filter.options[0].text)).toBeInTheDocument();
    })

    it("Should check checked delfault sort", async () => {
        tableFilterProps.filter = TABLE_FILTER.sort_by
        const { user } = renderWithWrapper(element(tableFilterProps), {})
        act(() => {
            user.click(screen.getByText(tableFilterProps.filter.translateKey))
        })
        expect(screen.getByText(tableFilterProps.filter.options[0].text)).toBeInTheDocument();
    })

    it("Should check able to change sort", async () => {
        tableFilterProps.filter = TABLE_FILTER.sort_by
        const option = tableFilterProps.filter.options[0];

        const { user } = renderWithWrapper(element(tableFilterProps), {})
        act(() => {
            user.click(screen.getByText(tableFilterProps.filter.translateKey))
        })
        const elem = screen.getByTestId(option.id);
        expect(elem.checked).toBeFalsy()

        act(() => {
            user.click(screen.getByTestId(tableFilterProps.filter.options[1].id))
        })
        expect(tableFilterProps.filters[tableFilterProps.filter.id].length).toBe(1);
        expect(tableFilterProps.filters[tableFilterProps.filter.id][0]).toBe(tableFilterProps.filter.options[1].id);

    })

    afterEach(cleanup);


});