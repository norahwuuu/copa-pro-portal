import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { useState } from "react";
import { history } from "umi";
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

      <CenterRectangle className={styles.box} mainTitle="Recover your pasword">
        <div className={styles.recoverUsername}>
          <div className={styles.text1}>
            Let's set a new password for your account.
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
          <div className={styles.mid}>
            <div className={styles.pwd}>
              Password must be at least 6 characters and contain at least one
              special character.
            </div>
            <div className={styles.remind}>
              <div className={styles.icon} /> Min. 6 characters.
            </div>
            <div className={styles.remind} style={{ margin: 0 }}>
              <div className={styles.icon} /> One special character.
            </div>
          </div>
          <div className={styles.footerTitle}>Security question</div>
          <div className={styles.text1}>What was your first pet name?</div>
          <InputField
            inputType="default"
            className={styles.inputContainer}
            inputValue={email}
            setInputValue={setEmail}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            label="Answer"
          />
          <div className={styles.btns}>
            <BaseButton
              type={"gray"}
              onClick={() => {
                if (emailType === "noError") {
                  history.push("/");
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
              Back to login
            </BaseButton>
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default RecoverPassword;
