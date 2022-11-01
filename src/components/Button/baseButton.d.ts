export type baseButtonPropsType = {
  className?: string;
  children: string;
  type?: "default" | "gray" | "red" | "disabled" | "cancel";
  size?: "default" | "slim";
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
};
