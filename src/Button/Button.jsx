
import React from 'react';
import styles from './Button.less';

const Button = (props) => {
  const { children } = props;
  return  (
    <div className={styles.container}>{children || '按钮'}</div>
  )
}

export default Button;