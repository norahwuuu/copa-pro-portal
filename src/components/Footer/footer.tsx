import { footerText } from "@/pages/Login/column";
import { Typography } from "@mui/material";
import React from "react";
import styles from "./footer.less";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} ${styles.supprt}`}>
        <div className={styles.circle}>?</div>
        <div>
          <Typography color="white" variant="body2" fontWeight="200">
            {footerText.supportN}
          </Typography>
          <Typography color="white" variant="body2" fontWeight="200">
            {footerText.supportE}
          </Typography>
        </div>
      </div>
      <div className={`${styles.container} ${styles.middle}`}>
        <Typography color="white" variant="body2" fontWeight="300">
          {footerText.mid}
        </Typography>
        <Typography color="white" variant="body2" fontWeight="300">
          {footerText.v}
        </Typography>
      </div>
      <div className={styles.container}></div>
    </div>
  );
};
export default React.memo(Footer);
