import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { colorObj } from "@/theme/customPalette";
import { Container } from "@mui/material";
import type { FC } from "react";
import { useState } from "react";
import { connect, history, useIntl } from "umi";
import styles from "./login.less";
import { LoginParamsType, loginProps, LoginState } from "./type";
const secondaryMain = colorObj.secondary.main;
const Login: FC<loginProps> = ({ loginUser, isShowLoginError = false }) => {
  const translate = useIntl();
  // username
  const [email, setEmail] = useState<string>("");
  // username  错误类型
  const [emailType, setEmailType] = useState<string>("noError");

  // password
  const [password, setPassWord] = useState<string>("");
  // password 错误类型
  const [passType, setPassType] = useState<string>("noError");

  // 点击login-btn
  const loginClick = () => {
    if (email === "") {
      setEmailType("emailEmpty");
    }
    if (password === "") {
      setPassType("passEmpty");
    }
    // test login api  测试连接login 接口
    if (
      emailType === "noError" &&
      passType === "noError" &&
      email !== "" &&
      password !== ""
    ) {
      loginUser &&
        loginUser({
          password,
          username: email,
        });
    }
  };

  return (
    <Container>
      <CenterRectangle
        className={styles.loginBox}
        mainTitle={`${translate.formatMessage({
          id: "title",
        })}${"\n"}${translate.formatMessage({ id: "subTitle" })}`}
        LogoIconMt={32}
        headerInfo={{
          show: isShowLoginError,
          type: "error",
          info: "Username and password combination do not match our records.",
        }}
      >
        <div className={styles.formBox}>
          <InputField
            id="username"
            inputType="email"
            className={styles.inputContainer}
            subLink={`${translate.formatMessage({ id: "forgotUser" })}`}
            inputValue={email}
            setInputValue={setEmail}
            errorType={emailType}
            setErrorType={setEmailType}
            type={"text"}
            name="Email"
            label="Email"
            subLinkClick={() => {
              history.push("/login/forgotUsername");
            }}
          />
          <InputField
            id="password"
            className={styles.inputContainer}
            subLink={`${translate.formatMessage({
              id: "forgotPasswordTitle",
            })}`}
            inputValue={password}
            setInputValue={setPassWord}
            errorType={passType}
            setErrorType={setPassType}
            name="password"
            label="Password"
            inputType="pass"
            subLinkClick={() => {
              history.push("/login/forgotPassword");
            }}
          />
          <Button
            sxProp={{
              "&:hover": {
                background: `${secondaryMain}`,
                color: "#fff",
              },
            }}
            variant="shade"
            btnLabel={translate.formatMessage({ id: "btnLogin" })}
            onClickHandler={loginClick}
          />
        </div>
      </CenterRectangle>
    </Container>
  );
};
export default connect(
  ({ loginSpace }: LoginState) => {
    const { isShowLoginError } = loginSpace;
    return {
      isShowLoginError,
    };
  },
  (dispatch) => ({
    loginUser: (payload: LoginParamsType) => {
      dispatch({
        type: `loginSpace/login`,
        payload,
      });
    },
  })
)(Login);
