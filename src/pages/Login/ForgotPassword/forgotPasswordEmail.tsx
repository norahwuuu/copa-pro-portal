import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { history } from "umi";
import { forgotPasswordTextEmail } from "../column";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  return (
    <Container>
      <LoginLogo />
      {/* <Draft /> */}
      <CenterRectangle
        className={styles.box}
        mainTitle={forgotPasswordTextEmail.mainTitle}
      >
        <div className={styles.forgotUsername}>
          <div className={styles.text1}>{forgotPasswordTextEmail.text}</div>
          <BaseButton
            style={{ margin: "30px 20px" }}
            type={"gray"}
            onClick={() => history.push("/")}
          >
            {forgotPasswordTextEmail.back}
          </BaseButton>
          <div className={styles.verifyFolder}>
            {forgotPasswordTextEmail.footerText}
          </div>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotPassword;
