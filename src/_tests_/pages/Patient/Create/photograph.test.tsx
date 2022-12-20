import { act, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { ReactElement } from "react"
import { renderWithWrapper } from "@/_tests_/util/test";
import { PatientRadiographProps } from "@/pages/Patient/Create/Photograph/type";
import { PatientPhotograph } from "@/pages/Patient/Create/Photograph/photograph";

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
        },
        connect: () => (component) => {
            return { WrappedComponent: component };
        },
    };
}
jest.mock("umi", () => mockUmi());

const element = (patientRadiographProps: PatientRadiographProps): ReactElement => {
    return <PatientPhotograph patientRadiographState={patientRadiographProps.patientRadiographState} updatePatientRadiograph={patientRadiographProps.updatePatientRadiograph} />
}

const patientRadiographProps: PatientRadiographProps = {
    patientRadiographState: {
        panorex: "",
        full_face: "",
        retracted_smile: ""
    },
    updatePatientRadiograph: jest.fn((payload) => payload),
}

describe("Page Radiograph & photograph", () => {

    it("Should check patient Radiograph component rendered", () => {
        renderWithWrapper(element(patientRadiographProps), {});
        expect(screen.getByText(/radiograph.title/)).toBeInTheDocument();
    });

    it("Should show error if panorex not uploade", () => {
        const { user } = renderWithWrapper(element(patientRadiographProps), {});
        act(() => {
            user.click(screen.getByText(/btnNext/))
        })
        expect(screen.getByText(/radiograph.panorex.required/)).toBeInTheDocument();
    });

    it("Should check able to upload panorex image", async () => {
        global.URL.createObjectURL = jest.fn(() => 'image');
        renderWithWrapper(element(patientRadiographProps), {});
        const testImageFile = new File(["hello"], 'image.png', {
            type: 'image/png',
        });
        const fileInput = screen.getByTestId("panorex");
        await userEvent.upload(fileInput, testImageFile)
        expect(fileInput.files.length).toBe(1);
    });

    it("Should check  should not allow to upload unsupported ", async () => {
        global.URL.createObjectURL = jest.fn(() => 'image');
        const { user } = renderWithWrapper(element(patientRadiographProps), {});
        const testImageFile = new File(["hello"], 'image.json', {
            type: 'application/json',
        });
        const fileInput = screen.getByTestId("panorex");
        await userEvent.upload(fileInput, testImageFile)
        expect(fileInput.files.length).toBe(0);
    });

    it("Should check able to upload full face and retracted smile   image", async () => {
        global.URL.createObjectURL = jest.fn(() => 'image');
        const { user } = renderWithWrapper(element(patientRadiographProps), {});

        act(() => {
            user.click(screen.getByText(/btnNext/))
        })
        expect(screen.getByText(/radiograph.panorex.required/)).toBeInTheDocument()
        const testImageFile = new File(["hello"], 'image.png', {
            type: 'image/png',
        });

        const panorexInput = screen.getByTestId("panorex");
        await userEvent.upload(panorexInput, testImageFile)
        expect(panorexInput.files.length).toBe(1);

        const fullfaceInput = screen.getByTestId("fullface");
        await userEvent.upload(fullfaceInput, testImageFile)
        expect(fullfaceInput.files.length).toBe(1);

        const retractedsmileInput = screen.getByTestId("retractedsmile");
        await userEvent.upload(retractedsmileInput, testImageFile)
        expect(retractedsmileInput.files.length).toBe(1);

        act(() => {
            user.click(screen.getByText(/btnNext/))
        })
        expect(screen.getAllByText(/image.png/).length).toBe(3)
    });

    afterEach(cleanup);
});