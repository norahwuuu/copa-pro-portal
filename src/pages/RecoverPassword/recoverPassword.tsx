import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { history, useIntl } from "umi";
import { recoverPasswordText } from "../Login/column";
import styles from "./recoverPassword.less";

const RecoverPassword = () => {
  const translate = useIntl();
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  const [password, setPassWord] = useState<string>("");
  const [passType, setPassType] = useState<string>("noError");

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
            <Grid display="flex" alignItems={"center"} mt={1.25}>
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
            inputType="default"
            className={styles.inputContainer}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            label="Answer"
          />
          <Button
            sxProp={{ marginTop: "30px" }}
            variant="shade"
            btnLabel={translate.formatMessage({ id: "btnResetPassword" })}
            onClickHandler={() => {
              if (emailType === "noError") {
                history.push("/");
              }
            }}
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
export default RecoverPassword;
