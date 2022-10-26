import BaseButton from "@/components/Button/baseButton";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  //password showType
  const [showType, setShowType] = useState<boolean>(true);

  // 校验是否是email 格式
  const emailRegex = (email: string) => {
    const email_Regex = new RegExp("^.+@[A-Z0-9a-z]+.[a-zA-Z]+$");
    return email_Regex.test(email);
  };
  // 校验eamil格式
  const checkEmail = () => {
    if (email === "") {
      setEmailType("emailEmpty");
    } else if (!emailRegex(email)) {
      setEmailType("nonvalidEmail");
    } else {
      setEmailType("noError");
    }
  };
  // 校验密码是否格式正确
  const checkPass = () => {
    if (password === "") {
      setPassType("passEmpty");
    } else {
      setPassType("noError");
    }
  };
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
      if (password === "") {
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
            onFocus={() => {
              setEmailType("noError");
            }}
            onBlur={() => {
              checkEmail();
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
            onFocus={() => {
              setPassType("noError");
            }}
            onBlur={() => {
              checkPass();
            }}
            type={showType ? "password" : "text"}
            name="password"
            required
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowType(!showType);
                    }}
                    edge="end"
                  >
                    {showType ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
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
