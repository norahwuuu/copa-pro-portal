

import CFilter from "@/pages/Patient/List/components/CTable/cFilter";
import { IFilter } from "@/pages/Patient/List/components/CTable/table";
import { TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";
import { cleanup, screen, act } from "@testing-library/react";
import React from "react"
import { renderWithWrapper } from '../../../../util/test';


describe("Component Patient Table Filter", () => {
    const filterObj: IFilter = TABLE_FILTER.caseDetails
    const element = <CFilter filter={filterObj} filters={{}} updateFilters={jest.fn()} />

    it("Should check patient table  filter component rendered", () => {
        renderWithWrapper(element, {})
        expect(screen.getByText(filterObj.name)).toBeInTheDocument();
    })
    it("Should check able to open filter ", async () => {
        const { user } = renderWithWrapper(element, {})
        act(() => {
            user.click(screen.getByText(filterObj.name))
        })
        expect(screen.getByText(filterObj.options[0].text)).toBeInTheDocument();
    })


    afterEach(cleanup);


});

describe("Component patient table sort", () => {
    const filterObj: IFilter = TABLE_FILTER.sortBy
    const element = <CFilter filter={filterObj} filters={{}} updateFilters={jest.fn()} />


    it("Should check able to open sort ", async () => {
        const { user } = renderWithWrapper(element, {})
        act(() => {
            user.click(screen.getByText(filterObj.name))
        })
        expect(screen.getByText(filterObj.options[0].text)).toBeInTheDocument();
    })

    it("Should check checked delfault sort", async () => {
        const { user } = renderWithWrapper(element, {})
        act(() => {
            user.click(screen.getByText(filterObj.name))
        })
        expect(screen.getByText(filterObj.options[0].text)).toBeInTheDocument();
    })

    afterEach(cleanup);


});