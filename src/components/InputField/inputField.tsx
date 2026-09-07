/**
 * global TextField: Input box with effect
 * @param
 * className: class name
 * subLink: Text at the bottom right of the input box
 * subLinkClick: Click callback for the text in the lower right corner of the input box
 * inputType: types of input --- email\pass\default
 * inputValue: value of input
 * setInputValue: How to set the value of the input box
 * errorType: types of error --- noError\emailEmpty\passEmpty\nonvalidEmail
 * setErrorType: How to set the error type
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
export const LogTextField = styled(TextField)`
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
  // error hint
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

  // suffix icon
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
// Validate whether the value is in email format
export const emailRegex = (email: string | number) => {
  email = email.toString();
  const email_Regex = new RegExp("^.+@[A-Z0-9a-z]+.[a-zA-Z]+$");
  return email_Regex.test(email);
};

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
  // Validate email format
  const checkEmail = () => {
    if (inputValue === "") {
      setErrorType && setErrorType("emailEmpty");
    } else if (!emailRegex(inputValue || "")) {
      setErrorType && setErrorType("nonvalidEmail");
    } else {
      setErrorType && setErrorType("noError");
    }
  };
  // Validate whether the password format is correct
  // const checkPass = () => {
  //   if (inputValue === "") {
  //     setErrorType && setErrorType("passEmpty");
  //   } else {
  //     setErrorType && setErrorType("noError");
  //   }
  // };
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
