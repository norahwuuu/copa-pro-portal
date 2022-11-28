import React, { FC, ReactElement } from 'react'
import { fireEvent, render, RenderOptions } from '@testing-library/react'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../../theme/theme";

const AllTheProviders: FC<{ children: ReactElement }> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export const renderWithWrapper = (ui: ReactElement, options?: RenderOptions) => {
    return {
        user: fireEvent,
        ...render(ui, { wrapper: AllTheProviders, ...options })
    }
}
