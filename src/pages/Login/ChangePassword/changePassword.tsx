import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { history, useIntl } from "umi";
import { changePasswordText } from "../column";
import styles from "./changePassword.less";

const RecoverPassword = () => {
  const translate = useIntl();
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  const [password, setPassWord] = useState<string>("");
  const [passType, setPassType] = useState<string>("noError");

  return (
    <Container>
      <CenterRectangle
        sxProp={{ top: "107px" }}
        mainTitle={changePasswordText.mainTitle}
        LogoIconMt={26}
      >
        <Grid className={styles.recoverUsername}>
          <InputField
            style={{ marginTop: 20 }}
            inputValue={password}
            setInputValue={setPassWord}
            errorType={passType}
            setErrorType={setPassType}
            name="password"
            label={translate.formatMessage({ id: "oldPassword" })}
            inputType="pass"
          />
          <InputField
            style={{ marginTop: 20 }}
            inputValue={password}
            setInputValue={setPassWord}
            errorType={passType}
            setErrorType={setPassType}
            name="password"
            label={translate.formatMessage({ id: "newPassword" })}
            inputType="pass"
          />
          <Grid textAlign={"left"} marginTop="18px">
            <Grid display="flex" alignItems={"center"} mt={1.25}>
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
            // onClickHandler={loginClick}
          />

          <Button
            sxProp={{
              marginTop: "5px",
              color: "white",
              border: "1px solid transparent",
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
      <Footer />
    </Container>
  );
};
export default RecoverPassword;
