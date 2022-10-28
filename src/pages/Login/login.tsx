import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import Footer from "@/components/Footer/footer";
import InputField from "@/components/InputField/inputField";
import LoginLogo from "@/components/LoginLogo/loginLogo";
import { useState } from "react";
import { history } from "umi";

import { loginText } from "./column";
import styles from "./login.less";

const Login: FC<any> = () => {
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
  // const loginClick = () => {
  //   // 判断username
  //   if (email === "") {
  //     setEmailType("emailEmpty");
  //   }
  //   if (password === "") {
  //     setPassType("passEmpty");
  //   }
  // };

  return (
    <div>
      <LoginLogo />
      <CenterRectangle
        className={styles.loginBox}
        mainTitle={loginText.mainTitle}
        subtitle={loginText.subTitle}
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
            required
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
            required
            label="Password"
            inputType="pass"
            subLinkClick={() => {
              history.push("/login/forgotPassword");
            }}
          />
          <BaseButton children="login" type="gray" />
        </div>
      </CenterRectangle>
      <Footer />
    </div>
  );
};
export default Login;
