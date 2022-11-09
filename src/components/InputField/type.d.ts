export interface InputFieldType {
  className?: string;
  subLink?: string;
  inputType?: string;
  inputValue?: string | number;
  setInputValue?: (arg0: string) => void;
  errorType?: string;
  setErrorType?: (arg0: string) => void;
  subLinkClick?: () => void;
}
