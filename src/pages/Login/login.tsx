import { IconButton, InputAdornment } from "@mui/material";
import { FC, useEffect, useState } from "react";

import InputField from "@/components/InputField/inputField";
import { errorTips } from "./column";

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
      <InputField
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
    </>
  );
};
export default Login;
