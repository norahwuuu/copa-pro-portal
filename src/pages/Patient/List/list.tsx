import React from "react";
import Button from "@/components/Button/button";
import { Box, Container } from "@mui/material";
import { FC } from "react";
import { connect, history, useIntl } from "umi";
import { createPatientUrlObj } from "../Create/createPatient.route";
import CTable from "./components/CTable/cTable";
import { PatientListParams, PatientListState } from "./type";

interface PatientListProps {
  patientListState: PatientListState;
  fetchPatients: (payload: PatientListParams) => void
}

const PatientList: FC<PatientListProps> = ({ patientListState, fetchPatients }) => {
  const translate = useIntl();

  const updatePatientList = ({ page = 0, rowsPerPage = 10 }: PatientListParams) => {
    fetchPatients({ page, rowsPerPage })
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
          <CTable tableAction={patientListState.resultType} lists={patientListState.lists} updatePatientList={updatePatientList} totalRecords={patientListState.totalRecords} />
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
    }),

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList);

