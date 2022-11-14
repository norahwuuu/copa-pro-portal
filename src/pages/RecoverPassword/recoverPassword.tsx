import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { Container, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { connect, history, useIntl } from "umi";
import { errorTypes, recoverPasswordText } from "../Login/column";
import styles from "./recoverPassword.less";
import { recoverProps, resetPasswordParamsType } from "./type";

const RecoverPassword: FC<recoverProps> = ({ resetPassword }) => {
  const translate = useIntl();
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  const [password, setPassWord] = useState<string>("");
  const [passType, setPassType] = useState<string>("noError");
  const [verifyQustion, setverifyQustion] = useState("");
  const [verifyQustionType, setverifyQustionType] = useState("noError");
  const loginClick = () => {
    if (email === "") {
      setEmailType("emailEmpty");
    }
    if (password === "") {
      setPassType("passEmpty");
    }
    if (verifyQustion === "") {
      setverifyQustionType("verifyQustionError");
    }

    if (password !== "" && email !== "" && verifyQustion !== "") {
      resetPassword({
        username: email,
        reset_password_token: "dfp3XBKtQFgU4PxZC8zS",
        okta_user_id: "00u6bza7n52Ejf3lV5d7",
        password: password,
        answer: verifyQustion,
        state_token: "00ZgbBRTzXiT641BqstP44ExK5T1inCw0bS_BJZrt9",
      });
    }
  };
  const checkVerifyQustion = () => {
    if (verifyQustionType === "") {
      setverifyQustionType && setverifyQustionType("verifyQustionError");
    } else {
      setverifyQustionType && setverifyQustionType("noError");
    }
  };
  return (
    <Container>
      <CenterRectangle
        className={styles.box}
        mainTitle={recoverPasswordText.mainTitle}
        LogoIconMt={15}
      >
        <div className={styles.recoverUsername}>
          <Typography color="white" variant="body1">
            {recoverPasswordText.text}
          </Typography>
          <InputField
            inputType="email"
            className={styles.inputContainer}
            inputValue={email}
            setInputValue={setEmail}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            name="Email"
            label="Email"
          />
          <InputField
            style={{ marginTop: 20 }}
            inputValue={password}
            setInputValue={setPassWord}
            errorType={passType}
            setErrorType={setPassType}
            name="password"
            label="Create password"
            inputType="pass"
          />
          <Grid textAlign={"left"} marginTop="11px">
            <Typography color="white" variant="caption" fontWeight="300">
              {recoverPasswordText.pwd}
            </Typography>
            <Grid
              display="flex"
              alignItems={"center"}
              sx={{ marginTop: "10px" }}
            >
              <div className={styles.icon} />
              <Typography
                color="white"
                variant="caption"
                lineHeight={"20px"}
                fontWeight="300"
              >
                {recoverPasswordText.remind}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="white" variant="h3" mt={6} fontWeight="200">
            {recoverPasswordText.title}
          </Typography>
          <Typography
            color="white"
            variant="body1"
            textAlign="left"
            sx={{ marginTop: "8px" }}
          >
            {recoverPasswordText.name}
          </Typography>
          <InputField
            onChange={(v) => {
              setverifyQustion("noError");
              setverifyQustion(v.target.value);
            }}
            onFocus={() => {
              setverifyQustionType("noError");
            }}
            onBlur={() => {
              checkVerifyQustion();
            }}
            helperText={errorTypes[verifyQustionType].tip}
            inputType="default"
            inputValue={verifyQustion}
            setInputValue={setverifyQustion}
            className={styles.inputContainer}
            errorType={verifyQustionType}
            setErrorType={setverifyQustionType}
            type={"text"}
            label="Answer"
          />
          <Button
            sxProp={{ marginTop: "30px" }}
            variant="shade"
            btnLabel={translate.formatMessage({ id: "btnResetPassword" })}
            onClickHandler={loginClick}
          />

          <Button
            sxProp={{
              marginTop: "15px",
              color: "white",
              border: "1px solid transparent",
              "&:hover": {
                color: "#333",
              },
            }}
            variant="text"
            btnLabel={translate.formatMessage({ id: "btnBacktoLogin" })}
            onClickHandler={() => {
              history.push("/");
            }}
          />
        </div>
      </CenterRectangle>
    </Container>
  );
};
export default connect(
  () => {
    return {};
  },
  (dispatch) => ({
    resetPassword: (payload: resetPasswordParamsType) => {
      dispatch({
        type: `loginSpace/resetPassword`,
        payload,
      });
    },
  })
)(RecoverPassword);
