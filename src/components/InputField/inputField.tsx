/**
 * description：global TextField
 *
 * param:subLink
 *
 * return <InputField/>
 */
import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import type { FC } from "react";
import styles from "./inputField.less";

export type InputFieldProps = TextFieldProps & {
  className?: string;
  subLink?: string;
};

const LogTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    width: 220px;
    padding: 0;
    border-radius: 18px;
  }
  ,
  & .MuiInputBase-input {
    width: 220px;
    height: 36px;
    padding: 0 15px;
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
    color: #595655;
    font-size: 14px;
  }
  ,
  & .MuiFormLabel-filled {
    top: 0;
    color: #999 !important;
    font-size: 1rem;
  }
  ,
  & .Mui-focused {
    top: 0;
    color: #333 !important;
    font-size: 1rem;
  }
  ,
  // 错误提示
  & .MuiFormLabel-colorError {
    color: #d1000d !important;
  }

  & .MuiFormHelperText-root {
    color: #d1000d !important;
    font-size: 10px;
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
    color: #d1000d;
  }
`;
const InputField: FC<InputFieldProps> = ({
  subLink = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`${styles.textBox} ${className}`}>
      <LogTextField className={styles.input} {...props} />
      <p
        className={styles.subLink}
        style={{ display: subLink !== "" ? "inline-block" : "none" }}
      >
        {subLink}
      </p>
    </div>
  );
};
export default InputField;
