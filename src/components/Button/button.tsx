import styles from './button.less';

export interface propsType {
  className?: string;
  children?: React.ReactNode;
}

/**
 * description：按钮
 *
 * param:
 *
 * return <Button/>
 */

const Button = ({ className }: propsType) => {
  const classname = className ? '' : styles.button;

  return <div></div>;
};
export default Button;
