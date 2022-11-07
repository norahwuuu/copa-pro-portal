import Header from "@/components/Header/header";
import { FC, ReactChildren } from "react";

const Patient: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      {children}
    </>
  );
};

export default Patient;
