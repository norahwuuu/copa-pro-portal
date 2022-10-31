import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { history } from "umi";
import { forgotUsernameText } from "../column";
import styles from "./forgotUsername.less";

const ForgotUsername = () => {
  return (
    <Container>
      <LoginLogo />
      {/* <Draft /> */}
      <CenterRectangle
        className={styles.box}
        mainTitle={forgotUsernameText.mainTitle}
      >
        <div className={styles.forgotUsername}>
          <div className={styles.text1}>{forgotUsernameText.text}</div>
          <div className={styles.text2}>{forgotUsernameText.number}</div>
          <BaseButton type={"gray"} onClick={() => history.push("/")}>
            {forgotUsernameText.back}
          </BaseButton>
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotUsername;
