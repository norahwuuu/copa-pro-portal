import { act, cleanup, screen } from "@testing-library/react";
import React, { ReactElement } from "react"
import { renderWithWrapper } from "@/_tests_/util/test";
import { IImageBoxProps } from "@/pages/Patient/Create/Photograph/type";
import ImageBox from "@/pages/Patient/Create/Photograph/components/imageBox";

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

const element = (imageBoxProps: IImageBoxProps): ReactElement => {
    return <ImageBox id={imageBoxProps.id} title={imageBoxProps.title} imgBoxSxProps={imageBoxProps.imgBoxSxProps} imgPath={imageBoxProps.imgPath} updateImagePath={imageBoxProps.updateImagePath} />
}

const imageBoxProps: IImageBoxProps = {
    id: "panorex",
    title: "panorex",
    imgBoxSxProps: {
        objectFit: "contain",
        width: "178px",
        height: "237px"
    },
    imgPath: "",
    updateImagePath: jest.fn(),
}

describe("Page Radiograph & photograph", () => {

    it("Should check patient Radiograph component rendered", async () => {
        global.URL.createObjectURL = jest.fn(() => 'image');
        const { user } = renderWithWrapper(element(imageBoxProps), {});
        const testImageFile = new File(["hello"], 'image.png', {
            type: 'image/png',
        });
        const panorexInput = screen.getByTestId("box-panorex");

        act(() => {
            user.dragEnter(panorexInput)
        })
        const droppingBox = screen.getByTestId("drop-panorex");

        expect(droppingBox).toBeInTheDocument()

        act(() => {
            user.drop(droppingBox, {
                dataTransfer: {
                    files: [testImageFile],
                },
            })
        })

        expect(screen.getByText(/image.png/)).toBeInTheDocument();
    });


    afterEach(cleanup);
});