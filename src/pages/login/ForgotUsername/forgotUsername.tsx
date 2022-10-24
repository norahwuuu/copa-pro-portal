import CenterRectangle from '@/components/CenterRectangle/centerRectangle';
import styles from './forgotUsername.less';
const ForgotUsername = () => {
  return (
    <CenterRectangle mainTitle="Forgot username?">
      <div className={styles.forgotUsername}>
        <div className={styles.text1}>
          Please call your customer service agent at:
        </div>
        <div className={styles.text2}>(123) 456-7890</div>
        <button>back to login</button>
      </div>
    </CenterRectangle>
  );
};
export default ForgotUsername;
