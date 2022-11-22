const AlignProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const ColumnCenterAlign = {
  ...AlignProps,
  flexDirection: "column",
};

export const RowCenterAlign = {
  ...AlignProps,
  flexDirection: "row",
};

export const Breakpoints = {
  xs: 0,
  sm: 600,
  md: 1280,
  lg: 1366,
  xl: 1920,
};
