import styles from './index.less';
import Button from '@mui/material/Button';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>Hello</Button>
    </div>
  );
}
