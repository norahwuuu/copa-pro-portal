import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container, Typography } from "@mui/material";
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
          <Typography
            variant="body2"
            align="center"
            color="white"
            fontFamily="ColgateReady-Regular"
          >
            {forgotUsernameText.text}
          </Typography>
          <Typography
            margin={"30px 0"}
            fontSize={"18px"}
            align="center"
            color="white"
            fontFamily="ColgateReady-Bold"
          >
            {forgotUsernameText.number}
          </Typography>
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
