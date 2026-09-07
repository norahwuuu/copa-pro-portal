export type centerRectanglePropsType = {
  width?: string | number;
  className?: string;
  children?: React.ReactNode;
  mainTitle?: string; // First-line title
  subtitle?: string; // Second-line title
  headerInfo?: {
    show: boolean;
    type: "error";
    info: string;
  };
};
