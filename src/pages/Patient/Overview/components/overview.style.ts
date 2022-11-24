import { Box, Grid, styled } from "@mui/material";
export const AdaptionBox = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    height: "125px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "140px",
  },
}));
export const AdaptionUpperBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    padding: "10px 0 0 20px",
    height: "44px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "12px 0 0 30px",
  },
}));
export const AdaptionLowerBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    padding: "15px 0 0 20px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "24px 0 0 30px",
  },
}));
export const InfoLowerBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    padding: "0 0 0 0px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0 0 0 0px",
  },
}));
