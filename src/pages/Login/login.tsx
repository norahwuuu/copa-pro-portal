import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import request from "@/utils/request";
import { Container } from "@mui/material";
import { useState } from "react";
import { history, useIntl } from "umi";
import { loginText } from "./column";
import styles from "./login.less";

const Login = () => {
  const translate = useIntl();
  // username
  const [email, setEmail] = useState<string>("");
  // username  错误类型
  const [emailType, setEmailType] = useState<string>("noError");

  // password
  const [password, setPassWord] = useState<string>("");
  // password 错误类型
  const [passType, setPassType] = useState<string>("noError");

  // callback 接口
  const [showLoginError, setShowLoginError] = useState<boolean>(false);

  // 点击login-btn
  const loginClick = () => {
    setShowLoginError(false);
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
      // 测试登录---- admin@ulabsystems.net   Qwer12#
      request("/api/v1/authn", {
        method: "post",
        data: {
          username: email,
          password: password,
        },
      }).then((r) => {
        if (r) {
          alert("login success!");
          setShowLoginError(false);
        } else {
          setShowLoginError(true);
        }
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
          show: showLoginError,
          type: "error",
          info: "Username and password combination do not match our records.",
        }}
      >
        <div className={styles.formBox}>
          <InputField
            inputType="email"
            className={styles.inputContainer}
            subLink={loginText.forgotUser}
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
            className={styles.inputContainer}
            subLink={loginText.forgotPass}
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
                background: "#218389",
                color: "#fff",
              },
            }}
            variant="shade"
            btnLabel={translate.formatMessage({ id: "btnLogin" })}
            onClickHandler={loginClick}
          />
        </div>
      </CenterRectangle>
      <Footer />
    </Container>
  );
};
export default Login;
