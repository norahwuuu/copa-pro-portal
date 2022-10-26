import BaseButton from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { IconButton, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";

import { errorTypes, loginText } from "./column";
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

  // 监听邮件错误类型
  useEffect(() => {
    if (emailType !== "noError") {
      if (email === "") {
        setEmailType("emailEmpty");
      }
    }
  }, [email, emailType]);
  // 监听密码错误类型
  useEffect(() => {
    if (passType !== "noError") {
      if (passType === "") {
        setPassType("passEmpty");
      }
    }
  }, [password, passType]);
  // 点击login-btn
  const loginClick = () => {
    // 判断username
    if (email === "") {
      setEmailType("emailEmpty");
    }
    if (password === "") {
      setPassType("passEmpty");
    }
  };
  return (
    <>
      <CenterRectangle
        className={styles.loginBox}
        mainTitle={loginText.mainTitle}
        subtitle={loginText.subTitle}
      >
        <div className={styles.formBox}>
          <InputField
            className={styles.inputContainer}
            subLink={loginText.forgotUser}
            helperText={errorTypes[emailType].tip}
            color={emailType !== "noError" ? "error" : "info"}
            onChange={(v) => {
              setEmailType("noError");
              setEmail(v.target.value);
            }}
            type={"text"}
            name="Email"
            required
            label="Email"
          />
          <InputField
            className={styles.inputContainer}
            subLink={loginText.forgotPass}
            helperText={errorTypes[passType].tip}
            color={passType !== "noError" ? "error" : "info"}
            onChange={(v) => {
              setPassWord(v.target.value);
              setPassType("noError");
            }}
            type={"password"}
            name="password"
            required
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    onMouseDown={() => {}}
                    edge="end"
                  ></IconButton>
                </InputAdornment>
              ),
            }}
          />
          <BaseButton children="login" type="gray" />
        </div>
      </CenterRectangle>
    </>
  );
};
export default Login;
