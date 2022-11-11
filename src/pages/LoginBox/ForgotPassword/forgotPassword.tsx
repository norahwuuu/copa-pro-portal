import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { ForgotPasswordParamsType } from "@/services/type";
import { Container, Typography } from "@mui/material";
import { FC, useState } from "react";
import { connect, history, useIntl } from "umi";
import { errorTypes, forgotPasswordText } from "../Login/column";
import styles from "./forgotPassword.less";
import { propsType } from "./type";

const ForgotPassword: FC<propsType> = (props) => {
  const { forgotPassword } = props;
  const translate = useIntl();
  const [email, setEmail] = useState<string>("");
  const [emailType, setEmailType] = useState<string>("noError");
  return (
    <Container>
      <CenterRectangle
        className={styles.box}
        mainTitle={forgotPasswordText.mainTitle}
        headerInfo={{
          show: false,
          type: "error",
          info: errorTypes.passwordError.tip,
        }}
      >
        <div className={styles.forgotUsername}>
          <Typography color="white" variant="body1" textAlign="left">
            {forgotPasswordText.text}
          </Typography>

          <InputField
            inputType="email"
            className={styles.inputContainer}
            inputValue={email}
            setInputValue={setEmail}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            name="Email"
            label="Email"
          />
          <div className={styles.btns}>
            <Button
              variant="shade"
              btnLabel={translate.formatMessage({ id: "btnResetPassword" })}
              onClickHandler={() => {
                forgotPassword({ username: email });
              }}
            />

            <Button
              sxProp={{
                marginTop: "15px",
                color: "white",
                border: "1px solid transparent",
                "&:hover": {
                  color: "#333",
                },
              }}
              variant="text"
              btnLabel={translate.formatMessage({ id: "btnCancel" })}
              onClickHandler={() => {
                history.push("/");
              }}
            />
          </div>
        </div>
      </CenterRectangle>
    </Container>
  );
};
export default connect(
  ({}) => {
    return {};
  },
  (
    dispatch: (arg0: {
      type: string;
      payload: ForgotPasswordParamsType;
    }) => void
  ) => ({
    forgotPassword: (payload: ForgotPasswordParamsType) => {
      dispatch({
        type: `loginSpace/forgotPassword`,
        payload,
      });
    },
  })
)(ForgotPassword);
