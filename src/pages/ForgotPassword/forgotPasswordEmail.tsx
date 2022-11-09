import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import { Container, Grid, Typography } from "@mui/material";
import { history, useIntl } from "umi";
import { forgotPasswordTextEmail } from "../Login/column";
import styles from "./forgotPassword.less";

const ForgotPassword = () => {
  const translate = useIntl();
  return (
    <Container>
      <CenterRectangle
        className={styles.box}
        mainTitle={forgotPasswordTextEmail.mainTitle}
      >
        <Grid textAlign={"center"}>
          <Typography
            variant="body1"
            align="left"
            color="white"
            fontWeight="200"
            padding={"0 60px"}
            mt={6}
          >
            {forgotPasswordTextEmail.text}
          </Typography>
          <Button
            variant={"shade"}
            btnLabel={translate.formatMessage({ id: "btnBacktoLogin" })}
            onClickHandler={() => history.push("/")}
            sxProp={{
              marginTop: "20px",
            }}
          />
          <Typography variant="body2" align="center" color="white" mt={4}>
            {forgotPasswordTextEmail.footerText}
          </Typography>
        </Grid>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default ForgotPassword;
