import React from "react";
import Button from "@/components/Button/button";
import { Box, Container } from "@mui/material";
import { FC } from "react";
import { connect, history, useIntl } from "umi";
import { createPatientUrlObj } from "../Create/createPatient.route";
import CTable from "./components/CTable/cTable";
import { PatientListParams, PatientListProps } from "./type";


export const PatientList: FC<PatientListProps> = ({ patientListState, fetchPatients }) => {
  const translate = useIntl();

  const updatePatientList = ({ page = 0, rowsPerPage = 10, filters, search }: PatientListParams) => {
    fetchPatients({ page, rowsPerPage, filters, search })
  }

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
                btnLabel={translate.formatMessage({
                  id: "button.addNewPatient",
                })}
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
          <CTable tableProps={{ ...patientListState }} lists={patientListState.lists} updatePatientList={updatePatientList} />
        </Box>
      </Container>
    </>
  );
};



const mapStateToProps = (state) => ({ patientListState: state.patientListModal })
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPatients: (payload: PatientListParams) => dispatch({
      type: `patientListModal/fetchPatientList`,
      payload,
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList);

