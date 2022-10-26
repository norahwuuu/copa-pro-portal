import BaseButton from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Draft from "@/components/Draft/draft";
import Footer from "@/components/Footer/footer";
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
            A reset password email with instructions will be sent if we find a
            match in our system. Please check your inbox. It might take a few
            minutes.
          </div>
          <BaseButton
            style={{ margin: "30px 20px" }}
            type={"gray"}
            onClick={() => history.push("/")}
          >
            Back to login
          </BaseButton>
          <div className={styles.verifyFolder}>
            Please verify your spam folder if you didn't receive any email.
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </>
  );
};
export default ForgotPassword;
