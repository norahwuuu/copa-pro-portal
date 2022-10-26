import styles from "./footer.less";
import React from 'react';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} ${styles.supprt}`}>
        <div className={styles.circle}>?</div>
        <div>
          <div className={styles.text}>Customer support: (123) 457-7890</div>
          <div className={styles.text}>support@aligners.com</div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.middle}`}>
        <div className={styles.text}>
          © 2016-2022 Aligners Inc. All Rights Reserved.
        </div>
        <div className={styles.text}>V. 1.0.0</div>
      </div>
      <div className={styles.container}></div>
    </div>
  );
};
export default Footer;
