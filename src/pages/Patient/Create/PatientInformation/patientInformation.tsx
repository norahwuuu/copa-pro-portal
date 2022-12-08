import InputField, { emailRegex, LogTextField } from "@/components/InputField/inputField";
import Text from "@/components/Text/text";
import ShadowBox from "@/pages/Components/shadowBox";
import { errorTypes } from "@/pages/LoginBox/Login/column";
import { Box, FormHelperText, Grid, styled, useFormControl, useTheme } from "@mui/material";
import React from "react";
import { FC, useState } from "react";
import { useIntl } from "umi";

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
  }
  & .MuiInputLabel-root{
     top:-6px;
     padding: 0 2px;
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


  const IsEmpty = (name: string, value: string) => {
    const errorWords = errorTypes[name] ? errorTypes[name].tip : 'Please enter wrords'
    if (value === '') {
      return errorWords
    }
    return ''
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
          [theme.breakpoints.up("xl")]: { padding: "50px 0", height: "408px" },
          flex: "1",
        }}
      >
        <Grid container height={"100%"}>
          {/*  //left */}
          <Grid item sm={6} sx={{ paddingLeft: "30px" }}>
            <Text
              variant={"h4"}
              color={"gray.main"}
              sxProp={{ display: "inline-block" }}
            >
              {`${translate.formatMessage({
                id: "patient.Info",
              })}*`}
            </Text>

            <Box component="form" autoComplete="off">
              <Grid
                mt={"43px"}
                mb={"23px"}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: 9 }}
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
                    error={firstName === ''}
                    helperText={IsEmpty('firstName', firstName)}
                  />
                </Grid>
                <Grid item>
                  <Input
                    required
                    onChange={(event) => {
                      const value = event.target.value;
                      if (value !== "" && !ALPHA_NUMERIC_DASH_REGEX.test(value)) {               //only letters
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
                sxProp={{ display: "block" }}
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
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: 9 }}
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
                    label="Email"

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
            sx={{ paddingLeft: "30px", borderLeft: "1px solid #CCCCCC" }}
          >
            <Text
              variant={"h4"}
              color={"gray.main"}
              sxProp={{ display: "inline-block" }}
            >
              {`${translate.formatMessage({
                id: "patient.address",
              })}*`}
            </Text>

            <Box component="form" autoComplete="off">
              <Grid
                mt={"43px"}
                container
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: 9 }}
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
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: 9 }}
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
                columnSpacing={{ sm: 9, md: 9, lg: 9, xl: 9 }}
              >
                <Grid item>
                  <Input value={email} type={"text"} label="Email *" />
                </Grid>
                <Grid item>
                  <Input value={phone} type={"text"} label="Cell phone *" />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid >
      </ShadowBox >
    </Grid >
  );
};

export default PatientInformation;
