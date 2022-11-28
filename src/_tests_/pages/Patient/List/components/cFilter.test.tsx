

import CFilter from "@/pages/Patient/List/components/CTable/cFilter";
import { IFilter } from "@/pages/Patient/List/components/CTable/table";
import { TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";
import { cleanup, screen, act } from "@testing-library/react";
import React from "react"
import { renderWithWrapper } from '../../../../util/test';


describe("Component Patient Table Filter", () => {
    const filterObj: IFilter = TABLE_FILTER.caseDetails

    it("Should check patient table  filter component rendered", () => {
        renderWithWrapper(<CFilter filter={filterObj} />, {})
        expect(screen.getByText(filterObj.name)).toBeInTheDocument();
    })
    it("Should check able to open filter ", async () => {
        const { user } = renderWithWrapper(<CFilter filter={filterObj} />, {})
        act(() => {
            user.click(screen.getByText(filterObj.name))
        })
        expect(screen.getByText(filterObj.options[0].text)).toBeInTheDocument();
    })

    afterEach(cleanup);


});