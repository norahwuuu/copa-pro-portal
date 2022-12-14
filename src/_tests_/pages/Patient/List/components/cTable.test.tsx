import CTable from "@/pages/Patient/List/components/CTable/cTable";
import { cleanup, screen } from "@testing-library/react";
import React, { ReactElement } from "react"
import useWindowSize from "@/hooks/useWindowSize";
import CFilter from "@/pages/Patient/List/components/CTable/cFilter";
import CFilteredChips from "@/pages/Patient/List/components/CTable/cFilteredChips";
import CSearch from "@/pages/Patient/List/components/CTable/cSearch";
import CPagination from "@/pages/Patient/List/components/CTable/cPagination";
import { tableData } from "@/pages/Patient/List/components/CTable/table.config";
import CCell from "@/pages/Patient/List/components/CTable/cCell";
import { renderWithWrapper } from '../../../../util/test';
import patientListMock from "../patientList.mock";
import { ITableParams } from "@/pages/Patient/List/components/CTable/table";

jest.mock("@/hooks/useWindowSize");
jest.mock("@/pages/Patient/List/components/CTable/cSearch");
jest.mock("@/pages/Patient/List/components/CTable/cFilter");
jest.mock("@/pages/Patient/List/components/CTable/cFilteredChips");
jest.mock("@/pages/Patient/List/components/CTable/CPagination");
jest.mock("@/pages/Patient/List/components/CTable/cCell");


(CFilter as jest.Mock).mockReturnValue(<div data-testid="patient_filter" />);
(CSearch as jest.Mock).mockReturnValue(<div data-testid="patient_search" />);
(CFilteredChips as jest.Mock).mockReturnValue(<div data-testid="patient_filter_chips" />);
(CPagination as jest.Mock).mockReturnValue(<div data-testid="patient_pagination_id" />);
(CCell as jest.Mock).mockReturnValue(<div data-testid="patient_table_row_cell" />);


(useWindowSize as jest.Mock).mockReturnValue(() => {
    return () => {
        0
        0
        "xs"
    };
});

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

function mockReact() {
    const original = jest.requireActual("react");
    return {
        ...original,
        useRef: () => {
            return {
                current: {
                    clientWidth: 100,
                    clientHeight: 100
                }
            };
        },
    };
}
jest.mock("react", () => mockReact());

const obj: ITableParams = {
    lists: patientListMock,
    updatePatientList: jest.fn(),
    tableProps: {
        resultType: "records",
        totalRecords: patientListMock.length,
    }
}

const element = (params: ITableParams): ReactElement => {
    return <CTable tableProps={params.tableProps} lists={params.lists} updatePatientList={params.updatePatientList} />
}

describe("Component Patient Table", () => {

    it("Should check patient table component rendered", () => {
        renderWithWrapper(element(obj), {})
        expect(screen.getByTestId("patient_search")).toBeInTheDocument();
        expect(screen.getByTestId("patient_filter_chips")).toBeInTheDocument();
        expect(screen.getAllByTestId("patient_filter")).toBeTruthy()
        expect(screen.getByTestId("patient_pagination_id")).toBeInTheDocument()
        expect(screen.getAllByTestId("patient_filter")).toBeTruthy()


    });
    it("Should check patient table header render", () => {
        renderWithWrapper(element(obj), {})
        tableData.columnDef.map((col) => {
            expect(screen.getByText(col.translate)).toBeInTheDocument()
        })

    });
    it("Should check patient table render if 'no patients '", () => {
        obj.tableProps.resultType = "noRecords";
        obj.tableProps.totalRecords = 0;
        obj.lists = [];
        renderWithWrapper(element(obj), {})
        expect(screen.getByText("noPatients")).toBeInTheDocument()

    });

    it("Should check patient table render if 'search result is empty '", () => {
        obj.tableProps.resultType = "filterEmpty";
        obj.tableProps.totalRecords = 0;
        obj.lists = [];
        renderWithWrapper(element(obj), {})
        expect(screen.getByText("patientSearchResultsEmpty")).toBeInTheDocument()

    });

    afterEach(cleanup);
});