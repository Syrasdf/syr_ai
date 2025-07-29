import styles from './loading.module.css';
import { memo } from 'react';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}></div>

    </div>
  )
}

export default memo(Loading);