import React, { useEffect } from 'react';
import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import {
  recoverProps,
  resetPasswordParamsType,
} from "@/pages/LoginBox/RecoverPassword/type";
import { Container, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { connect, history, useIntl, useParams } from "umi";
import { specialCharacters } from "../ChangePassword/changePassword";
import { errorTypes, recoverPasswordText } from "../Login/column";
import styles from "./recoverPassword.less";
import { StoreProps } from '../Login/type';
export const RecoverPassword: FC<recoverProps> = ({ resetPassword, resetPasswordData, getResetInfo }) => {
  const { token } = useParams<any>();
  useEffect(() => {
    getResetInfo({
      recoveryToken: token
    })
  }, [])

  const translate = useIntl();
  const [emailType, setEmailType] = useState<string>("noError");
  const [password, setPassWord] = useState<string>("");
  const [passType, setPassType] = useState<string>("noError");
  const [verifyQustion, setverifyQustion] = useState("");
  const [verifyQustionType, setverifyQustionType] = useState("noError");
  const checkPass = () => {
    if (password === "") {
      setPassType("passEmpty");
      return false;
    }
    /* Min. 6 characters, and one special character. */
    if (
      /[0-9a-zA-Z]/.test(password) &&
      specialCharacters.test(password) &&
      password.length >= 6
    ) {
      return true;
    } else {
      setPassType("passwordFormatError");
      return false;
    }
  };
  const loginClick = () => {

    if (password === "") {
      setPassType("passEmpty");
    }
    if (verifyQustion === "") {
      setverifyQustionType("verifyQustionError");
    }
    checkPass()
    if (
      password !== "" &&
      verifyQustion !== "" &&
      checkPass()
    ) {
      resetPassword && resetPassword({
        username: resetPasswordData.usesname,
        reset_password_token: token,
        okta_user_id: resetPasswordData.useId,
        password: window.btoa(password),
        answer: verifyQustion,
        state_token: resetPasswordData.stateToken,
      });
    }
  };
  const checkVerifyQustion = () => {
    if (verifyQustion === "") {
      setverifyQustionType && setverifyQustionType("verifyQustionError");
    } else {
      setverifyQustionType && setverifyQustionType("noError");
    }
  };
  return (
    <Container>
      <CenterRectangle
        mainTitle={recoverPasswordText.mainTitle}
        LogoIconMt={15}
        headerInfo={{
          show: resetPasswordData.errorSummary && resetPasswordData.errorSummary !== '',
          type: "error",
          info: resetPasswordData.errorSummary || '',
        }}
      >
        <div className={styles.recoverUsername}>
          <Typography color="white" variant="body1">
            {recoverPasswordText.text}
          </Typography>
          <InputField
            inputType="email"
            className={styles.inputContainer}
            inputValue={resetPasswordData.usesname}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            name="Email"
            label="Email"
            disabled
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
            {resetPasswordData.question}
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
              backgroundColor: 'transparent',
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
  (store: StoreProps) => {
    const { loginSpace } = store;
    const { resetPasswordData } = loginSpace
    return {
      resetPasswordData
    };
  },
  (dispatch) => ({
    resetPassword: (payload: resetPasswordParamsType) => {
      dispatch({
        type: `loginSpace/resetPassword`,
        payload,
      });
    },
    getResetInfo: (payload: any) => {
      dispatch({
        type: `loginSpace/getResetInfo`,
        payload,
      });
    },
  })
)(RecoverPassword);