import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import { FC } from "react";

interface ShadowBoxProps {
  children: React.ReactNode;
  sxProp?: SxProps<Theme>;
}

const ShadowBox: FC<ShadowBoxProps> = ({ children, sxProp }) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        border: "1px solid #EEEEEE",
        borderRadius: "4px",
        ...sxProp,
      }}
    >
      {children}
    </Box>
  );
};

export default ShadowBox;
