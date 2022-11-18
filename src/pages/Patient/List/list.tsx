import Button from "@/components/Button/button";
import { Box, Container } from "@mui/material";
import { FC } from "react";
import { history } from "umi";
import { createPatientUrlObj } from "../Create/createPatient.route";
import CTable from "./components/CTable/cTable";

const PatientList: FC = () => {
  return (
    <>
      <Container disableGutters maxWidth={"lg"}>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                my: 1,
              }}
            >
              <Button
                variant={"contained"}
                btnLabel={"Add a new patient"}
                onClickHandler={() =>
                  history.push(createPatientUrlObj.createPatientInformation)
                }
              />
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                my: 1,
              }}
            ></Box>
          </Box>
          <CTable />
        </Box>
      </Container>
    </>
  );
};

export default PatientList;
