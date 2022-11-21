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
  md: 900, //tablet
  lg: 1200, // desktop
  xl: 1536, // monitor
};
