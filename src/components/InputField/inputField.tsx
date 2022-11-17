/**
 * global TextField : 带效果的输入框  (Input box with effect)
 * @param
 * className:类名(class name)
 * subLink: 输入框右下方文字(Text at the bottom right of the input box)
 * subLinkClick: 输入框右下角文字点击方法回调(Click the method callback in the lower right corner of the input box)
 * inputType: 输入框类型(types of input)--- email\pass\default
 * inputValue: 输入框的值(value of input)
 * setInputValue: 设置输入框值得方法(How to set the value of the input box)
 * errorType: 错误类型(types of error)---noError\emailEmpty\passEmpty\nonvalidEmail
 * setErrorType: 设置错误类型的方法(How to set the error type)
 * @returns
 */
import { errorTypes } from "@/pages/LoginBox/Login/column";
import { colorObj } from "@/theme/customPalette";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { TextFieldProps } from "@mui/material";
import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import type { FC } from "react";
import { useEffect, useState } from "react";
import styles from "./inputField.less";
import { InputFieldType } from "./type";
export type InputFieldProps = TextFieldProps & InputFieldType;

const errorMain = colorObj.error.main;
const commonWhite = colorObj.common.white;
const LogTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    width: 220px;
    padding: 0;
    background: #fff;
    border-radius: 18px;
  }
  ,
  & .MuiInputBase-input {
    width: 220px;
    height: 36px;
    padding: 0 15px;
    cursor: pointer;
  }
  ,
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1px solid #999;
  }
  ,
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #333 !important;
    border-width: 1px !important;
  }
  ,
  &:hover .MuiInputBase-colorError .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c02820;
  }
  ,
  & .MuiInputBase-colorError .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c02820;
  }
  ,
  & .MuiInputLabel-root {
    top: -8px;
    padding: 0 4px;
    padding-top: 2px;
    color: #595655;
    font-size: 14px;
    background: #fff;
    border-radius: 10px;
  }
  ,
  & .MuiFormLabel-filled {
    top: 0px;
    color: #999 !important;
    font-size: 1rem;
  }
  ,
  & .Mui-focused {
    top: 0px;
    color: #333 !important;
    font-size: 1rem;
  }
  ,
  // 错误提示
  & .MuiFormLabel-colorError {
    color: ${errorMain} !important;
  }

  & .MuiFormHelperText-root {
    width: fit-content;
    margin-right: 0;
    margin-left: 0px;
    padding-right: 2px;
    color: ${errorMain} !important;
    font-size: 10px;
    white-space: nowrap;
    text-indent: 4px;
    background: #fff;
    border-radius: 10px;
    transform: scale(0.87, 0.87);
  }

  ,

  //后缀图标
  & .MuiInputBase-root .MuiInputAdornment-positionEnd .MuiIconButton-edgeEnd {
    margin-right: 10px;
    padding: 0;
  }
  ,
  &
    .MuiInputBase-colorInfo
    .MuiInputAdornment-positionEnd
    .MuiIconButton-edgeEnd
    .MuiSvgIcon-root {
    color: #999;
  }
  ,
  &
    .MuiInputBase-colorError
    .MuiInputAdornment-positionEnd
    .MuiIconButton-edgeEnd
    .MuiSvgIcon-root {
    color: ${errorMain};
  }
  ,
  & .MuiFormLabel-asterisk {
    margin-left: -4px;
  }
`;

const InputField: FC<InputFieldProps> = ({
  subLink = "",
  subLinkClick,
  className = "",
  inputType = "default",
  inputValue,
  setInputValue,
  errorType = "noError",
  setErrorType,
  ...props
}) => {
  //password showType
  const [showType, setShowType] = useState<boolean>(false);
  // password is hidden
  const [isHide, setIsHide] = useState<boolean>(true);
  // 校验是否是email 格式
  const emailRegex = (email: string | number) => {
    email = email.toString();
    const email_Regex = new RegExp("^.+@[A-Z0-9a-z]+.[a-zA-Z]+$");
    return email_Regex.test(email);
  };

  // 校验eamil格式
  const checkEmail = () => {
    if (inputValue === "") {
      setErrorType && setErrorType("emailEmpty");
    } else if (!emailRegex(inputValue || "")) {
      setErrorType && setErrorType("nonvalidEmail");
    } else {
      setErrorType && setErrorType("noError");
    }
  };
  // 校验密码是否格式正确
  const checkPass = () => {
    if (inputValue === "") {
      setErrorType && setErrorType("passEmpty");
    } else {
      setErrorType && setErrorType("noError");
    }
  };
  // Prevent browser auto fill from causing style errors
  useEffect(() => {
    setTimeout(() => {
      setShowType(true);
    }, 1000);
  }, []);
  switch (inputType) {
    case "email":
      return (
        <div className={`${styles.textBox} ${className}`}>
          <LogTextField
            autoComplete="new-password"
            value={inputValue}
            helperText={errorTypes[errorType].tip}
            color={errorType !== "noError" ? "error" : "info"}
            onChange={(v) => {
              setErrorType && setErrorType("noError");
              setInputValue && setInputValue(v.target.value);
            }}
            onFocus={() => {
              setErrorType && setErrorType("noError");
            }}
            onBlur={() => {
              checkEmail();
            }}
            className={styles.input}
            {...props}
          />
          <p
            className={styles.subLink}
            style={{ display: subLink !== "" ? "inline-block" : "none" }}
          >
            <span
              style={{ color: `${commonWhite}` }}
              onClick={() => {
                subLinkClick && subLinkClick();
              }}
            >
              {subLink}
            </span>
          </p>
        </div>
      );
    case "pass":
      return (
        <div className={`${styles.textBox} ${className}`}>
          <LogTextField
            autoComplete="new-password"
            value={inputValue}
            helperText={errorTypes[errorType].tip}
            type={showType ? "password" : "text"}
            color={errorType !== "noError" ? "error" : "info"}
            onChange={(v) => {
              setErrorType && setErrorType("noError");
              setInputValue && setInputValue(v.target.value);
            }}
            onFocus={() => {
              setErrorType && setErrorType("noError");
            }}
            onBlur={() => {
              // checkPass();
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowType(!showType);
                      setIsHide(!isHide);
                    }}
                    edge="end"
                  >
                    {errorType === "passEmpty" ? (
                      <></>
                    ) : isHide ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className={styles.input}
            {...props}
          />
          <p
            className={styles.subLink}
            style={{ display: subLink !== "" ? "inline-block" : "none" }}
          >
            <span
              style={{ color: `${commonWhite}` }}
              onClick={() => {
                subLinkClick && subLinkClick();
              }}
            >
              {subLink}
            </span>
          </p>
        </div>
      );
    default:
      return (
        <div className={`${styles.textBox} ${className}`}>
          <LogTextField className={styles.input} {...props} />
          <p
            className={styles.subLink}
            style={{ display: subLink !== "" ? "inline-block" : "none" }}
          >
            <span
              style={{ color: `${commonWhite}` }}
              onClick={() => {
                subLinkClick && subLinkClick();
              }}
            >
              {subLink}
            </span>
          </p>
        </div>
      );
  }
};
export default InputField;
