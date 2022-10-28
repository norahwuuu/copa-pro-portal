import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { useState } from "react";
import { history } from "umi";
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
        mainTitle="Forgot pasword?"
        headerInfo={{
          show: false,
          type: "error",
          info: "Username and password combination do not match our records.",
        }}
      >
        <div className={styles.forgotUsername}>
          <div className={styles.text1}>
            Please provide the email address associated with your account. We
            will send you a password reset email with instructions once we find
            a match in our system.
          </div>
          <InputField
            inputType="email"
            className={styles.inputContainer}
            inputValue={email}
            setInputValue={setEmail}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            name="Email"
            required
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
              Reset password
            </BaseButton>
            <BaseButton
              className={styles.cancel}
              type={"cancel"}
              onClick={() => history.push("/")}
            >
              Cancel
            </BaseButton>
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotPassword;
