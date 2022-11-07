import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { history } from "umi";
import { errorTypes, forgotPasswordText } from "../column";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  return (
    <Container>
      <LoginLogo />
      {/* <Draft /> */}

      <CenterRectangle
        className={styles.box}
        mainTitle={forgotPasswordText.mainTitle}
        headerInfo={{
          show: false,
          type: "error",
          info: errorTypes.passwordError.tip,
        }}
      >
        <div className={styles.forgotUsername}>
          <Typography
            color="white"
            variant="body2"
            textAlign="left"
            fontFamily="ColgateReady-Regular"
          >
            {" "}
            {forgotPasswordText.text}
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
          <div className={styles.btns}>
            <BaseButton
              type={"gray"}
              onClick={() => {
                if (emailType === "noError") {
                  history.push("/login/forgotPasswordEmail");
                }
              }}
            >
              {forgotPasswordText.reset}
            </BaseButton>
            <BaseButton
              className={styles.cancel}
              type={"cancel"}
              onClick={() => history.push("/")}
            >
              {forgotPasswordText.cancel}
            </BaseButton>
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotPassword;
