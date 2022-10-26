import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Draft from "@/components/Draft/draft";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { history } from "umi";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
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
          <div className={styles.text2}>(123) 456-7890</div>
          <div className={styles.btns}>
            <Button type={"gray"} onClick={() => history.push("/login")}>
              Reset password
            </Button>
            <Button
              className={styles.cancel}
              type={"cancel"}
              onClick={() => history.push("/login")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </>
  );
};
export default ForgotPassword;
