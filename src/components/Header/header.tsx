import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import Text from "../Text/text";

const HEADER: FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Logo here
          </Typography>
          <Text variant="h6" color="inherit" sxProp={{ flexGrow: 1 }}>
            Patients
          </Text>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HEADER;
