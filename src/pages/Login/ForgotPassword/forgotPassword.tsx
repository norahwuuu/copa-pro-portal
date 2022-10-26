import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Draft from "@/components/Draft/draft";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { useState } from "react";
import { history } from "umi";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  const [emailTip, setEmailTip] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorEmail, setErroEmail] = useState<boolean>(false);
  // useEffect(() => {
  //   if (errorEmail) {
  //     if (email === "") {
  //       setEmailTip(errorTips.emailEmpty);
  //     }
  //   }
  // }, [email, errorEmail]);
  return (
    <>
      <CenterRectangle className={styles.box} mainTitle="Forgot pasword?">
        <LoginLogo />
        <Draft />
        <div className={styles.forgotUsername}>
          <div className={styles.text1}>
            Please provide the email address associated with your account. We
            will send you a password reset email with instructions once we find
            a match in our system.
          </div>
          <InputField
            className={styles.inputContainer}
            helperText={emailTip}
            onChange={(v) => {
              setEmail(v.target.value);
            }}
            type={"text"}
            name="Email"
            required
            label="Email"
          />
          <div className={styles.btns}>
            <BaseButton
              type={"gray"}
              onClick={() => {
                console.log("email", email);
                history.push("/login/forgotPasswordEmail");
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
    </>
  );
};
export default ForgotPassword;
