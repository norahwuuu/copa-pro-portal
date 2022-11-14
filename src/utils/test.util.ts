import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: fireEvent,
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
