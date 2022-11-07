import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { Container } from "@mui/material";
import { history, useIntl } from "umi";
import { forgotPasswordTextEmail } from "../column";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  const translate = useIntl();
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
          <Button
            variant={"shade"}
            btnLabel={translate.formatMessage({ id: "btnBacktoLogin" })}
            onClickHandler={() => history.push("/")}
          />
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
