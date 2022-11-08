import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import { Container, Typography } from "@mui/material";
import { history, useIntl } from "umi";
import { forgotUsernameText } from "../column";
import styles from "./forgotUsername.less";

const ForgotUsername = () => {
  const translate = useIntl();
  return (
    <Container>
      <CenterRectangle
        className={styles.box}
        mainTitle={forgotUsernameText.mainTitle}
      >
        <div className={styles.forgotUsername}>
          <Typography
            variant="body1"
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
          <Button
            variant={"shade"}
            btnLabel={translate.formatMessage({ id: "btnBacktoLogin" })}
            onClickHandler={() => history.push("/")}
          />
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotUsername;
