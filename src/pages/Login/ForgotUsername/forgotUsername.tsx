import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { history } from "umi";
import styles from "./forgotUsername.less";

const ForgotUsername = () => {
  return (
    <Container>
      <LoginLogo />
      {/* <Draft /> */}
      <CenterRectangle className={styles.box} mainTitle="Forgot username?">
        <div className={styles.forgotUsername}>
          <div className={styles.text1}>
            Please call your customer service agent at:
          </div>
          <div className={styles.text2}>(123) 456-7890</div>
          <BaseButton type={"gray"} onClick={() => history.push("/")}>
            Back to login
          </BaseButton>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotUsername;
