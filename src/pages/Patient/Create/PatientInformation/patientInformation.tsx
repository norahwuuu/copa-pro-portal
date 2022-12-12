import InputField, { emailRegex, LogTextField } from "@/components/InputField/inputField";
import Text from "@/components/Text/text";
import ShadowBox from "@/pages/Components/shadowBox";
import { errorTypes } from "@/pages/LoginBox/Login/column";
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, styled, useFormControl, useTheme } from "@mui/material";
import React from "react";
import { FC, useState } from "react";
import { AlertModelState, connect, useIntl } from "umi";
import { SelectBox } from "./patientInfo.style";
import { StateList } from "./state";

const Input = styled(LogTextField)`
  & .MuiOutlinedInput-root {
    width: 200px;
  }
  ,
  & .MuiInputBase-input {
    width: 200px;
  }

`;
const ShortInput = styled(LogTextField)`


,
  & .MuiOutlinedInput-root {
    width: 54px;
  }
  ,
  & .MuiInputBase-input {
    width: 54px;
  }
  & .MuiInputLabel-root{
     top:-6px;
     padding: 0 2px;
  }
  & .MuiFormLabel-filled
  {
    font-size: 10px; 
    transform: scale(0.83333); 
    transform-origin: 0 0;
    position: absolute;
    left: 9px;
  }
`;

const YyyInput = styled(LogTextField)`
  & .MuiOutlinedInput-root {
    width: 65px;
  }
  ,
  & .MuiInputBase-input {
    width: 63px;
  }
    & .MuiInputLabel-root{
     top:-6px;
     padding: 0;
     left:1px;
  }
`;

const PatientInformation: FC = () => {
  const theme = useTheme();
  const translate = useIntl();
  const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9-]+$/;
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailType, setEmailType] = useState<string>("noError");
  const [month, setmonth] = useState('')
  const [day, setday] = useState('')
  const [year, setyear] = useState('')
  const [phone, setphone] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");
  const [dateLabel, setdateLabel] = useState({
    IsMMOnFocus: false,
    IsDDOnFocus: false,
    IsYYYYOnfcus: false
  })
  const [state, setstate] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setstate(event.target.value as string);
  };
  const IsEmpty = (name: string, value: string) => {
    const errorWords = errorTypes[name] ? errorTypes[name].tip : 'Please enter wrords'
    if (value === '') {
      return errorWords
    }
    return ' '
  }
  const checkEmail = () => {
    if (email === "") {
      setEmailType && setEmailType("emailEmpty");
    } else if (!emailRegex(email || "")) {
      setEmailType && setEmailType("nonvalidEmail");
    } else {
      setEmailType && setEmailType("noError");
    }
  };
  return (
    <Grid item xs={12} xl={12}>
      <ShadowBox
        sxProp={{
          height: "372px",
          padding: "30px 0",
          paddingLeft: "30px",
          [theme.breakpoints.up("xl")]: { padding: "50px 0", paddingLeft: "50px", height: "408px" },
          flex: "1",
        }}
      >
        <Grid container height={"100%"}>
          {/*  //left */}
          <Grid item sm={6} >
            <Text color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", display: "block" }} variant="h5">
              {`${translate.formatMessage({
                id: "patient.Info",
              })}*`}
            </Text>

            <Box component="form" autoComplete="off">
              <Grid
                mt={"43px"}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: "100px" }}
              >
                <Grid item>
                  <Input
                    required
                    value={firstName}
                    onChange={(event) => {
                      const value = event.target.value;
                      if (value !== "" && !ALPHA_NUMERIC_DASH_REGEX.test(value)) {               //only letters
                        return;
                      }
                      setfirstName(value);
                    }}
                    label="First name "
                    type={"text"}
                    // error={firstName === ''}
                    helperText={' '}
                  />
                </Grid>
                <Grid item>
                  <Input
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      if (value !== "" && !ALPHA_NUMERIC_DASH_REGEX.test(value)) {  //only letters
                        return;
                      }
                      setlastName(value);
                    }}
                    // onChange={(v) => {
                    //   setverifyQustion("noError");
                    //   setverifyQustion(v.target.value);
                    // }}
                    // onFocus={() => {
                    //   setverifyQustionType("noError");
                    // }}
                    // onBlur={() => {
                    //   checkVerifyQustion();
                    // }}
                    helperText={""}
                    // inputType="default"
                    value={lastName}
                    // setInputValue={setverifyQustion}
                    // className={styles.inputContainer}
                    // errorType={verifyQustionType}
                    // setErrorType={setverifyQustionType}
                    type={"text"}
                    label="Last name "
                  />
                </Grid>
              </Grid>
              <Text
                sxProp={{
                  display: "block",
                  [theme.breakpoints.up("xl")]: { marginTop: '25px', },
                }}
                variant="body1"
                color={"gray.main"}


              >
                {`${translate.formatMessage({
                  id: "DateOfBirth",
                })}*`}
              </Text>
              <Grid
                container
                mt={2}
                columnSpacing={{ sm: 2, md: 2, lg: 2, xl: 2 }}
              >
                <Grid item>
                  <ShortInput
                    onChange={(event) => {
                      const value = event.target.value;
                      const regex = /^(0?[1-9]|1[0-2])$/
                      if (value === "" || regex.test(value)) {
                        setmonth(value);
                      }
                    }}
                    type="text"
                    onFocus={() => {
                      setdateLabel({ ...dateLabel, IsMMOnFocus: true })
                    }}
                    onBlur={() => {
                      setdateLabel({ ...dateLabel, IsMMOnFocus: false })
                    }}
                    label={(dateLabel.IsMMOnFocus || month) ? 'Month' : "MM"}
                    value={month} />
                </Grid>
                <Grid item>
                  <ShortInput
                    onChange={(event) => {

                      const value = event.target.value;
                      const regex = /^(0?[1-9]|[12][0-9]|3[01]    )$/
                      if (value === "" || regex.test(value)) {
                        setday(value);
                      }
                    }}
                    onFocus={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: true })
                    }}
                    onBlur={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: false })
                    }}
                    label={(dateLabel.IsDDOnFocus || day) !== '' ? 'Day' : "DD"}
                    value={day}
                    type={"text"}
                  />
                </Grid>
                <Grid item>
                  <YyyInput
                    onChange={(event) => {
                      const value = event.target.value;
                      const regex = /^\d{1,}$/
                      if (value === "" || regex.test(value)) {
                        setyear(value);
                      }
                    }}
                    onFocus={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: true })
                    }}
                    onBlur={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: false })
                    }}
                    label={(dateLabel.IsDDOnFocus || year) ? 'Year' : "YYYY"}

                    value={year} type={"text"} />
                </Grid>
              </Grid>

              <Grid
                mt={"41px"}
                sx={{
                  [theme.breakpoints.up("xl")]: { mt: "47px" },
                }}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: "100px" }}
              >
                <Grid item sx={{
                  ".MuiOutlinedInput-root": {
                    width: "200px !important"
                  },
                  ".MuiInputBase-input": {
                    width: "200px !important"
                  },
                  ".textBox___28X1D": {
                    width: "200px "
                  }

                }}>
                  <InputField
                    id="username"
                    inputType="email"
                    subLink={`${translate.formatMessage({ id: "forgotUser" })}`}
                    inputValue={email}
                    setInputValue={setEmail}
                    errorType={emailType}
                    setErrorType={setEmailType}
                    type={"text"}
                    name="Email"
                    label="Email*"

                  />
                </Grid>
                <Grid item>
                  <Input required value={phone} type={"text"} label="Cell phone " />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* right */}
          <Grid
            item
            sm={6}
            sx={{
              paddingLeft: "50px", borderLeft: "1px solid #CCCCCC",

            }}
          >
            <Text color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", display: "block" }} variant="h5">
              {`${translate.formatMessage({
                id: "patient.address",
              })}*`}
            </Text>

            <Box component="form" autoComplete="off">
              <Grid
                mt={"43px"}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: "232px" }}
              >
                <Grid item>
                  <Input value={address1} type={"text"} label="Address1" />
                </Grid>
                <Grid item>
                  <Input
                    // onChange={(v) => {
                    //   setverifyQustion("noError");
                    //   setverifyQustion(v.target.value);
                    // }}
                    // onFocus={() => {
                    //   setverifyQustionType("noError");
                    // }}
                    // onBlur={() => {
                    //   checkVerifyQustion();
                    // }}
                    // helperText={errorTypes[verifyQustionType].tip}
                    // inputType="default"
                    value={address2}
                    // setInputValue={setverifyQustion}
                    // className={styles.inputContainer}
                    // errorType={verifyQustionType}
                    // setErrorType={setverifyQustionType}
                    type={"text"}
                    label="Address2"
                  />
                </Grid>
              </Grid>
              <Grid
                mt={"45px"}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: "232px" }}
                sx={{
                  [theme.breakpoints.up("xl")]: { marginTop: '59px', },
                }}
              >
                <Grid item>
                  <Input value={city} type={"text"} label="City" />
                </Grid>
                <Grid item>
                  <Input value={zip} type={"text"} label="Zip" />
                </Grid>
              </Grid>

              <Grid
                mt={"48px"}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: "232px" }}
                sx={{
                  [theme.breakpoints.up("xl")]: { marginTop: '64px', },
                }}
              >
                <Grid item>
                  <SelectBox>
                    <FormControl sx={{ m: 0, minWidth: 200 }} disabled>
                      <InputLabel id="demo-simple-select-disabled-label">Country</InputLabel>
                      <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={'United States'}
                        label="Country"
                        renderValue={(value) => `${value}`}
                        sx={{
                          height: '36px',
                          'border-radius': "18px",
                          color: 'red'
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </SelectBox>

                </Grid>
                <Grid item >
                  <SelectBox sx={{
                    minWidth: 200,
                  }}>
                    <FormControl fullWidth >
                      <Select
                        sx={{
                          height: '36px',
                          'border-radius': "18px",

                        }}
                        displayEmpty
                        id="demo-simple-select"
                        value={state}
                        label="State"
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        inputProps={{ 'aria-label': 'Without label' }}

                      >
                        <MenuItem disabled value="">
                          Select option
                        </MenuItem>
                        {StateList.map(({ name, value }, index) => (
                          <MenuItem key={index} value={value}>{name}</MenuItem>
                        ))}

                      </Select>
                    </FormControl>
                  </SelectBox>

                </Grid>
              </Grid>
            </Box>
          </Grid>

        </Grid >
      </ShadowBox >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Button sx={{ marginRight: "30px" }}>Cancel</Button>
        <Button variant="contained">Next</Button>
      </Box>
    </Grid >
  );
};

export default connect(
  () => {
    return {

    };
  },
  (dispatch) => ({
    setAlert: (payload: AlertModelState) => {
      dispatch({
        type: `alert/setAlert`,
        payload,
      });
    },
  })
)(PatientInformation);
