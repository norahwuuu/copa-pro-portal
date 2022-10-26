import Button from "@/components/Button/button";
import CenterRectangle from "@/components/CenterRectangle/centerRectangle";
import InputField from "@/components/InputField/inputField";
import { IconButton, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";

import { errorTips, loginText } from "./column";
import styles from "./login.less";

const Login: FC<any> = () => {
  const [email, setEmail] = useState<string>("");
  const [errorEmail, setErroEmail] = useState<boolean>(false);
  const [emailTip, setEmailTip] = useState<string>("");
  useEffect(() => {
    if (errorEmail) {
      if (email === "") {
        setEmailTip(errorTips.emailEmpty);
      }
    }
  }, [email, errorEmail]);
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
            helperText={emailTip}
            // color="error"
            onChange={(v) => {
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
            id="standard-adornment-password"
            helperText={emailTip}
            // color="error"
            onChange={(v) => {
              setEmail(v.target.value);
            }}
            type={"password"}
            name="password"
            required
            label="Password"
            InputProps={{
              startAdornment: (
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
          <Button children="login" type="gray" />
        </div>
      </CenterRectangle>
    </>
  );
};
export default Login;
