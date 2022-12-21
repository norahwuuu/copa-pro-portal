import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { Container, Grid, Typography } from "@mui/material";
import { useState, FC } from "react";
import { history, useIntl } from "umi";
import { changePasswordText } from "../Login/column";
import styles from "./changePassword.less";
import * as React from 'react';

export const specialCharacters =
  /[`~!@#$%^&*()_\-+=<>?:"{}|,.;/'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im; // 特殊字符

export const ChangePassword: FC<any> = ({ changePasswordFn }) => {
  const translate = useIntl();
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [oldpassType, setOldPassType] = useState<string>("noError");
  const [passType, setPassType] = useState<string>("noError");

  const checkPass = () => {
    if (newPassword === "") {
      setPassType("passEmpty");
      return false;
    }
    /* Min. 6 characters, and one special character. */
    if (
      /[0-9a-zA-Z]/.test(newPassword) &&
      specialCharacters.test(newPassword) &&
      newPassword.length >= 6
    ) {
      return true;
    } else {
      setPassType("passwordFormatError");
      return false;
    }
  };
  const changePwdClick = () => {
    if (oldPassword === "") {
      setOldPassType("passEmpty");
    }
    if (newPassword === "") {
      setPassType("passEmpty");
    }
    if (oldPassword !== newPassword) {
      setPassType("passwordDifferentError");
    }
    if (
      oldPassword !== "" &&
      newPassword !== "" &&
      oldPassword === newPassword &&
      checkPass()
    ) {
      setPassType("noError");
      setOldPassType("noError");
      changePasswordFn && changePasswordFn({
        oldPassword,
        newPassword
      })
    }
  };

  return (
    <Container>
      <CenterRectangle
        mainTitle={changePasswordText.mainTitle}
        LogoIconMt={26}
      >
        <Grid className={styles.recoverUsername}>
          <InputField
            style={{ marginTop: 20 }}
            inputValue={oldPassword}
            setInputValue={setOldPassword}
            errorType={oldpassType}
            setErrorType={setOldPassType}
            name="password"
            label={translate.formatMessage({ id: "oldPassword" })}
            inputType="pass"
          />
          <InputField
            style={{ marginTop: 20 }}
            inputValue={newPassword}
            setInputValue={setNewPassword}
            errorType={passType}
            setErrorType={setPassType}
            name="password"
            label={translate.formatMessage({ id: "newPassword" })}
            inputType="pass"
          />
          <Grid textAlign={"left"} marginTop="18px">
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
                {changePasswordText.remind}
              </Typography>
            </Grid>
          </Grid>
          <Button
            btnType={"submit"}
            sxProp={{
              display: "block",
              margin: "auto",
              marginTop: "38px",
              "&:hover": {
                background: "#218389",
                color: "#fff",
              },
            }}
            variant="shade"
            btnLabel={translate.formatMessage({ id: "btnSave" })}
            onClickHandler={changePwdClick}
          />

          <Button
            sxProp={{
              marginTop: "5px",
              color: "white",
              border: "1px solid transparent",
              backgroundColor: 'transparent',

              "&:hover": {
                color: "#333",
              },
            }}
            variant="text"
            btnLabel={translate.formatMessage({ id: "btnCancel" })}
            onClickHandler={() => {
              history.push("/");
            }}
          />
        </Grid>
      </CenterRectangle>
    </Container>
  );
};
export default ChangePassword;
