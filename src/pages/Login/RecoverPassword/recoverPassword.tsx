import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { useState } from "react";
import { history, useIntl } from "umi";
import { recoverPasswordText } from "../column";
import styles from "./recoverPassword.less";

const RecoverPassword = () => {
  const translate = useIntl();
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
          <div className={styles.text1}>{recoverPasswordText.text}</div>
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
            <div className={styles.pwd}>{recoverPasswordText.pwd}</div>
            <div className={styles.remind}>
              <div className={styles.icon} /> {recoverPasswordText.remind_min}
            </div>
            <div className={styles.remind} style={{ margin: 0 }}>
              <div className={styles.icon} /> {recoverPasswordText.remind_One}
            </div>
          </div>
          <div className={styles.footerTitle}>Security question</div>
          <div className={styles.text1}>{recoverPasswordText.name}</div>
          <InputField
            inputType="default"
            className={styles.inputContainer}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            label="Answer"
          />
          <div className={styles.btns}>
            <Button
              variant="shade"
              btnLabel={translate.formatMessage({ id: "btnResetPassword" })}
              onClickHandler={() => {
                if (emailType === "noError") {
                  history.push("/");
                }
              }}
            />

            <Button
              variant="text"
              btnLabel={translate.formatMessage({ id: "btnBacktoLogin" })}
              onClickHandler={() => {
                history.push("/");
              }}
            />
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default RecoverPassword;
