export type centerRectanglePropsType = {
  width?: string | number;
  className?: string;
  children?: React.ReactNode;
  mainTitle?: string; //第一行标题
  subtitle?: string; //第二行标题
  headerInfo?: {
    show: boolean;
    type: "error";
    info: string;
  };
};
