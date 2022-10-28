import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { history } from "umi";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  return (
    <Container>
      <LoginLogo />
      {/* <Draft /> */}
      <CenterRectangle className={styles.box} mainTitle="Forgot pasword?">
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
    </Container>
  );
};
export default ForgotPassword;
