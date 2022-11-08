import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { history, useIntl } from "umi";
import { errorTypes, forgotPasswordText } from "../column";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  const translate = useIntl();
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  return (
    <Container>
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
            variant="body1"
            textAlign="left"
            fontFamily="ColgateReady-Regular"
          >
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
            <Button
              variant="shade"
              btnLabel={translate.formatMessage({ id: "btnResetPassword" })}
              onClickHandler={() => {
                if (emailType === "noError") {
                  history.push("/login/forgotPasswordEmail");
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
              btnLabel={translate.formatMessage({ id: "btnCancel" })}
              onClickHandler={() => {
                if (emailType === "noError") {
                  history.push("/");
                }
              }}
            />
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotPassword;
