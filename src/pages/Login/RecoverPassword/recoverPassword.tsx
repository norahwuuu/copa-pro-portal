import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { history } from "umi";
import { recoverPasswordText } from "../column";
import styles from "./recoverPassword.less";

const RecoverPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  const [password, setPassWord] = useState<string>("");
  const [passType, setPassType] = useState<string>("noError");

  return (
    <Container>
      <LoginLogo />
      {/* <Draft /> */}

      <CenterRectangle
        className={styles.box}
        mainTitle={recoverPasswordText.mainTitle}
      >
        <div className={styles.recoverUsername}>
          <Typography color="white" variant="body2">
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
            inputValue={password}
            setInputValue={setPassWord}
            errorType={passType}
            setErrorType={setPassType}
            name="password"
            label="Create password"
            inputType="pass"
          />
          <Grid textAlign={"left"} mt={1.25}>
            <Typography
              color="white"
              variant="caption"
              fontFamily="ColgateReady-Light"
            >
              {recoverPasswordText.pwd}
            </Typography>
            <Grid display="flex" alignItems={"center"} mt={1.25}>
              <div className={styles.icon} />
              <Typography
                color="white"
                variant="caption"
                lineHeight={"20px"}
                fontFamily="ColgateReady-Light"
              >
                {" "}
                {recoverPasswordText.remind}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            color="white"
            variant="h5"
            mt={4}
            fontFamily="ColgateReady-ExtraLight"
          >
            {recoverPasswordText.title}{" "}
          </Typography>
          <Typography
            color="white"
            variant="body2"
            textAlign="left"
            mt={1}
            fontFamily="ColgateReady-Regular"
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
          <div className={styles.btns}>
            <BaseButton
              style={{ marginBottom: 20 }}
              type={"gray"}
              onClick={() => {
                if (emailType === "noError") {
                  history.push("/");
                }
              }}
            >
              {recoverPasswordText.reset}
            </BaseButton>
            <BaseButton
              className={styles.cancel}
              type={"cancel"}
              onClick={() => history.push("/")}
            >
              {recoverPasswordText.back}
            </BaseButton>
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default RecoverPassword;
