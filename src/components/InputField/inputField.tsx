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
  &: hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1px solid #333;
  },
  &: hover .MuiInputBase-colorError .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c02820;
  },

  & .MuiInputLabel-root {
    color: #595655;
    top:-8px;
    font-size:14px;
  },

  & .MuiFormLabel-filled {
      color:#999 !important;
      top:0;
      font-size:1rem;
  },
    & .Mui-focused {
    color: #333 !important;
    top:0;
    font-size:1rem;
  },
  & .MuiFormLabel-colorError{
      color:#D1000D!important;
  }

  & .MuiFormHelperText-root {
    color: #d1000d!important;
    font-size: 10px;
  },
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
