import Button from "@/components/Button/button";
import { Box, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { FC, useState } from "react";
import { history } from "umi";
import { createPatientUrlObj } from "../Create/createPatient.route";
import CTable from "./components/CTable/cTable";

const PatientList: FC = () => {
  const [tablevalue, setTablevalue] = useState("records"); // TOBE remove once API integarion Done

  // TOBE remove once API integarion Done
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTablevalue((event.target as HTMLInputElement).value);
  };

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
              <Box component={"div"}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={tablevalue}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="records" control={<Radio />} label="Data" />
                    <FormControlLabel
                      value="norecords"
                      control={<Radio />}
                      label="Empty"
                    />
                    <FormControlLabel
                      value="filterempty"
                      control={<Radio />}
                      label="No search result"
                    />
                    <FormControlLabel
                      value="filtering"
                      control={<Radio />}
                      label="Loading skeleton"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>

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
          <CTable tableAction={tablevalue} />
        </Box>
      </Container>
    </>
  );
};

export default PatientList;
