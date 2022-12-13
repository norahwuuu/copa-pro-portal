import InputField, {
  emailRegex,
  LogTextField,
} from "@/components/InputField/inputField";
import Text from "@/components/Text/text";
import ShadowBox from "@/pages/Components/shadowBox";
import { errorTips, errorTypes } from "@/pages/LoginBox/Login/column";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  styled,
  useTheme,
} from "@mui/material";
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
  & .MuiOutlinedInput-root {
    width: 54px;
  }
  ,
  & .MuiInputBase-input {
    width: 54px;
    font-size: 14px !important;
  }
  & .MuiInputLabel-root {
    padding: 0 2px;
  }
  & .MuiFormLabel-filled {
    font-size: 10px;
  }
  & .Mui-focused {
    font-size: 10px;
  }
`;

const YyyInput = styled(LogTextField)`
  & .MuiOutlinedInput-root {
    width: 65px;
  }
  ,
  & .MuiFormLabel-filled {
    font-size: 10px;
  }
  & .Mui-focused {
    font-size: 10px;
  }
  ,
  & .MuiInputBase-input {
    width: 63px;
    font-size: 14px !important;
  }
  & .MuiInputLabel-root {
    left: 1px;
    width: 100%;
    padding: 0;
  }
`;

const PatientInformation: FC = () => {
  const theme = useTheme();
  const translate = useIntl();
  const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9-]+$/;
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailType, setEmailType] = useState<string>(" ");
  const [month, setmonth] = useState("");
  const [day, setday] = useState("");
  const [year, setyear] = useState("");
  const [phone, setphone] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");
  const [dateLabel, setdateLabel] = useState({
    IsMMOnFocus: false,
    IsDDOnFocus: false,
    IsYYYYOnfcus: false,
  });
  const [state, setstate] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setstate(event.target.value as string);
  };
  const IsEmpty = (name: string, value: string) => {
    const errorWords = errorTypes[name]
      ? errorTypes[name].tip
      : "Please enter wrords";
    if (value === "") {
      return errorWords;
    }
    return " ";
  };
  const checkEmail = () => {
    if (email === "") {
      setEmailType && setEmailType("please enter Email");
    } else if (!emailRegex(email || "")) {
      setEmailType && setEmailType('Email must be a valid address.');
    } else {
      setEmailType && setEmailType(" ");
    }
  };
  return (
    <Grid item xs={12} xl={12} sx={{ width: '100%' }}>
      <ShadowBox
        sxProp={{
          height: "372px",
          padding: "30px 0",
          [theme.breakpoints.up("xl")]: {
            padding: "50px 0",
            height: "408px",
          },
          flex: "1",
        }}
      >
        <Grid container height={"100%"} sx={{ width: '100%', margin: "0", position: "relative" }}>
          {/*  //left */}
          <Grid item sm={6} sx={{
            paddingLeft: '30px',
            [theme.breakpoints.up("xl")]: {
              paddingLeft: '50px'
            }
          }}>
            <Text
              color="gray.main"
              sxProp={{
                fontSize: "16px",
                fontWeight: "bold",
                display: "block",
              }}
              variant="h5"
            >
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
                    value={firstName}
                    onChange={(event) => {
                      const value = event.target.value;
                      if (
                        value !== "" &&
                        !ALPHA_NUMERIC_DASH_REGEX.test(value)
                      ) {
                        //only letters
                        return;
                      }
                      setfirstName(value);
                    }}
                    label="First name *"
                    type={"text"}
                    helperText={
                      firstName === "" ? "please enter first name" : " "
                    }
                    color={firstName === "" ? "error" : "info"}
                  />
                </Grid>
                <Grid item>
                  <Input
                    onChange={(event) => {
                      const value = event.target.value;
                      if (
                        value !== "" &&
                        !ALPHA_NUMERIC_DASH_REGEX.test(value)
                      ) {
                        //only letters
                        return;
                      }
                      setlastName(value);
                    }}
                    value={lastName}
                    type={"text"}
                    label="Last name *"
                    helperText={
                      lastName === "" ? "please enter last name" : " "
                    }
                    color={lastName === "" ? "error" : "info"}
                  />
                </Grid>
              </Grid>
              <Text
                sxProp={{
                  display: "block",
                  [theme.breakpoints.up("xl")]: { marginTop: "25px" },
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
                      const regex = /^(0?[1-9]|1[0-2])$/;
                      if (value === "" || regex.test(value)) {
                        setmonth(value);
                      }
                    }}
                    type="text"
                    color={month === "" ? "error" : "info"}
                    onFocus={() => {
                      setdateLabel({ ...dateLabel, IsMMOnFocus: true });
                    }}
                    onBlur={() => {
                      setdateLabel({ ...dateLabel, IsMMOnFocus: false });
                    }}
                    label={dateLabel.IsMMOnFocus || month ? "Month" : "MM"}
                    value={month}
                  />
                </Grid>
                <Grid item>
                  <ShortInput
                    onChange={(event) => {
                      const value = event.target.value;
                      const regex = /^(0?[1-9]|[12][0-9]|3[01]    )$/;
                      if (value === "" || regex.test(value)) {
                        setday(value);
                      }
                    }}
                    onFocus={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: true });
                    }}
                    onBlur={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: false });
                    }}
                    label={(dateLabel.IsDDOnFocus || day) !== "" ? "Day" : "DD"}
                    value={day}
                    type={"text"}
                    color={day === "" ? "error" : "info"}
                  />
                </Grid>
                <Grid item>
                  <YyyInput
                    onChange={(event) => {
                      const value = event.target.value;
                      const regex = /^\d{1,}$/;
                      if (value === "" || regex.test(value)) {
                        setyear(value);
                      }
                    }}
                    onFocus={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: true });
                    }}
                    onBlur={() => {
                      setdateLabel({ ...dateLabel, IsDDOnFocus: false });
                    }}
                    label={dateLabel.IsDDOnFocus || year ? "Year" : "YYYY"}
                    color={year === "" ? "error" : "info"}
                    value={year}
                    type={"text"}
                  />
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
                <Grid
                  item
                  sx={{
                    ".MuiOutlinedInput-root": {
                      width: "200px !important",
                    },
                    ".MuiInputBase-input": {
                      width: "200px !important",
                    },
                    ".textBox___28X1D": {
                      width: "200px ",
                    },
                  }}
                >
                  <Input
                    id="username"
                    label="Email *"
                    value={email}
                    onChange={(event) => {
                      const value = event.target.value;
                      setEmail(value);
                    }}
                    type={"text"}
                    helperText={email === "" ? "please enter Email" : emailType}
                    color={email === "" ? "error" : "info"}
                    onBlur={() => {
                      checkEmail();
                    }}
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={phone}
                    type={"text"}
                    label="Cell phone *"
                    onChange={(event) => {
                      const value = event.target.value;
                      const regex = /^\d{1,}$/;
                      if (value === "" || regex.test(value)) {
                        setphone(value);
                      }
                    }}
                    helperText={phone === "" ? "please enter cell phone" : " "}
                    color={phone === "" ? "error" : "info"}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Divider sx={{ width: '2px', left: "50%", marginLeft: '-1px', backgroundColor: "#ccc" }} absolute orientation="vertical" />
          {/* right */}
          <Grid
            item
            sm={6}
            sx={{
              paddingLeft: "50px",
            }}
          >
            <Text
              color="gray.main"
              sxProp={{
                fontSize: "16px",
                fontWeight: "bold",
                display: "block",
              }}
              variant="h5"
            >
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
                  [theme.breakpoints.up("xl")]: { marginTop: "59px" },
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
                  [theme.breakpoints.up("xl")]: { marginTop: "64px" },
                }}
              >
                <Grid item>
                  <SelectBox>
                    <FormControl sx={{ m: 0, minWidth: 200 }} disabled>
                      <InputLabel id="demo-simple-select-disabled-label">
                        Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={"United States"}
                        label="Country"
                        renderValue={(value) => `${value}`}
                        sx={{
                          height: "36px",
                          "border-radius": "18px",
                          color: "red",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </SelectBox>
                </Grid>
                <Grid item>
                  <SelectBox
                    sx={{
                      minWidth: 200,
                    }}
                  >
                    <FormControl fullWidth>
                      <Select
                        sx={{
                          height: "36px",
                          "border-radius": "18px",
                        }}
                        displayEmpty
                        id="demo-simple-select"
                        value={state}
                        label="State"
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          Select option
                        </MenuItem>
                        {StateList.map(({ name, value }, index) => (
                          <MenuItem key={index} value={value}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </SelectBox>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ShadowBox>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Button sx={{ marginRight: "30px" }}>Cancel</Button>
        <Button variant="contained">Next</Button>
      </Box>
    </Grid>
  );
};

export default connect(
  () => {
    return {};
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
